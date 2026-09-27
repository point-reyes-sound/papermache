/**
 * Papermache - Clean Editorial Interface with Point Reyes Theme
 * Architecture: @bonnie
 * Invariant & Operator Metrics: @vonny, @boltz, @karpathy
 */

const CASE_STUDIES = [
  {
    id: "info_theory",
    domain: "Information Theory",
    domainClass: "domain-info",
    deltaV: 24.2,
    paperA: {
      title: "Shannon (1948)",
      fullTitle: "A Mathematical Theory of Communication",
      venue: "Bell System Technical Journal, Vol. 27",
      pages: "55 pages",
      pdfUrl: "/papers/shannon1948.pdf",
      score: 98.4,
      sub: "23 Foundational Theorems",
      invariants: [
        "Proved 23 theorems establishing the universal mathematical foundation of communication.",
        "Proved the Source Coding Theorem: Entropy H(X) = -∑ p_i log_2(p_i) is the exact physical limit of lossless compression.",
        "Proved the Noisy-Channel Coding Theorem: Reliable communication is achievable at any rate R < C = lim log_2(N(T))/T.",
        "Derived the Shannon-Hartley Capacity Law: C = W log_2(1 + P/N) for Gaussian channels.",
        "Established Rate-Distortion Theory and Continuous Differential Entropy."
      ]
    },
    paperB: {
      title: "Schumacher (1995)",
      fullTitle: "Quantum Coding",
      venue: "Physical Review A, Vol. 51, No. 4",
      pages: "10 pages",
      pdfUrl: "/papers/schumacher1995.pdf",
      score: 74.2,
      sub: "Quantum Noiseless Coding",
      invariants: [
        "Formally defined the 'Qubit' as the elementary quantum state |ψ⟩ = α|0⟩ + β|1⟩ in Hilbert space.",
        "Employed von Neumann density operator ρ = ∑ p_i |φ_i⟩⟨φ_i| as an information resource.",
        "Proved the Quantum Noiseless Coding Theorem: Asymptotically N states compress into M qubits when M/N > S(ρ) = -Tr(ρ log_2 ρ).",
        "Defined quantum fidelity limit F = ⟨ψ|ρ_out|ψ⟩ → 1.0 under typical subspace projection."
      ]
    },
    verdict: "Shannon (1948) Dominates (+24.2 ΔV)",
    deltaVal: "+24.2 ΔV (Paper A)",
    vonnyCritique: "Shannon proves 23 global theorems that permanently bound the state space of every future communication channel. Schumacher's work is brilliant, but it is an algebraic Hilbert-space projection of Shannon's typical subspace theorem.",
    boltzCritique: "Shannon’s 55 pages reduce macrostate uncertainty across all discrete and continuous channels. The sheer thermodynamic phase-space volume governed by Shannon is orders of magnitude larger."
  },
  {
    id: "quantum_algos",
    domain: "Quantum Algorithms",
    domainClass: "domain-algo",
    deltaV: 8.3,
    paperA: {
      title: "Shor (1994)",
      fullTitle: "Algorithms for Quantum Computation: Discrete Logarithms and Factoring",
      venue: "IEEE FOCS / arXiv:quant-ph/9508027",
      pages: "28 pages",
      pdfUrl: "/papers/shor1994.pdf",
      score: 96.8,
      sub: "Super-Polynomial Speedup",
      invariants: [
        "Constructed the Quantum Fourier Transform (QFT) over Z_2^k and modular arithmetic rings.",
        "Proved polynomial-time prime factorization in O((log N)^2 (log log N)) steps.",
        "Demonstrated super-polynomial quantum speedup over the best classical General Number Field Sieve.",
        "Proved the first catastrophic security vulnerability for classical RSA and Diffie-Hellman cryptosystems."
      ]
    },
    paperB: {
      title: "Harrow, Hassidim, Lloyd (2009)",
      fullTitle: "Quantum Algorithm for Linear Systems of Equations (HHL)",
      venue: "Physical Review Letters, Vol. 103 / arXiv:0811.3171",
      pages: "15 pages",
      pdfUrl: "/papers/hhl2009.pdf",
      score: 88.5,
      sub: "Quantum Matrix Inversion",
      invariants: [
        "Formulated the HHL quantum linear system solver for A|x⟩ = |b⟩.",
        "Achieved exponential scaling advantage: O(κ^2 s^2 log(N)/ε) vs classical O(N s κ).",
        "Pioneered Hamiltonian simulation combined with Quantum Phase Estimation for matrix reciprocal eigenvalue inversion ∑ λ_j^(-1) |u_j⟩⟨u_j|.",
        "Established the algorithmic cornerstone for modern quantum machine learning and differential equation solvers."
      ]
    },
    verdict: "Shor (1994) Wins (+8.3 ΔV)",
    deltaVal: "+8.3 ΔV (Paper A)",
    vonnyCritique: "Shor established the empirical existence proof that quantum computing provides super-polynomial speedups over classical Turing machines. HHL is a magnificent operator matrix inversion theorem, but Shor broke the complexity boundary.",
    boltzCritique: "Shor collapsed the computational entropy of the factoring problem from exponential to polynomial, transforming theoretical quantum mechanics into an engineering imperative."
  },
  {
    id: "quantum_chem",
    domain: "Quantum Chemistry",
    domainClass: "domain-chem",
    deltaV: 5.4,
    paperA: {
      title: "Peruzzo et al. (2014)",
      fullTitle: "A Variational Eigenvalue Solver on a Photonic Quantum Processor (VQE)",
      venue: "Nature Communications / arXiv:1304.3061",
      pages: "7 pages",
      pdfUrl: "/papers/vqe2014.pdf",
      score: 84.2,
      sub: "Experimental NISQ VQE",
      invariants: [
        "Demonstrated the first hybrid quantum-classical Variational Quantum Eigensolver (VQE).",
        "Mapped molecular Hamiltonian expectation values ⟨H⟩ = ∑ h_i ⟨σ_i⟩ onto parameterized quantum states U(θ)|0⟩.",
        "Experimentally calculated the ground-state energy curve of He-H+ molecule to 1.6 kcal/mol chemical accuracy.",
        "Bypassed deep coherent circuit depth limitations on Noisy Intermediate-Scale Quantum (NISQ) processors."
      ]
    },
    paperB: {
      title: "McArdle et al. (2020)",
      fullTitle: "Quantum Computational Chemistry",
      venue: "Reviews of Modern Physics, Vol. 92 / arXiv:1808.10402",
      pages: "50 pages",
      pdfUrl: "/papers/mcardle2020.pdf",
      score: 89.6,
      sub: "Comprehensive Formal Synthesis",
      invariants: [
        "Unifies the complete fermion-to-qubit operator mappings: Jordan-Wigner, Bravyi-Kitaev, and parity transformations.",
        "Provides rigorous scaling analysis of Unitary Coupled Cluster (UCCSD) and multireference active spaces.",
        "Derives exact phase-estimation resource bounds: O(N^4) vs Trotter-Suzuki error bounds.",
        "Formalizes quantum error mitigation, zero-noise extrapolation, and symmetry-conserving ansatz bounds across all modern chemistry benchmarks."
      ]
    },
    verdict: "McArdle et al. (2020) Wins (+5.4 ΔV)",
    deltaVal: "+5.4 ΔV (Paper B)",
    vonnyCritique: "Peruzzo was the vital experimental prototype, but McArdle's 50-page treatise provides the complete, irreducible operator algebra for quantum chemistry. The total information payload of McArdle is substantially larger.",
    boltzCritique: "McArdle maps the entire electronic correlation phase space across molecules, basis sets, and Hamiltonian projections with exhaustive mathematical rigor."
  },
  {
    id: "qbe_vs_afqmc",
    domain: "Quantum Chemistry / Kinetic SCF",
    domainClass: "domain-chem",
    deltaV: 3.6,
    paperA: {
      title: "Chakraborty (2026)",
      fullTitle: "Quantum Boltzmann Equation Self-Consistent-Field for the Entropic Regularization of Mean-Field Singularities",
      venue: "arXiv:2608.14979 (Point Reyes Sound)",
      pages: "14 pages",
      pdfUrl: "/papers/chakraborty2026.pdf",
      score: 94.8,
      sub: "QBE-SCF & Entropic Regularization",
      invariants: [
        "Derived the Quantum Boltzmann Equation self-consistent-field (QBE-SCF) propagating the 1-RDM P in atomic orbital basis.",
        "Introduced the Bhatnagar-Gross-Krook (BGK) collision operator driving the density matrix to instantaneous Fermi-Dirac equilibrium target P_0(F).",
        "Proved stationarity condition [F, P] = 0 satisfies Hartree-Fock while permitting non-idempotent steady states P^2 ≠ P.",
        "Zero-temperature kinetic ergodicity fractionalizes degenerate active spaces, recovering the Generalized Valence Bond (GVB) limit for H_3 symmetric dissociation.",
        "Finite-temperature entropic regularization resolves conical intersections in BeH_2 and H_4 (D_2h → D_4h → D_2h) from a real-valued single-reference density without multireference wavefunctions."
      ]
    },
    paperB: {
      title: "Danilov, Shee et al. (2026)",
      fullTitle: "Selecting Optimal Unrestricted Hartree–Fock Trial Wave Functions for Phaseless Auxiliary-Field Quantum Monte Carlo: Accuracy and Limitations in Modeling Three Iron–Sulfur Clusters",
      venue: "J. Chem. Theory Comput. (JCTC), 22, 16, 8274–8287",
      pages: "14 pages",
      pdfUrl: "/papers/shee2026.pdf",
      score: 91.2,
      sub: "ph-AFQMC Trial State Dilemma",
      invariants: [
        "Systematic benchmark of Phaseless Auxiliary-Field Quantum Monte Carlo (ph-AFQMC) on active-space models of [2Fe-2S]^2+, [4Fe-4S]^2+, and [4Fe-4S]^4+ clusters.",
        "Exposed the severe 'symmetry dilemma' where mean-field UHF yields proliferating broken-symmetry minima with variations > 15 kcal/mol.",
        "Demonstrated that the lowest-energy UHF determinant is frequently NOT the optimal trial state for ph-AFQMC projection.",
        "Proved trial wave function nodal bias remains the principal accuracy bottleneck in polynomial-scaling quantum Monte Carlo."
      ]
    },
    verdict: "Chakraborty (2026) Wins (+3.6 ΔV)",
    deltaVal: "+3.6 ΔV (Paper A)",
    vonnyCritique: "Shee et al. expose the fatal disease of standard mean-field theory: the symmetry dilemma and local minima trapping in broken-spin UHF determinants. Chakraborty's QBE-SCF attacks this at the operator root: by relaxing the density matrix through kinetic BGK collisions, it bypasses integer Aufbau projections and dissolves the singularity from within single-reference mechanics.",
    boltzCritique: "A triumph of non-equilibrium statistical mechanics! Where classical SCF gets trapped in spurious mean-field broken symmetries, Chakraborty uses finite-temperature entropic regularization and kinetic ergodicity to resolve multi-reference degeneracies without multi-Slater complexity."
  },
  {
    id: "fault_tolerance",
    domain: "Fault Tolerance",
    domainClass: "domain-qec",
    deltaV: 2.1,
    paperA: {
      title: "Kitaev (1997)",
      fullTitle: "Fault-tolerant quantum computation by anyons",
      venue: "Annals of Physics / arXiv:quant-ph/9707021",
      pages: "27 pages",
      pdfUrl: "/papers/kitaev1997.pdf",
      score: 97.2,
      sub: "Topological Anyon Code",
      invariants: [
        "Invented the Toric Code Hamiltonian: H = -J_e ∑_s A_s - J_m ∑_p B_p with star and plaquette stabilizer operators.",
        "Introduced the Surface Code architecture that dominates modern superconducting quantum hardware.",
        "Proved that quantum information can be stored in non-local topological degrees of freedom immune to local perturbation.",
        "Formulated fault tolerance via non-Abelian anyon braiding and topological quantum field theory."
      ]
    },
    paperB: {
      title: "Shor (1994)",
      fullTitle: "Algorithms for Quantum Computation (with QEC Appendix)",
      venue: "IEEE FOCS / Phys Rev A 52, R2493",
      pages: "28 pages",
      pdfUrl: "/papers/shor1994.pdf",
      score: 95.1,
      sub: "First 9-Qubit Code Proof",
      invariants: [
        "Proved that quantum error correction is physically possible despite continuous unitary noise and no-cloning theorem.",
        "Constructed the 9-qubit code: |0_L⟩ = 1/(2√2) (|000⟩+|111⟩)(|000⟩+|111⟩)(|000⟩+|111⟩).",
        "Disentangled bit-flip (X) errors from phase-flip (Z) errors using syndrome measurements without collapsing superposition."
      ]
    },
    verdict: "Kitaev (1997) Wins (+2.1 ΔV)",
    deltaVal: "+2.1 ΔV (Paper A)",
    vonnyCritique: "Kitaev’s toric code operator algebra is breathtaking. By embedding stabilizers into a 2D topological surface, he provided the literal blueprint that Google Quantum AI and every major lab builds today.",
    boltzCritique: "Kitaev created a macroscopic topological ground-state degeneracy that possesses thermodynamic resilience against ambient thermal baths."
  }
];

class PapermacheApp {
  constructor() {
    // Sort strictly by Delta V descending (Rank 1 to Rank 5)
    this.studies = [...CASE_STUDIES].sort((a, b) => b.deltaV - a.deltaV);
    this.currentStudy = this.studies[0];
    this.initDOM();
    this.renderTable();
    this.loadCaseStudy(this.currentStudy.id);
  }

  initDOM() {
    this.tbody = document.getElementById('case-studies-tbody');

    // Dual Paper Frame elements
    this.paperBarTitleA = document.getElementById('paper-bar-title-a');
    this.paperBarTitleB = document.getElementById('paper-bar-title-b');
    this.paperExternalA = document.getElementById('paper-external-a');
    this.paperExternalB = document.getElementById('paper-external-b');
    this.pdfFrameA = document.getElementById('pdf-frame-a');
    this.pdfFrameB = document.getElementById('pdf-frame-b');

    // Scoreboard elements
    this.pillarNameA = document.getElementById('pillar-name-a');
    this.pillarScoreA = document.getElementById('pillar-score-a');
    this.pillarSubA = document.getElementById('pillar-sub-a');

    this.pillarNameB = document.getElementById('pillar-name-b');
    this.pillarScoreB = document.getElementById('pillar-score-b');
    this.pillarSubB = document.getElementById('pillar-sub-b');

    this.deltaVDisplay = document.getElementById('delta-v-display');
    this.verdictDisplay = document.getElementById('verdict-display');

    // Accordion names & lists
    this.accNameA = document.getElementById('acc-name-a');
    this.accNameB = document.getElementById('acc-name-b');
    this.invariantsListA = document.getElementById('invariants-list-a');
    this.invariantsListB = document.getElementById('invariants-list-b');

    this.critiqueVonny = document.getElementById('critique-vonny');
    this.critiqueBoltz = document.getElementById('critique-boltz');

    // Accordion click handlers
    this.setupAccordions();
  }

  setupAccordions() {
    const accordions = [
      { btn: document.getElementById('acc-btn-a'), item: document.getElementById('acc-paper-a') },
      { btn: document.getElementById('acc-btn-b'), item: document.getElementById('acc-paper-b') },
      { btn: document.getElementById('acc-btn-operator'), item: document.getElementById('acc-operator') }
    ];

    accordions.forEach(({ btn, item }) => {
      if (btn && item) {
        btn.addEventListener('click', () => {
          item.classList.toggle('open');
        });
      }
    });
  }

  renderTable() {
    this.tbody.innerHTML = '';
    this.studies.forEach((study) => {
      const tr = document.createElement('tr');
      tr.className = `clash-row ${study.id === this.currentStudy.id ? 'active' : ''}`;
      tr.id = `row-${study.id}`;

      const scoreAClass = study.paperA.score >= study.paperB.score ? 'score-win' : 'score-loss';
      const scoreBClass = study.paperB.score >= study.paperA.score ? 'score-win' : 'score-loss';

      tr.innerHTML = `
        <td><span class="domain-tag ${study.domainClass}">${study.domain}</span></td>
        <td>
          <span class="paper-col-title">${study.paperA.title}</span>
          <span class="paper-col-sub">${study.paperA.pages} · ${study.paperA.venue.split('/')[0]}</span>
        </td>
        <td>
          <span class="paper-col-title">${study.paperB.title}</span>
          <span class="paper-col-sub">${study.paperB.pages} · ${study.paperB.venue.split('/')[0]}</span>
        </td>
        <td><small>${study.paperA.invariants.length} vs ${study.paperB.invariants.length} Core Invariants</small></td>
        <td><small>${study.paperA.sub} vs ${study.paperB.sub}</small></td>
        <td>
          <span class="score-badge ${scoreAClass}">${study.paperA.score}</span> vs 
          <span class="score-badge ${scoreBClass}">${study.paperB.score}</span>
        </td>
        <td class="verdict-cell">${study.verdict}</td>
      `;

      tr.addEventListener('click', () => {
        this.loadCaseStudy(study.id);
        // Smooth scroll down to the dual papers
        document.getElementById('case-study-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      this.tbody.appendChild(tr);
    });
  }

  loadCaseStudy(id) {
    const study = this.studies.find(s => s.id === id);
    if (!study) return;
    this.currentStudy = study;

    // Highlight row
    document.querySelectorAll('.clash-row').forEach(r => r.classList.remove('active'));
    const activeRow = document.getElementById(`row-${id}`);
    if (activeRow) activeRow.classList.add('active');

    // Dual Paper Frames
    this.paperBarTitleA.textContent = `${study.paperA.title} (${study.paperA.venue})`;
    this.paperBarTitleB.textContent = `${study.paperB.title} (${study.paperB.venue})`;
    this.paperExternalA.href = study.paperA.pdfUrl;
    this.paperExternalB.href = study.paperB.pdfUrl;
    this.pdfFrameA.src = `${study.paperA.pdfUrl}#view=FitH`;
    this.pdfFrameB.src = `${study.paperB.pdfUrl}#view=FitH`;

    // Scoreboard
    this.pillarNameA.textContent = study.paperA.title;
    this.pillarScoreA.textContent = study.paperA.score.toFixed(1);
    this.pillarSubA.textContent = study.paperA.sub;

    this.pillarNameB.textContent = study.paperB.title;
    this.pillarScoreB.textContent = study.paperB.score.toFixed(1);
    this.pillarSubB.textContent = study.paperB.sub;

    this.deltaVDisplay.textContent = study.deltaVal;
    this.verdictDisplay.textContent = study.verdict;

    // Invariant Accordions
    this.accNameA.textContent = study.paperA.title;
    this.accNameB.textContent = study.paperB.title;

    this.invariantsListA.innerHTML = study.paperA.invariants.map(inv => `<li>${inv}</li>`).join('');
    this.invariantsListB.innerHTML = study.paperB.invariants.map(inv => `<li>${inv}</li>`).join('');

    this.critiqueVonny.textContent = `"${study.vonnyCritique}"`;
    this.critiqueBoltz.textContent = `"${study.boltzCritique}"`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new PapermacheApp();
});
