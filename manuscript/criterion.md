# Papermache: Quantitative Evaluation of Scientific Information Value per Manuscript

**Point Reyes Sound, Inc.**

---

## 1. Goal

Given two competing scientific manuscripts $W_A$ and $W_B$ addressing the same physical, chemical, or informational domain $\mathcal{D}$, the goal of **Papermache** is to compute the asymmetric information value operator:

$$\Delta \mathcal{V}(A, B) = \mathcal{V}(W_A) - \mathcal{V}(W_B)$$

determining which work delivers greater non-tautological constraint on the physical state space per unit of communication overhead.

---

## 2. Information Value Criterion

### 2.1 Irreducible Invariant Payload ($\Omega$)
Let manuscript $W$ be decomposed into an ordered set of formal propositions $\mathcal{T} = \{T_1, T_2, \dots, T_K\}$. The invariant payload $\Omega(W)$ is:

$$\Omega(W) = \sum_{k=1}^K w(T_k) \cdot \mathbb{I}(T_k \notin \mathcal{K}_0)$$

where $\mathcal{K}_0$ represents the prior scientific knowledge base, $\mathbb{I}(\cdot)$ is the indicator function, and $w(T_k)$ weights operator assertions:

$$w(T_k) = \begin{cases} 3.0 & \text{Formal Theorem / Conservation Law} \\ 2.5 & \text{Hamiltonian / Variational Algorithm} \\ 2.0 & \text{Asymptotic Scaling Bound } O(f(N)) \\ 1.5 & \text{Quantitative Benchmark Invariant} \\ 0.0 & \text{Tautology / Qualitative Preamble} \end{cases}$$

### 2.2 Downstream Generative Reach ($\Gamma$)
The generative reach $\Gamma(T_k)$ quantifies the logarithm of the physical state space or parameter volume constrained by invariant $T_k$:

$$\Gamma(T_k) = \log_2 \left( \frac{\mathrm{Vol}(\mathcal{S}_{\text{unconstrained}})}{\mathrm{Vol}(\mathcal{S}_{\text{constrained}}(T_k))} \right)$$

### 2.3 Directed Mutual Information via Cross-Perplexity ($\hat{I}$)
Under an autoregressive compression policy $\pi_\theta$, the empirical entropy of manuscript $B$ is:

$$\mathcal{L}(B) = -\frac{1}{|B|} \sum_{t=1}^{|B|} \log_2 \pi_\theta(b_t \mid b_{<t})$$

The conditional loss of $B$ given prior conditioning on manuscript $A$ in context is:

$$\mathcal{L}(B \mid A) = -\frac{1}{|B|} \sum_{t=1}^{|B|} \log_2 \pi_\theta(b_t \mid A, b_{<t})$$

The directed empirical mutual information $\hat{I}(A \to B)$ is:

$$\hat{I}(A \to B) = \max\left(0, \mathcal{L}(B) - \mathcal{L}(B \mid A)\right)$$

### 2.4 Boilerplate Fluff Penalty ($\mathcal{P}$)
Let $N_{\text{pulp}}(W)$ denote the token count of discursive rhetoric, repetitive citations, and non-operative transitional prose, with total token length $|W|$:

$$\mathcal{P}(W) = \frac{N_{\text{pulp}}(W)}{|W|}$$

### 2.5 Total Composite Information Value ($\mathcal{V}$)
The global information value $\mathcal{V}(W)$ is:

$$\mathcal{V}(W) = \alpha \cdot \Omega(W) + \beta \cdot \sum_{k=1}^K \Gamma(T_k) - \gamma \cdot \mathcal{P}(W)$$

where $\alpha = 2.0$, $\beta = 0.8$, and $\gamma = 1.5$.

### 2.6 Minimax Tournament Decision ($\Delta \mathcal{V}$)
The net tournament superiority margin is:

$$\Delta \mathcal{V}(A, B) = \mathcal{V}(W_A) - \mathcal{V}(W_B) + \mu \left( \frac{\hat{I}(A \to B)}{|W_A|} - \frac{\hat{I}(B \to A)}{|W_B|} \right)$$

where $\mu > 0$ penalizes asymmetric redundancy.

---

## References

1. Shannon, C. E. (1948). A mathematical theory of communication. *Bell System Technical Journal*, 27(3), 379–423.
2. von Neumann, J. (1932). *Mathematische Grundlagen der Quantenmechanik*. Springer, Berlin.
3. Schumacher, B. (1995). Quantum coding. *Physical Review A*, 51(4), 2738–2747.
4. Shor, P. W. (1994). Algorithms for quantum computation: Discrete logarithms and factoring. *35th Annual Symposium on Foundations of Computer Science (FOCS)*, 124–134.
5. Kitaev, A. Y. (2003). Fault-tolerant quantum computation by anyons. *Annals of Physics*, 303(1), 2–30.
6. Peruzzo, A., McClean, J., Shadbolt, P., Yung, M.-H., Zhou, X.-Q., Love, P. J., Aspuru-Guzik, A., & O'Brien, J. L. (2014). A variational eigenvalue solver on a photonic quantum processor. *Nature Communications*, 5, 4213.
7. McArdle, S., Endo, S., Aspuru-Guzik, A., Benjamin, S. C., & Yuan, X. (2020). Quantum computational chemistry. *Reviews of Modern Physics*, 92(1), 015003.
8. Chakraborty, R. (2026). Quantum Boltzmann Equation Self-Consistent-Field for the Entropic Regularization of Mean-Field Singularities. *arXiv:2608.14979*.
9. Danilov, D., Ganoe, B., Otis, L., Gong, Z., Lu, Z., & Shee, J. (2026). Selecting optimal unrestricted Hartree–Fock trial wave functions for phaseless auxiliary-field quantum Monte Carlo: Accuracy and limitations in modeling three iron–sulfur clusters. *Journal of Chemical Theory and Computation*, 22(16), 8274–8287.
