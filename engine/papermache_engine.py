#!/usr/bin/env python3
"""
Papermache Engine (First-Principles Implementation)
Author: Karpathy & Vonny & Boltz

Calculates:
1. Tokenization and Assertion Density (invariants vs boilerplate pulp)
2. Autoregressive cross-entropy loss L(B) vs conditional loss L(B | A)
3. Empirical Mutual Information: I(A -> B) = L(B) - L(B | A)
4. Tournament Clash Scores: Which paper transmits more invariant truth per token?
"""

import sys
import os
import math
import json
import re
from typing import List, Dict, Any, Tuple
from collections import Counter, defaultdict

try:
    import tiktoken
    ENCODER = tiktoken.get_encoding("cl100k_base")
    def tokenize(text: str) -> List[str]:
        # Return string token pieces for inspection
        token_ids = ENCODER.encode(text)
        return [ENCODER.decode([tid]) for tid in token_ids]
except ImportError:
    ENCODER = None
    def tokenize(text: str) -> List[str]:
        # Fallback whitespace / punctuation regex tokenizer
        return re.findall(r"\w+|[^\w\s]", text, re.UNICODE)


# Linguistic heuristics for academic fluff / boilerplate recognition
BOILERPLATE_PATTERNS = [
    r"\b(it is well known that|in recent years|has attracted significant interest)\b",
    r"\b(the rest of this paper is organized as follows|in section \w+ we discuss)\b",
    r"\b(we would like to thank|supported by grant|financial support)\b",
    r"\b(to the best of our knowledge|remarkable progress has been made)\b",
    r"\b(furthermore|moreover|notably|obviously|clearly)\b",
    r"\b(as shown in figure|as depicted in table)\b",
    r"\b(demonstrates the superiority|outperforms state-of-the-art)\b",
]

INVARIANT_PATTERNS = [
    r"(\$[^$]+\$|\\\[.+?\\\])",                        # Math equations
    r"(\b[Hh]amiltonian|\b[Ee]igenvalue|\b[Uu]nitary|\b[Ee]ntropy)",  # Foundational operators
    r"([a-zA-Z_]\s*=\s*[-0-9\.\+\*\/]+)",              # Equations/assignments
    r"(O\([Nn][\^\d]*\)|[0-9]+\.[0-9]+(?:\s*(?:eV|nm|Hz|qubits?|bits?|dB|%)))", # Benchmarks & scaling
    r"(\b[Tt]heorem|\b[Ll]emma|\b[Pp]roof|\b[Aa]xiom|\b[Cc]orollary)", # Formal constructs
    r"(\bTr\b|\bdet\b|\\log_2|\b\\sum\b|\\int\b|\\langle|\\rangle)", # Tensor & matrix operators
]


class LanguageModelCompressor:
    """
    Empirical N-gram / Subword Autoregressive Language Model Compressor.
    Computes Shannon cross-entropy in bits/token:
    L(X) = - 1/N sum_t log2 P(x_t | x_{<t})
    L(B | A) = - 1/N sum_t log2 P(b_t | A, b_{<t})
    """
    def __init__(self, vocab_size: int = 50000, n: int = 3, alpha: float = 0.05):
        self.vocab_size = vocab_size
        self.n = n
        self.alpha = alpha  # Additive smoothing parameter

    def _build_counts(self, tokens: List[str]) -> Tuple[Dict, Dict]:
        ngrams = defaultdict(Counter)
        contexts = Counter()
        padded = ["<BOS>"] * (self.n - 1) + tokens + ["<EOS>"]
        for i in range(len(tokens) + 1):
            ctx = tuple(padded[i:i + self.n - 1])
            target = padded[i + self.n - 1]
            ngrams[ctx][target] += 1
            contexts[ctx] += 1
        return ngrams, contexts

    def compute_token_losses(self, target_tokens: List[str], prior_tokens: List[str] = None) -> List[float]:
        """
        Computes per-token cross-entropy loss (in bits).
        If prior_tokens is given, the model conditions on prior_tokens first.
        """
        training_corpus = []
        if prior_tokens:
            training_corpus.extend(prior_tokens)
        training_corpus.extend(target_tokens)

        ngrams, contexts = self._build_counts(training_corpus)
        padded = ["<BOS>"] * (self.n - 1) + target_tokens

        losses = []
        for i in range(len(target_tokens)):
            ctx = tuple(padded[i:i + self.n - 1])
            target = target_tokens[i]
            ctx_count = contexts[ctx]
            target_count = ngrams[ctx][target]

            # Laplace / Lidstone smoothed probability
            prob = (target_count + self.alpha) / (ctx_count + self.alpha * self.vocab_size)
            loss_bits = -math.log2(max(prob, 1e-12))
            losses.append(round(min(loss_bits, 16.0), 3))

        return losses


def classify_token(token: str, context_window: str) -> str:
    """
    Classifies token into:
    - 'invariant': Core mathematical / empirical claim (crystallizes)
    - 'pulp': Boilerplate / low-signal filler (shreds into papier-mâché)
    - 'connective': Standard connective prose
    """
    t_clean = token.strip()
    if not t_clean:
        return "connective"

    # Check for invariant markers
    for pattern in INVARIANT_PATTERNS:
        if re.search(pattern, t_clean, re.IGNORECASE):
            return "invariant"
        if re.search(pattern, context_window, re.IGNORECASE) and len(t_clean) > 2:
            return "invariant"

    # Check for boilerplate fluff markers
    for pattern in BOILERPLATE_PATTERNS:
        if re.search(pattern, context_window, re.IGNORECASE):
            return "pulp"

    if t_clean.lower() in {"very", "moreover", "notably", "furthermore", "essentially", "literally", "obviously", "clearly"}:
        return "pulp"

    return "connective"


def analyze_paper(title: str, text: str) -> Dict[str, Any]:
    raw_tokens = tokenize(text)
    total_tokens = len(raw_tokens)

    # Classify each token
    token_details = []
    invariants = 0
    pulp = 0
    connectives = 0

    for i, tok in enumerate(raw_tokens):
        # 5-token local context window
        start = max(0, i - 2)
        end = min(total_tokens, i + 3)
        window = "".join(raw_tokens[start:end])
        category = classify_token(tok, window)

        if category == "invariant":
            invariants += 1
        elif category == "pulp":
            pulp += 1
        else:
            connectives += 1

        token_details.append({
            "index": i,
            "text": tok,
            "category": category
        })

    assertion_density = (invariants / max(1, total_tokens))
    pulp_ratio = (pulp / max(1, total_tokens))

    return {
        "title": title,
        "token_count": total_tokens,
        "invariants_count": invariants,
        "pulp_count": pulp,
        "connective_count": connectives,
        "assertion_density": round(assertion_density, 4),
        "pulp_ratio": round(pulp_ratio, 4),
        "tokens": token_details
    }


def clash_papers(paper_a: Dict[str, str], paper_b: Dict[str, str]) -> Dict[str, Any]:
    """
    Executes the Papermache clash between Paper A and Paper B.
    """
    analysis_a = analyze_paper(paper_a["title"], paper_a["text"])
    analysis_b = analyze_paper(paper_b["title"], paper_b["text"])

    tokens_a = [t["text"] for t in analysis_a["tokens"]]
    tokens_b = [t["text"] for t in analysis_b["tokens"]]

    compressor = LanguageModelCompressor()

    # Autonomous loss L(X)
    loss_a_raw = compressor.compute_token_losses(tokens_a)
    loss_b_raw = compressor.compute_token_losses(tokens_b)

    # Conditional loss L(B | A) and L(A | B)
    loss_b_given_a = compressor.compute_token_losses(tokens_b, prior_tokens=tokens_a)
    loss_a_given_b = compressor.compute_token_losses(tokens_a, prior_tokens=tokens_b)

    avg_loss_a = sum(loss_a_raw) / max(1, len(loss_a_raw))
    avg_loss_b = sum(loss_b_raw) / max(1, len(loss_b_raw))

    avg_loss_b_given_a = sum(loss_b_given_a) / max(1, len(loss_b_given_a))
    avg_loss_a_given_b = sum(loss_a_given_b) / max(1, len(loss_a_given_b))

    # Empirical Mutual Information gain
    # I(A -> B) = L(B) - L(B | A) (how many bits of surprise A removes from B)
    mutual_info_a_to_b = max(0.0, avg_loss_b - avg_loss_b_given_a)
    mutual_info_b_to_a = max(0.0, avg_loss_a - avg_loss_a_given_b)

    # Attach token-level loss data
    for i, t in enumerate(analysis_a["tokens"]):
        t["loss"] = loss_a_raw[i]
        t["cond_loss"] = loss_a_given_b[i]
        t["info_delta"] = round(loss_a_raw[i] - loss_a_given_b[i], 3)

    for i, t in enumerate(analysis_b["tokens"]):
        t["loss"] = loss_b_raw[i]
        t["cond_loss"] = loss_b_given_a[i]
        t["info_delta"] = round(loss_b_raw[i] - loss_b_given_a[i], 3)

    # Tournament Scoring: Information Per Token Efficiency
    # Score = (Assertion Density * 2.0) + (Mutual Info Outbound / Token Count) - (Pulp Ratio * 1.5)
    score_a = (analysis_a["assertion_density"] * 100.0) + (mutual_info_a_to_b * 10.0) - (analysis_a["pulp_ratio"] * 40.0)
    score_b = (analysis_b["assertion_density"] * 100.0) + (mutual_info_b_to_a * 10.0) - (analysis_b["pulp_ratio"] * 40.0)

    delta = score_a - score_b
    if abs(delta) < 1.0:
        winner = "TIE"
        verdict = "Both papers exhibit near-identical invariant density and mutual information transmission."
    elif delta > 0:
        winner = paper_a["title"]
        verdict = f"{paper_a['title']} dominates with {round(abs(delta), 1)} higher net information density per token, delivering lower pulp overhead and superior predictive compression."
    else:
        winner = paper_b["title"]
        verdict = f"{paper_b['title']} dominates with {round(abs(delta), 1)} higher net information density per token, delivering lower pulp overhead and superior predictive compression."

    return {
        "paper_a": analysis_a,
        "paper_b": analysis_b,
        "metrics": {
            "avg_loss_a": round(avg_loss_a, 2),
            "avg_loss_b": round(avg_loss_b, 2),
            "cond_loss_b_given_a": round(avg_loss_b_given_a, 2),
            "cond_loss_a_given_b": round(avg_loss_a_given_b, 2),
            "mutual_info_a_to_b": round(mutual_info_a_to_b, 3),
            "mutual_info_b_to_a": round(mutual_info_b_to_a, 3),
            "score_a": round(score_a, 2),
            "score_b": round(score_b, 2),
            "winner": winner,
            "verdict": verdict
        }
    }


# Built-in iconic test match presets
PRESET_CLASHES = {
    "shannon_vs_schumacher": {
        "name": "Shannon 1948 vs. Schumacher 1995: The Birth of the Qubit",
        "description": "Classical Shannon Entropy H = -sum p_i log2(p_i) clashes with Schumacher's Quantum Noiseless Coding and Density Matrix S = -Tr(rho log2 rho).",
        "paper_a": {
            "title": "Shannon (1948) - Mathematical Theory of Communication",
            "text": """The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have meaning; that is they refer to or are correlated according to some system with certain physical or conceptual entities. These semantic aspects of communication are irrelevant to the engineering problem. The significant aspect is that the actual message is one selected from a set of possible messages. The system must be designed to operate for each possible selection, not just the one which will actually be chosen since this is unknown at the time of design. If the number of messages in the set is finite this number or any monotonic function of this number can be regarded as a measure of the information produced when one message is chosen from the set, all choices being equally likely. As was pointed out by Hartley the most natural choice is the logarithmic function. We define the entropy of a discrete random variable X with probabilities p_1, ..., p_n as H(X) = - \\sum_{i=1}^n p_i \\log_2 p_i. The capacity of a discrete channel is C = \\lim_{T \\to \\infty} \\frac{\\log_2 N(T)}{T}. For a channel perturbed by white Gaussian noise of power N and bandwidth W, the maximum capacity is C = W \\log_2(1 + \\frac{P}{N})."""
        },
        "paper_b": {
            "title": "Schumacher (1995) - Quantum Coding",
            "text": """It is well known that classical information theory begins with the definition of the bit as the elementary unit of information. In recent years, considerable interest has been focused on quantum information. In this paper we show that a quantum state can be treated as an information resource. We define the quantum bit or 'qubit' as the elementary state of a two-level quantum system |psi> = alpha |0> + beta |1>. We consider an ensemble of pure states with density operator \\rho = \\sum_i p_i |phi_i><phi_i|. The von Neumann entropy of this source is S(\\rho) = - \\mathrm{Tr}(\\rho \\log_2 \\rho). We prove the quantum noiseless coding theorem: if S(\\rho) < C, then there exists a block coding scheme mapping N source states into M qubits such that as N \\to \\infty with M/N > S(\\rho), the fidelity F = <psi|rho_out|psi> \\to 1.0. Obviously, remarkable progress has been made, and we would like to thank our colleagues for fruitful discussions."""
        }
    },
    "feynman_vs_vqe": {
        "name": "Feynman 1982 vs. Peruzzo et al. 2014: Simulating Nature",
        "description": "Feynman's foundational quantum simulator proposal clashes with the Variational Quantum Eigensolver (VQE) algorithm.",
        "paper_a": {
            "title": "Feynman (1982) - Simulating Physics with Computers",
            "text": """Nature isn't classical, dammit, and if you want to make a simulation of nature, you'd better make it quantum mechanical, and by golly it's a wonderful problem, because it doesn't look so easy. The problem is whether we can simulate a quantum system of R particles using a computer whose size is proportional to R, not 2^R. Can you do it with a universal quantum computer? The Hamiltonian H = \\sum_{j} H_j acts on a Hilbert space of dimension 2^R. To compute the time evolution |psi(t)> = \\exp(-i H t / \\hbar) |psi(0)>, a classical Turing machine requires exponential time O(2^R) and memory O(2^R). But a quantum mechanical computer composed of two-state quantum elements can simulate the Hamiltonian evolution in polynomial time O(R^k)."""
        },
        "paper_b": {
            "title": "Peruzzo et al. (2014) - Variational Quantum Eigensolver",
            "text": """In recent years, the development of quantum technologies has witnessed remarkable progress. Furthermore, it is well known that electronic structure calculation is of paramount importance for chemistry. In this paper, we demonstrate a variational eigenvalue solver on a photonic quantum processor. We prepare an ansatz state |psi(theta)> = U(theta) |0> and measure the expectation value of the molecular Hamiltonian <H> = \\sum_i h_i <sigma_i>. A classical optimization algorithm iteratively minimizes E(theta) = <psi(theta)|H|psi(theta)>. As depicted in Figure 2, our method achieves chemical accuracy of 1.6 kcal/mol for He-H+ dissociation. We acknowledge financial support from grant NSF-CHE-12345. In section 3 we discuss error mitigation."""
        }
    }
}


if __name__ == "__main__":
    preset = PRESET_CLASHES["shannon_vs_schumacher"]
    res = clash_papers(preset["paper_a"], preset["paper_b"])
    print(json.dumps(res["metrics"], indent=2))
