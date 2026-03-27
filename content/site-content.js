// content/site-content.js
window.SITE_CONTENT = {
  profile: {
    // 顶部 Logo 和标题
    initials: "YD",
    name: "Yunlong Deng",
    tagline: "Computer Science · Academic Homepage",

    // Hero 标题
    heroTitlePrefix: "I am",
    highlightName: "Yunlong Deng",
    heroDescription:
      "Master student in Machine Learning at MBZUAI University, focusing on multimodal models and advanced reasoning tasks.",

    // 基本信息
    affiliation: "Department of Machine Learning, MBZUAI University",
    affiliationLong:
      "Department of Machine Learning, Mohamed bin Zayed University of Artificial Intelligence",
    email: "Yunlong.Deng@mbzuai.ac.ae",
    emailDisplay: "Yunlong.Deng [at] mbzuai.ac.ae",
    location: "Abu Dhabi, United Arab Emirates",

    // 链接
    cvUrl: "#", // 例如 "assets/cv/your-cv.pdf"
    scholarUrl: "https://scholar.google.com/citations?user=uLt40REAAAAJ",
    githubUrl: "https://github.com/dengyl20",
    linkedinUrl: "#",
    twitterUrl: "#",

    // 头像
    avatarUrl: "assets/img/profile.jpg",

    // 头衔与状态
    role: "M.Eng. Student",
    tags: ["Multimodal AI", "LLM Reasoning", "LLM Post-Training"],
    statusText: "Open to collaborations",
    highlightText: "I am currently seeking Ph.D. positions for 2026.",

    // 页脚 FIXME: 注意更新修改日期
    footerCopy: "© 2026 Yunlong Deng. Last updated: Mar 2026."
  },

  about: {
    bioParagraphs: [
      "I am currently an M.S. student in the Machine Learning Department at MBZUAI, advised by Prof. Kun Zhang. At MBZUAI, I closely collaborate with Guangyi Chen and Yan Li in the Causality Group.",
      "My research interests include multimodal large language models, LLM reasoning, and LLM post-training, with a particular focus on revisiting and improving the reasoning abilities of modern foundation models from a causal perspective.",
      "Before joining MBZUAI, I received my B.Eng. in Computer Science and Technology from Tsinghua University and worked as a research intern at Kuaishou Technology in Beijing.",
      "In the long term, I aim to understand the limits of state-of-the-art models on reasoning-focused tasks and, through the lens of causality, identify their fundamental bottlenecks and promising directions for future development."
    ],

    education: [
      "B.Eng. in Computer Science and Technology, Tsinghua University (2020 - 2024)",
      "M.S. in Machine Learning, MBZUAI (2024 - present)"
    ],

    advisors: [
      "Prof. Kun Zhang (MBZUAI)",
      "Dr. Guangyi Chen (Research Scientist, MBZUAI)"
    ],

    researchInterests: [
      {
        title: "Multimodal large language models",
        description:
          "Improving modality alignment, preference alignment, and iterative self-refinement in large multimodal models."
      },
      {
        title: "LLM reasoning",
        description:
          "Revisiting LLM reasoning from a causal perspective to understand its latent selection mechanisms and to improve reasoning reliability and generalization on complex tasks."
      },
      {
        title: "LLM post-training",
        description:
          "Studying LLM post-training, especially self-supervised SFT pipelines that construct training signals automatically, together with more efficient RLVR and on-policy distillation."
      }
    ],

    keywords: [
      "Multimodal AI",
      "LLM reasoning",
      "LLM post-training",
      "Self-supervised SFT",
      "RL with verifiable rewards",
      "On-policy distillation",
      "Vision-language models"
    ],

    collaborationNote:
      "I am always happy to discuss potential collaborations, especially on projects related to multimodal models, LLM reasoning, and LLM post-training. Feel free to reach out!"
  },

  news: [
    {
      year: 2026,
      items: [
        {
          date: "Jan 2026",
          category: "Conference",
          title: "Paper accepted to ICLR 2026",
          description:
            'Our work "Selection, Reflection and Self-Refinement: Revisit Reasoning Tasks via a Causal Lens" was accepted to ICLR 2026 as a poster.',
          tags: ["ICLR 2026", "New paper", "Poster"]
        }
      ]
    },
    {
      year: 2025,
      items: [
        {
          date: "Sep 2025",
          category: "Conference",
          title: "Three papers accepted to NeurIPS 2025 ",
          description:
            'We had three papers accepted to NeurIPS 2025: [Poster] "Towards Self-Refinement of Vision-Language Models with Triangular Consistency"; [Spotlight ] "CausalVerse: Benchmarking Causal Representation Learning with Configurable High-Fidelity Simulations"; and [Workshop] "How Effective is Your Rebuttal? Identifying Causal Models from the OpenReview System".',
          tags: ["NeurIPS 2025", "New paper", "Spotlight"]
        },
        {
          date: "May 2025",
          category: "Conference",
          title: "Paper accepted to ICML 2025",
          description:
            'Our work "Reflection-Window Decoding: Text Generation with Selective Refinement" was accepted to ICML 2025 as a poster.',
          tags: ["ICML 2025", "New paper"]
        }
      ]
    },
    {
      year: 2024,
      items: [
        {
          date: "Sep 2024",
          category: "Milestone",
          title: "Started M.Sc. in Machine Learning at MBZUAI",
          description:
            "Joined the Machine Learning Department at MBZUAI as an M.Sc. student, advised by Prof. Kun Zhang.",
          tags: ["Master", "MBZUAI"]
        }
      ]
    }
  ],

  publications: {
    selected: [
      {
        type: "Conference",
        year: "2026",
        title:
          "Selection, Reflection and Self-Refinement: Revisit Reasoning Tasks via a Causal Lens",
        authors: "Yunlong Deng, Boyang Sun, Yan Li, et al.",
        highlightName: "Yunlong Deng",
        venue:
          "In The Fourteenth International Conference on Learning Representations (ICLR 2026), poster.",
        abstract:
          "This paper revisits reasoning tasks from a causal perspective by formulating them as latent selection mechanisms and identifying two core challenges: the complexity gap between latent and observed spaces, and the dense dependencies among latent variables. It introduces SR², a framework with reflective representation learning, dependency self-refinement, and periodic intermediate alignment, delivering strong gains on reasoning benchmarks such as ARC-AGI, Sudoku and Maze.",
        links: [
          { label: "Paper", url: "https://openreview.net/forum?id=0X5moS8KSm" },
          { label: "Code", url: "https://github.com/dengyl20/SR2" }
        ],
        imageUrl: "assets/img/sr2-causal-lens.png"
      },
      {
        type: "Conference",
        year: "2025",
        title: "Towards Self-Refinement of Vision-Language Models with Triangular Consistency",
        authors: "Yunlong Deng*, Guangyi Chen*, et al.",
        highlightName: "Yunlong Deng",
        venue:
          "In Advances in Neural Information Processing Systems (NeurIPS 2025), poster.",
        abstract:
          "This work shows that vision-language models can self-improve without supervised visual instruction data by proposing a self-refinement framework based on a Triangular Consistency principle over image–query–answer triplets. The model generates and filters synthetic supervision from unlabeled images, leading to consistent gains in multimodal reasoning performance.",
        links: [
          { label: "Paper", url: "https://arxiv.org/abs/2510.10487" },
          { label: "Code", url: "https://github.com/dengyl20/SRF-LLaVA-1.5" }
        ],
        imageUrl: "assets/img/srf-triangular.png"
      },
      {
        type: "Conference",
        year: "2025",
        title:
          "CausalVerse: Benchmarking Causal Representation Learning with Configurable High-Fidelity Simulations",
        authors: "Guangyi Chen*, Yunlong Deng*, Peiyuan Zhu*, Yan Li*, et al.",
        highlightName: "Yunlong Deng",
        venue:
          "In Advances in Neural Information Processing Systems (NeurIPS 2025), Datasets and Benchmarks Track, spotlight.",
        abstract:
          "This paper introduces CausalVerse, a large-scale benchmark built on configurable high-fidelity simulations that provide realistic visual scenes together with ground-truth causal variables and structures. It enables systematic and rigorous evaluation of causal representation learning methods across diverse domains and modeling assumptions.",
        links: [
          { label: "Paper", url: "https://arxiv.org/abs/2510.14049" },
          { label: "Code", url: "https://github.com/CausalVerse/CausalVerseBenchmark" },
          { label: "Project Page", url: "https://causal-verse.github.io/" }
        ],
        imageUrl: "assets/img/causalverse.png"
      }
    ],

    all: [
      {
        title:
          "Selection, Reflection and Self-Refinement: Revisit Reasoning Tasks via a Causal Lens",
        authors:
          "Yunlong Deng, Boyang Sun, Yan Li, Zeyu Tang, Lingjing Kong, Kun Zhang, Guangyi Chen",
        highlightName: "Yunlong Deng",
        venue:
          "The Fourteenth International Conference on Learning Representations (ICLR 2026), poster.",
        links: [
          { label: "paper", url: "https://openreview.net/forum?id=0X5moS8KSm" },
          { label: "code", url: "https://github.com/dengyl20/SR2" }
        ]
      },
      {
        title:
          "How Effective is Your Rebuttal? Identifying Causal Models from the OpenReview System",
        authors:
          "Loka Li, Ibrahim Aldarmaki, Minghao Fu, Wong Yu Kang, Yunlong Deng, Qiang Huang, Jing Yang, Jin Tian, Guangyi Chen, Kun Zhang",
        highlightName: "Yunlong Deng",
        venue:
          "NeurIPS 2025 Workshop on CauScien: Uncovering Causality in Science, poster.",
        links: [{ label: "paper", url: "https://openreview.net/forum?id=NM6Vv15FoJ" }]
      },
      {
        title:
          "CausalVerse: Benchmarking Causal Representation Learning with Configurable High-Fidelity Simulations",
        authors:
          "Guangyi Chen, Yunlong Deng, Peiyuan Zhu, Yan Li, Yifan Shen, Zijian Li, Kun Zhang",
        highlightName: "Yunlong Deng",
        venue:
          "Advances in Neural Information Processing Systems (NeurIPS 2025), Datasets and Benchmarks Track, spotlight.",
        links: [
          { label: "paper", url: "https://arxiv.org/abs/2510.14049" },
          { label: "project", url: "https://causal-verse.github.io/" },
          { label: "code", url: "https://github.com/CausalVerse/CausalVerseBenchmark" }
        ]
      },
      {
        title:
          "Towards Self-Refinement of Vision-Language Models with Triangular Consistency",
        authors:
          "Yunlong Deng, Guangyi Chen, Tianpei Gu, Lingjing Kong, Yan Li, Zeyu Tang, Kun Zhang",
        highlightName: "Yunlong Deng",
        venue:
          "Advances in Neural Information Processing Systems (NeurIPS 2025), poster.",
        links: [
          { label: "paper", url: "https://arxiv.org/abs/2510.10487" },
          { label: "code", url: "https://github.com/dengyl20/SRF-LLaVA-1.5" }
        ]
      },
      {
        title:
          "Should Bias Always be Eliminated? A Principled Framework to Use Data Bias for OOD Generation",
        authors:
          "Yan Li, Yunlong Deng, Zijian Li, Zeyu Tang, Anpeng Wu, Kun Zhang, Guangyi Chen",
        highlightName: "Yunlong Deng",
        venue: "arXiv preprint arXiv:2507.17001, 2025.",
        links: [{ label: "paper", url: "https://arxiv.org/abs/2507.17001" }]
      },
      {
        title: "Reflection-Window Decoding: Text Generation with Selective Refinement",
        authors:
          "Zeyu Tang, Zhenhao Chen, Xiangchen Song, Loka Li, Yunlong Deng, Yifan Shen, Guangyi Chen, Peter Spirtes, Kun Zhang",
        highlightName: "Yunlong Deng",
        venue:
          "In Proceedings of the 42nd International Conference on Machine Learning (ICML 2025), PMLR 267:58739-58764.",
        links: [{ label: "paper", url: "https://arxiv.org/abs/2502.03678" }]
      }
    ]
  }
};