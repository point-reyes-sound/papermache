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
    omegaA: 42.0,
    omegaB: 28.0,
    gammaA: 20.0,
    gammaB: 12.0,
    pulpA: 1.2,
    pulpB: 3.4,
    miAtoB: 0.85,
    miBtoA: 0.12,
    lenA: 55,
    lenB: 10,
    paperA: {
      title: "Shannon (1948)",
      fullTitle: "A Mathematical Theory of Communication",
      venue: "Bell System Technical Journal, Vol. 27",
      pages: "55 pages",
      pdfUrl: "/papers/shannon1948.pdf",
      sub: "23 Foundational Theorems",
      invariants: [
        { text: "Proved 23 theorems establishing the universal mathematical foundation of communication.", page: 1, tag: "Sec. I" },
        { text: "Proved the Source Coding Theorem: Entropy H(X) = -∑ p_i log_2(p_i) is the exact physical limit of lossless compression.", page: 11, tag: "Thm. 2" },
        { text: "Proved the Noisy-Channel Coding Theorem: Reliable communication is achievable at any rate R < C.", page: 22, tag: "Thm. 9" },
        { text: "Derived the Shannon-Hartley Capacity Law: C = W log_2(1 + P/N) for Gaussian channels.", page: 38, tag: "Thm. 17" },
        { text: "Established Rate-Distortion Theory and Continuous Differential Entropy.", page: 48, tag: "Thm. 21" }
      ]
    },
    paperB: {
      title: "Schumacher (1995)",
      fullTitle: "Quantum Coding",
      venue: "Physical Review A, Vol. 51, No. 4",
      pages: "10 pages",
      pdfUrl: "/papers/schumacher1995.pdf",
      sub: "Quantum Noiseless Coding",
      invariants: [
        { text: "Formally defined the 'Qubit' as the elementary quantum state |ψ⟩ = α|0⟩ + β|1⟩ in Hilbert space.", page: 1, tag: "Sec. II" },
        { text: "Employed von Neumann density operator ρ = ∑ p_i |φ_i⟩⟨φ_i| as an information resource.", page: 1, tag: "Eq. (3)" },
        { text: "Proved the Subspace Typicality Theorem: Effective quantum signal dimension is 2^{N S(ρ)}.", page: 1, tag: "Thm. 1" },
        { text: "Proved the Quantum Noiseless Coding Theorem: States compress into M qubits when M/N > S(ρ) = -Tr(ρ log_2 ρ).", page: 2, tag: "Thm. 2" },
        { text: "Defined quantum fidelity limit F = ⟨ψ|ρ_out|ψ⟩ → 1.0 under typical subspace projection.", page: 2, tag: "Eq. (13)" }
      ]
    },
    vonnyCritique: "Shannon proves 23 global theorems that permanently bound the state space of every future communication channel. Schumacher's work is brilliant, but it is an algebraic Hilbert-space projection of Shannon's typical subspace theorem.",
    boltzCritique: "Shannon’s 55 pages reduce macrostate uncertainty across all discrete and continuous channels. The sheer thermodynamic phase-space volume governed by Shannon is orders of magnitude larger."
  },
  {
    id: "quantum_algos",
    domain: "Quantum Algorithms",
    domainClass: "domain-algo",
    omegaA: 40.0,
    omegaB: 34.0,
    gammaA: 22.0,
    gammaB: 18.0,
    pulpA: 1.5,
    pulpB: 2.2,
    miAtoB: 0.62,
    miBtoA: 0.18,
    lenA: 28,
    lenB: 15,
    paperA: {
      title: "Shor (1994)",
      fullTitle: "Algorithms for Quantum Computation: Discrete Logarithms and Factoring",
      venue: "IEEE FOCS / arXiv:quant-ph/9508027",
      pages: "28 pages",
      pdfUrl: "/papers/shor1994.pdf",
      sub: "Super-Polynomial Speedup",
      invariants: [
        { text: "Constructed the Quantum Fourier Transform (QFT) over Z_2^k and modular arithmetic rings.", page: 5, tag: "Sec. 4" },
        { text: "Proved polynomial-time prime factorization in O((log N)^2 (log log N)) steps.", page: 8, tag: "Sec. 5" },
        { text: "Demonstrated super-polynomial quantum speedup over the best classical General Number Field Sieve.", page: 12, tag: "Thm. 5.1" },
        { text: "Proved the first catastrophic security vulnerability for classical RSA and Diffie-Hellman cryptosystems.", page: 20, tag: "Sec. 7" }
      ]
    },
    paperB: {
      title: "Harrow, Hassidim, Lloyd (2009)",
      fullTitle: "Quantum Algorithm for Linear Systems of Equations (HHL)",
      venue: "Physical Review Letters, Vol. 103 / arXiv:0811.3171",
      pages: "15 pages",
      pdfUrl: "/papers/hhl2009.pdf",
      sub: "Quantum Matrix Inversion",
      invariants: [
        { text: "Formulated the HHL quantum linear system solver for A|x⟩ = |b⟩.", page: 1, tag: "Eq. (1)" },
        { text: "Achieved exponential scaling advantage: O(κ^2 s^2 log(N)/ε) vs classical O(N s κ).", page: 2, tag: "Thm. 1" },
        { text: "Pioneered Hamiltonian simulation combined with Quantum Phase Estimation for matrix reciprocal eigenvalue inversion ∑ λ_j^(-1) |u_j⟩⟨u_j|.", page: 3, tag: "Eq. (4)" },
        { text: "Established the algorithmic cornerstone for modern quantum machine learning and differential equation solvers.", page: 5, tag: "Sec. IV" }
      ]
    },
    vonnyCritique: "Shor established the empirical existence proof that quantum computing provides super-polynomial speedups over classical Turing machines. HHL is a magnificent operator matrix inversion theorem, but Shor broke the complexity boundary.",
    boltzCritique: "Shor collapsed the computational entropy of the factoring problem from exponential to polynomial, transforming theoretical quantum mechanics into an engineering imperative."
  },
  {
    id: "quantum_chem",
    domain: "Quantum Chemistry",
    domainClass: "domain-chem",
    omegaA: 32.0,
    omegaB: 36.0,
    gammaA: 15.0,
    gammaB: 20.0,
    pulpA: 2.1,
    pulpB: 1.4,
    miAtoB: 0.25,
    miBtoA: 0.55,
    lenA: 7,
    lenB: 50,
    paperA: {
      title: "Peruzzo et al. (2014)",
      fullTitle: "A Variational Eigenvalue Solver on a Photonic Quantum Processor (VQE)",
      venue: "Nature Communications / arXiv:1304.3061",
      pages: "7 pages",
      pdfUrl: "/papers/vqe2014.pdf",
      sub: "Experimental NISQ VQE",
      invariants: [
        { text: "Demonstrated the first hybrid quantum-classical Variational Quantum Eigensolver (VQE).", page: 1, tag: "Fig. 1" },
        { text: "Mapped molecular Hamiltonian expectation values ⟨H⟩ = ∑ h_i ⟨σ_i⟩ onto parameterized quantum states U(θ)|0⟩.", page: 2, tag: "Eq. (1)" },
        { text: "Experimentally calculated the ground-state energy curve of He-H+ molecule to 1.6 kcal/mol chemical accuracy.", page: 3, tag: "Fig. 2" },
        { text: "Bypassed deep coherent circuit depth limitations on Noisy Intermediate-Scale Quantum (NISQ) processors.", page: 5, tag: "Sec. III" }
      ]
    },
    paperB: {
      title: "McArdle et al. (2020)",
      fullTitle: "Quantum Computational Chemistry",
      venue: "Reviews of Modern Physics, Vol. 92 / arXiv:1808.10402",
      pages: "50 pages",
      pdfUrl: "/papers/mcardle2020.pdf",
      sub: "Comprehensive Formal Synthesis",
      invariants: [
        { text: "Unifies the complete fermion-to-qubit operator mappings: Jordan-Wigner, Bravyi-Kitaev, and parity transformations.", page: 6, tag: "Sec. II.B" },
        { text: "Provides rigorous scaling analysis of Unitary Coupled Cluster (UCCSD) and multireference active spaces.", page: 14, tag: "Sec. IV" },
        { text: "Derives exact phase-estimation resource bounds: O(N^4) vs Trotter-Suzuki error bounds.", page: 22, tag: "Sec. VI" },
        { text: "Formalizes quantum error mitigation, zero-noise extrapolation, and symmetry-conserving ansatz bounds across all modern chemistry benchmarks.", page: 35, tag: "Sec. VIII" }
      ]
    },
    vonnyCritique: "Peruzzo was the vital experimental prototype, but McArdle's 50-page treatise provides the complete, irreducible operator algebra for quantum chemistry. The total information payload of McArdle is substantially larger.",
    boltzCritique: "McArdle maps the entire electronic correlation phase space across molecules, basis sets, and Hamiltonian projections with exhaustive mathematical rigor."
  },
  {
    id: "qbe_vs_afqmc",
    domain: "Quantum Chemistry / Kinetic SCF",
    domainClass: "domain-chem",
    omegaA: 38.0,
    omegaB: 35.0,
    gammaA: 20.0,
    gammaB: 18.0,
    pulpA: 1.1,
    pulpB: 1.9,
    miAtoB: 0.48,
    miBtoA: 0.22,
    lenA: 14,
    lenB: 14,
    paperA: {
      title: "Chakraborty (2026)",
      fullTitle: "Quantum Boltzmann Equation Self-Consistent-Field for the Entropic Regularization of Mean-Field Singularities",
      venue: "arXiv:2608.14979 (Point Reyes Sound)",
      pages: "14 pages",
      pdfUrl: "/papers/chakraborty2026.pdf",
      sub: "QBE-SCF & Entropic Regularization",
      invariants: [
        { text: "Derived the Quantum Boltzmann Equation self-consistent-field (QBE-SCF) propagating the 1-RDM P in atomic orbital basis.", page: 2, tag: "Eq. (4)" },
        { text: "Introduced the Bhatnagar-Gross-Krook (BGK) collision operator driving the density matrix to instantaneous Fermi-Dirac equilibrium target P_0(F).", page: 3, tag: "Eq. (8)" },
        { text: "Proved stationarity condition [F, P] = 0 satisfies Hartree-Fock while permitting non-idempotent steady states P^2 ≠ P.", page: 4, tag: "Eq. (12)" },
        { text: "Zero-temperature kinetic ergodicity fractionalizes degenerate active spaces, recovering the Generalized Valence Bond (GVB) limit for H_3 symmetric dissociation.", page: 6, tag: "Fig. 3" },
        { text: "Finite-temperature entropic regularization resolves conical intersections in BeH_2 and H_4 (D_2h → D_4h → D_2h) from a real-valued single-reference density without multireference wavefunctions.", page: 9, tag: "Sec. IV" }
      ]
    },
    paperB: {
      title: "Danilov, Shee et al. (2026)",
      fullTitle: "Selecting Optimal Unrestricted Hartree–Fock Trial Wave Functions for Phaseless Auxiliary-Field Quantum Monte Carlo: Accuracy and Limitations in Modeling Three Iron–Sulfur Clusters",
      venue: "J. Chem. Theory Comput. (JCTC), 22, 16, 8274–8287",
      pages: "14 pages",
      pdfUrl: "/papers/shee2026.pdf",
      sub: "ph-AFQMC Trial State Dilemma",
      invariants: [
        { text: "Systematic benchmark of Phaseless Auxiliary-Field Quantum Monte Carlo (ph-AFQMC) on active-space models of [2Fe-2S]^2+, [4Fe-4S]^2+, and [4Fe-4S]^4+ clusters.", page: 1, tag: "Sec. 1" },
        { text: "Exposed the severe 'symmetry dilemma' where mean-field UHF yields proliferating broken-symmetry minima with variations > 15 kcal/mol.", page: 1, tag: "Sec. 2" },
        { text: "Demonstrated that the lowest-energy UHF determinant is frequently NOT the optimal trial state for ph-AFQMC projection.", page: 2, tag: "Finding 1" },
        { text: "Proved trial wave function nodal bias remains the principal accuracy bottleneck in polynomial-scaling quantum Monte Carlo.", page: 2, tag: "Sec. 4" }
      ]
    },
    vonnyCritique: "Shee et al. expose the fatal disease of standard mean-field theory: the symmetry dilemma and local minima trapping in broken-spin UHF determinants. Chakraborty's QBE-SCF attacks this at the operator root: by relaxing the density matrix through kinetic BGK collisions, it bypasses integer Aufbau projections and dissolves the singularity from within single-reference mechanics.",
    boltzCritique: "A triumph of non-equilibrium statistical mechanics! Where classical SCF gets trapped in spurious mean-field broken symmetries, Chakraborty uses finite-temperature entropic regularization and kinetic ergodicity to resolve multi-reference degeneracies without multi-Slater complexity."
  },
  {
    id: "fault_tolerance",
    domain: "Fault Tolerance",
    domainClass: "domain-qec",
    omegaA: 41.0,
    omegaB: 39.0,
    gammaA: 21.0,
    gammaB: 20.0,
    pulpA: 1.0,
    pulpB: 1.1,
    miAtoB: 0.35,
    miBtoA: 0.28,
    lenA: 27,
    lenB: 28,
    paperA: {
      title: "Kitaev (1997)",
      fullTitle: "Fault-tolerant quantum computation by anyons",
      venue: "Annals of Physics / arXiv:quant-ph/9707021",
      pages: "27 pages",
      pdfUrl: "/papers/kitaev1997.pdf",
      sub: "Topological Anyon Code",
      invariants: [
        { text: "Invented the Toric Code Hamiltonian: H = -J_e ∑_s A_s - J_m ∑_p B_p with star and plaquette stabilizer operators.", page: 3, tag: "Eq. (3.1)" },
        { text: "Introduced the Surface Code architecture that dominates modern superconducting quantum hardware.", page: 7, tag: "Sec. 4" },
        { text: "Proved that quantum information can be stored in non-local topological degrees of freedom immune to local perturbation.", page: 12, tag: "Thm. 4.2" },
        { text: "Formulated fault tolerance via non-Abelian anyon braiding and topological quantum field theory.", page: 22, tag: "Sec. 6" }
      ]
    },
    paperB: {
      title: "Shor (1994)",
      fullTitle: "Algorithms for Quantum Computation (with QEC Appendix)",
      venue: "IEEE FOCS / Phys Rev A 52, R2493",
      pages: "28 pages",
      pdfUrl: "/papers/shor1994.pdf",
      sub: "First 9-Qubit Code Proof",
      invariants: [
        { text: "Proved that quantum error correction is physically possible despite continuous unitary noise and no-cloning theorem.", page: 1, tag: "Sec. 1" },
        { text: "Constructed the 9-qubit code: |0_L⟩ = 1/(2√2) (|000⟩+|111⟩)(|000⟩+|111⟩)(|000⟩+|111⟩).", page: 2, tag: "Eq. (4)" },
        { text: "Disentangled bit-flip (X) errors from phase-flip (Z) errors using syndrome measurements without collapsing superposition.", page: 3, tag: "Sec. 2" }
      ]
    },
    vonnyCritique: "Kitaev’s toric code operator algebra is breathtaking. By embedding stabilizers into a 2D topological surface, he provided the literal blueprint that Google Quantum AI and every major lab builds today.",
    boltzCritique: "Kitaev created a macroscopic topological ground-state degeneracy that possesses thermodynamic resilience against ambient thermal baths."
  }
];

class PapermacheApp {
  constructor() {
    this.alpha = 2.0;
    this.beta = 0.8;
    this.gamma = 1.5;
    this.mu = 10.0;

    this.recomputeAllStudies();
    this.currentStudy = this.studies[0];

    this.initDOM();
    this.renderTable();
    this.loadCaseStudy(this.currentStudy.id);
  }

  computeScore(study) {
    const rawScoreA = (this.alpha * study.omegaA) + (this.beta * study.gammaA) - (this.gamma * study.pulpA);
    const rawScoreB = (this.alpha * study.omegaB) + (this.beta * study.gammaB) - (this.gamma * study.pulpB);

    // Normalizing between 50 and 99.5 for clean presentation
    const normA = Math.min(99.9, Math.max(50.0, rawScoreA * 0.98));
    const normB = Math.min(99.9, Math.max(50.0, rawScoreB * 0.98));

    const asymmTerm = this.mu * ((study.miAtoB / study.lenA) - (study.miBtoA / study.lenB)) * 12.0;
    const deltaV = (normA - normB) + asymmTerm;

    let verdict = "";
    let deltaVal = "";
    if (Math.abs(deltaV) < 0.5) {
      verdict = "Dead Heat (Equivalence)";
      deltaVal = `0.0 ΔV (Parity)`;
    } else if (deltaV > 0) {
      verdict = `${study.paperA.title} Wins (+${Math.abs(deltaV).toFixed(1)} ΔV)`;
      deltaVal = `+${Math.abs(deltaV).toFixed(1)} ΔV (${study.paperA.title.split(' ')[0]})`;
    } else {
      verdict = `${study.paperB.title} Wins (+${Math.abs(deltaV).toFixed(1)} ΔV)`;
      deltaVal = `+${Math.abs(deltaV).toFixed(1)} ΔV (${study.paperB.title.split(' ')[0]})`;
    }

    return {
      scoreA: normA,
      scoreB: normB,
      deltaV: Math.abs(deltaV),
      deltaVal,
      verdict,
      winnerIsA: deltaV >= 0
    };
  }

  recomputeAllStudies() {
    this.studies = CASE_STUDIES.map(study => {
      const calc = this.computeScore(study);
      return {
        ...study,
        calc
      };
    }).sort((a, b) => b.calc.deltaV - a.calc.deltaV);
  }

  initDOM() {
    this.tbody = document.getElementById('case-studies-tbody');

    // Dual Paper Frame elements
    this.paperBarTitleA = document.getElementById('paper-bar-title-a');
    this.paperBarTitleB = document.getElementById('paper-bar-title-b');
    this.paperExternalA = document.getElementById('paper-external-a');
    this.paperExternalB = document.getElementById('paper-external-b');
    this.pageBadgeA = document.getElementById('page-badge-a');
    this.pageBadgeB = document.getElementById('page-badge-b');
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

    // Sliders
    this.sliderAlpha = document.getElementById('slider-alpha');
    this.sliderBeta = document.getElementById('slider-beta');
    this.sliderGamma = document.getElementById('slider-gamma');
    this.sliderMu = document.getElementById('slider-mu');

    this.valAlpha = document.getElementById('val-alpha');
    this.valBeta = document.getElementById('val-beta');
    this.valGamma = document.getElementById('val-gamma');
    this.valMu = document.getElementById('val-mu');

    this.btnResetSliders = document.getElementById('btn-reset-sliders');

    // Hero Dropzone elements
    this.inputArxivA = document.getElementById('input-arxiv-a');
    this.inputArxivB = document.getElementById('input-arxiv-b');
    this.fileInputA = document.getElementById('file-input-a');
    this.fileInputB = document.getElementById('file-input-b');
    this.labelDropA = document.getElementById('label-drop-a');
    this.labelDropB = document.getElementById('label-drop-b');
    this.dropzoneBoxA = document.getElementById('dropzone-a');
    this.dropzoneBoxB = document.getElementById('dropzone-b');
    this.dropTextA = document.getElementById('drop-text-a');
    this.dropTextB = document.getElementById('drop-text-b');
    this.statusA = document.getElementById('status-a');
    this.statusB = document.getElementById('status-b');
    this.btnHeroClash = document.getElementById('btn-hero-clash');
    this.chipPresetBtns = document.querySelectorAll('.chip-preset-btn');

    // Methodology Explainer Card & Triggers
    this.methodologyCard = document.getElementById('methodology-card');
    this.btnCloseMethodology = document.getElementById('btn-close-methodology');
    this.howCalcTriggers = document.querySelectorAll('.how-calc-trigger');

    this.setupSliders();
    this.setupAccordions();
    this.setupHeroDropzone();
    this.setupMethodologyExplainer();
  }

  setupMethodologyExplainer() {
    if (!this.methodologyCard) return;

    const toggleMethodology = (openState) => {
      const willOpen = openState !== undefined ? openState : !this.methodologyCard.classList.contains('open');
      if (willOpen) {
        this.methodologyCard.classList.add('open');
        setTimeout(() => {
          this.methodologyCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
      } else {
        this.methodologyCard.classList.remove('open');
      }
    };

    if (this.howCalcTriggers) {
      this.howCalcTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleMethodology(true);
        });
      });
    }

    if (this.btnCloseMethodology) {
      this.btnCloseMethodology.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMethodology(false);
      });
    }
  }

  setupHeroDropzone() {
    this.customFileA = null;
    this.customPdfUrlA = null;
    this.customFileB = null;
    this.customPdfUrlB = null;

    // File input handlers
    if (this.fileInputA) {
      this.fileInputA.addEventListener('change', () => {
        if (this.fileInputA.files && this.fileInputA.files[0]) {
          this.handleFileSelect('A', this.fileInputA.files[0]);
        }
      });
    }

    if (this.fileInputB) {
      this.fileInputB.addEventListener('change', () => {
        if (this.fileInputB.files && this.fileInputB.files[0]) {
          this.handleFileSelect('B', this.fileInputB.files[0]);
        }
      });
    }

    // Drag and Drop handlers for Dropzone A
    const boxA = this.dropzoneBoxA;
    if (boxA) {
      ['dragenter', 'dragover'].forEach(eventName => {
        boxA.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          boxA.classList.add('drag-over');
        });
      });
      ['dragleave', 'drop'].forEach(eventName => {
        boxA.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          boxA.classList.remove('drag-over');
        });
      });
      boxA.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files[0]) {
          this.handleFileSelect('A', dt.files[0]);
        }
      });
    }

    // Drag and Drop handlers for Dropzone B
    const boxB = this.dropzoneBoxB;
    if (boxB) {
      ['dragenter', 'dragover'].forEach(eventName => {
        boxB.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          boxB.classList.add('drag-over');
        });
      });
      ['dragleave', 'drop'].forEach(eventName => {
        boxB.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          boxB.classList.remove('drag-over');
        });
      });
      boxB.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files[0]) {
          this.handleFileSelect('B', dt.files[0]);
        }
      });
    }

    // Quick benchmark preset chips
    if (this.chipPresetBtns) {
      this.chipPresetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.chipPresetBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const preset = btn.dataset.preset;

          if (preset === 'qbe_vs_afqmc') {
            if (this.inputArxivA) this.inputArxivA.value = 'arXiv:2608.14979 (Chakraborty et al.)';
            if (this.inputArxivB) this.inputArxivB.value = 'Danilov, Shee et al. (JCTC 2026)';
          } else if (preset === 'info_theory') {
            if (this.inputArxivA) this.inputArxivA.value = 'Shannon (1948)';
            if (this.inputArxivB) this.inputArxivB.value = 'Schumacher (1995)';
          } else if (preset === 'quantum_algos') {
            if (this.inputArxivA) this.inputArxivA.value = 'arXiv:quant-ph/9508027 (Shor 1994)';
            if (this.inputArxivB) this.inputArxivB.value = 'arXiv:0811.3171 (HHL 2009)';
          }

          this.resetDropzoneStatus('A');
          this.resetDropzoneStatus('B');
          this.loadCaseStudy(preset);
          const target = document.getElementById('case-study-section');
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    // Clash button handler
    if (this.btnHeroClash) {
      this.btnHeroClash.addEventListener('click', () => {
        this.executeHeroClash();
      });
    }
  }

  resetDropzoneStatus(side) {
    if (side === 'A') {
      this.customFileA = null;
      this.customPdfUrlA = null;
      if (this.dropTextA) this.dropTextA.textContent = 'Drop .pdf here or click to browse';
      if (this.statusA) {
        this.statusA.textContent = 'Ready';
        this.statusA.style.color = '';
      }
    } else {
      this.customFileB = null;
      this.customPdfUrlB = null;
      if (this.dropTextB) this.dropTextB.textContent = 'Drop .pdf here or click to browse';
      if (this.statusB) {
        this.statusB.textContent = 'Ready';
        this.statusB.style.color = '';
      }
    }
  }

  handleFileSelect(side, file) {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      alert('Please upload a valid PDF document.');
      return;
    }

    const objUrl = URL.createObjectURL(file);
    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    const cleanName = file.name.replace(/\.[^/.]+$/, "");

    if (side === 'A') {
      this.customFileA = file;
      this.customPdfUrlA = objUrl;
      if (this.dropTextA) this.dropTextA.textContent = `📄 ${file.name} (${sizeMb} MB)`;
      if (this.statusA) {
        this.statusA.textContent = 'PDF Loaded';
        this.statusA.style.color = 'var(--accent-cyan)';
      }
      if (this.inputArxivA) this.inputArxivA.value = cleanName;
    } else {
      this.customFileB = file;
      this.customPdfUrlB = objUrl;
      if (this.dropTextB) this.dropTextB.textContent = `📄 ${file.name} (${sizeMb} MB)`;
      if (this.statusB) {
        this.statusB.textContent = 'PDF Loaded';
        this.statusB.style.color = 'var(--accent-gold)';
      }
      if (this.inputArxivB) this.inputArxivB.value = cleanName;
    }
  }

  executeHeroClash() {
    const origHtml = this.btnHeroClash.innerHTML;
    this.btnHeroClash.innerHTML = '<span class="bolt-icon">⚡</span> Clashing Invariants...';
    this.btnHeroClash.style.opacity = '0.85';

    setTimeout(() => {
      this.btnHeroClash.innerHTML = origHtml;
      this.btnHeroClash.style.opacity = '1';
    }, 900);

    const valA = (this.inputArxivA ? this.inputArxivA.value.trim().toLowerCase() : '');
    const valB = (this.inputArxivB ? this.inputArxivB.value.trim().toLowerCase() : '');

    // 1. If custom local PDFs were dropped on either side:
    if (this.customPdfUrlA) {
      this.pdfFrameA.src = `${this.customPdfUrlA}#page=1&view=FitH`;
      this.paperBarTitleA.textContent = this.inputArxivA.value || this.customFileA.name;
      this.paperExternalA.href = this.customPdfUrlA;
      this.pageBadgeA.textContent = 'p. 1 (Custom PDF)';
    }

    if (this.customPdfUrlB) {
      this.pdfFrameB.src = `${this.customPdfUrlB}#page=1&view=FitH`;
      this.paperBarTitleB.textContent = this.inputArxivB.value || this.customFileB.name;
      this.paperExternalB.href = this.customPdfUrlB;
      this.pageBadgeB.textContent = 'p. 1 (Custom PDF)';
    }

    // 2. If neither was a custom PDF, match against case studies
    if (!this.customPdfUrlA && !this.customPdfUrlB) {
      if (valA.includes('2608.14979') || valA.includes('chakraborty') || valB.includes('shee')) {
        this.loadCaseStudy('qbe_vs_afqmc');
      } else if (valA.includes('shor') || valA.includes('9508027') || valB.includes('hhl') || valB.includes('0811.3171')) {
        this.loadCaseStudy('quantum_algos');
      } else if (valA.includes('shannon') || valB.includes('schumacher') || valA.includes('1948')) {
        this.loadCaseStudy('info_theory');
      } else if (valA.includes('kitaev') || valB.includes('toric')) {
        this.loadCaseStudy('topological_codes');
      } else if (valA.includes('peruzzo') || valB.includes('mcardle') || valA.includes('vqe')) {
        this.loadCaseStudy('vqe_ground_state');
      }
    }

    // Highlight the paper frames to confirm live update
    const containerA = document.getElementById('frame-container-a');
    const containerB = document.getElementById('frame-container-b');
    if (containerA) {
      containerA.classList.add('highlight-pulse');
      setTimeout(() => containerA.classList.remove('highlight-pulse'), 1200);
    }
    if (containerB) {
      containerB.classList.add('highlight-pulse');
      setTimeout(() => containerB.classList.remove('highlight-pulse'), 1200);
    }

    // Smooth scroll down to the dual reader and scoreboard
    const targetSection = document.getElementById('case-study-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setupSliders() {
    const update = () => {
      this.alpha = parseFloat(this.sliderAlpha.value);
      this.beta = parseFloat(this.sliderBeta.value);
      this.gamma = parseFloat(this.sliderGamma.value);
      this.mu = parseFloat(this.sliderMu.value);

      this.valAlpha.textContent = this.alpha.toFixed(1);
      this.valBeta.textContent = this.beta.toFixed(1);
      this.valGamma.textContent = this.gamma.toFixed(1);
      this.valMu.textContent = this.mu.toFixed(1);

      this.recomputeAllStudies();
      this.renderTable();
      this.updateScoreboard();
    };

    this.sliderAlpha.addEventListener('input', update);
    this.sliderBeta.addEventListener('input', update);
    this.sliderGamma.addEventListener('input', update);
    this.sliderMu.addEventListener('input', update);

    this.btnResetSliders.addEventListener('click', () => {
      this.sliderAlpha.value = 2.0;
      this.sliderBeta.value = 0.8;
      this.sliderGamma.value = 1.5;
      this.sliderMu.value = 10.0;
      update();
    });
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

      const scoreAClass = study.calc.winnerIsA ? 'score-win' : 'score-loss';
      const scoreBClass = !study.calc.winnerIsA ? 'score-win' : 'score-loss';

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
          <span class="score-badge ${scoreAClass}">${study.calc.scoreA.toFixed(1)}</span> vs 
          <span class="score-badge ${scoreBClass}">${study.calc.scoreB.toFixed(1)}</span>
        </td>
        <td class="verdict-cell">${study.calc.verdict}</td>
      `;

      tr.addEventListener('click', () => {
        this.loadCaseStudy(study.id);
        document.getElementById('case-study-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      this.tbody.appendChild(tr);
    });
  }

  jumpToInvariant(target, pageNum, tag) {
    if (target === 'A') {
      this.pdfFrameA.src = `${this.currentStudy.paperA.pdfUrl}#page=${pageNum}&view=FitH`;
      this.pageBadgeA.textContent = `p. ${pageNum} (${tag})`;
      this.pageBadgeA.classList.add('highlight-pulse');
      setTimeout(() => this.pageBadgeA.classList.remove('highlight-pulse'), 1400);
    } else {
      this.pdfFrameB.src = `${this.currentStudy.paperB.pdfUrl}#page=${pageNum}&view=FitH`;
      this.pageBadgeB.textContent = `p. ${pageNum} (${tag})`;
      this.pageBadgeB.classList.add('highlight-pulse');
      setTimeout(() => this.pageBadgeB.classList.remove('highlight-pulse'), 1400);
    }

    document.getElementById('case-study-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  updateScoreboard() {
    const study = this.studies.find(s => s.id === this.currentStudy.id) || this.currentStudy;
    this.pillarScoreA.textContent = study.calc.scoreA.toFixed(1);
    this.pillarScoreB.textContent = study.calc.scoreB.toFixed(1);
    this.deltaVDisplay.textContent = study.calc.deltaVal;
    this.verdictDisplay.textContent = study.calc.verdict;
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
    this.pageBadgeA.textContent = `p. 1`;
    this.pageBadgeB.textContent = `p. 1`;
    this.pdfFrameA.src = `${study.paperA.pdfUrl}#page=1&view=FitH`;
    this.pdfFrameB.src = `${study.paperB.pdfUrl}#page=1&view=FitH`;

    // Scoreboard
    this.pillarNameA.textContent = study.paperA.title;
    this.pillarSubA.textContent = study.paperA.sub;
    this.pillarNameB.textContent = study.paperB.title;
    this.pillarSubB.textContent = study.paperB.sub;

    this.updateScoreboard();

    // Invariant Accordions with Jump Buttons
    this.accNameA.textContent = study.paperA.title;
    this.accNameB.textContent = study.paperB.title;

    this.invariantsListA.innerHTML = '';
    study.paperA.invariants.forEach(inv => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="invariant-text-wrap">${inv.text}</span>
        <button class="jump-to-page-btn" title="Jump to page ${inv.page}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          p. ${inv.page} (${inv.tag})
        </button>
      `;
      li.querySelector('.jump-to-page-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.jumpToInvariant('A', inv.page, inv.tag);
      });
      this.invariantsListA.appendChild(li);
    });

    this.invariantsListB.innerHTML = '';
    study.paperB.invariants.forEach(inv => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="invariant-text-wrap">${inv.text}</span>
        <button class="jump-to-page-btn" title="Jump to page ${inv.page}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          p. ${inv.page} (${inv.tag})
        </button>
      `;
      li.querySelector('.jump-to-page-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.jumpToInvariant('B', inv.page, inv.tag);
      });
      this.invariantsListB.appendChild(li);
    });

    this.critiqueVonny.textContent = `"${study.vonnyCritique}"`;
    this.critiqueBoltz.textContent = `"${study.boltzCritique}"`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new PapermacheApp();
});
