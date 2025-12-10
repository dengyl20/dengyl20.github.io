// content/site-content.js

window.SITE_CONTENT = {
    profile: {
      // 顶部 Logo 和标题
      initials: "Y",
      name: "Your Name",
      tagline: "Your Field · Academic Homepage",
  
      // Hero 标题
      heroTitlePrefix: "I am",
      highlightName: "Your Name",
      heroDescription:
        "Ph.D. candidate in Computer Science at XYZ University, focusing on machine learning and AI for Science.",
  
      // 基本信息
      affiliation: "Department of Computer Science, XYZ University",
      affiliationLong: "Department of Computer Science, XYZ University",
      email: "your.name@institution.edu",
      emailDisplay: "your.name [at] institution.edu",
      location: "City, Country",
  
      // 链接
      cvUrl: "#", // 例如 "assets/cv/your-cv.pdf"
      scholarUrl: "#",
      githubUrl: "https://github.com/your-username",
      linkedinUrl: "#",
      twitterUrl: "#",
  
      // 头像
      avatarUrl: "assets/img/profile.jpg",
  
      // 头衔与状态
      role: "Ph.D. Candidate",
      tags: ["Machine Learning", "Representation Learning", "AI for Science"],
      statusText: "Open to collaborations",
      highlightText: "Currently on the job market for 2026.",
  
      // 页脚
      footerCopy: "© 2025 Your Name. Last updated: Dec 2025."
    },
  
    about: {
      bioParagraphs: [
        "I am a Ph.D. student in Computer Science at XYZ University, advised by Prof. Advisor Name. My research lies at the intersection of machine learning, optimization, and scientific applications.",
        "Before joining XYZ, I obtained my B.Sc. in Mathematics from ABC University and worked as a research intern at Lab / Company, where I focused on large-scale representation learning.",
        "My long-term goal is to build learning systems that are robust, data-efficient, and scientifically grounded, enabling principled decision making in high-stakes domains."
      ],
      education: [
        "B.Sc. in Mathematics, ABC University",
        "Ph.D. in Computer Science, XYZ University"
      ],
      advisors: [
        "Prof. Advisor Name (XYZ University)",
        "Dr. Mentor Name (Some Lab)"
      ],
      researchInterests: [
        {
          title: "Representation learning",
          description:
            "Learning compact, structured representations for high-dimensional scientific data such as simulations and experiments."
        },
        {
          title: "Optimization & generalization",
          description:
            "Understanding the optimization landscape of deep networks and how it relates to robustness and out-of-distribution performance."
        },
        {
          title: "AI for Science",
          description:
            "Developing learning-based surrogates, differentiable models, and physics-informed architectures for scientific discovery."
        }
      ],
      keywords: [
        "Machine learning theory",
        "Representation learning",
        "Optimization",
        "AI for Science",
        "Physics-informed ML"
      ],
      collaborationNote:
        "I am always happy to discuss potential collaborations, especially on projects related to ML for scientific discovery, robust learning, or foundation models for scientific data."
    },
  
    news: [
      {
        year: 2025,
        items: [
          {
            date: "Nov 2025",
            category: "Conference",
            title: "Paper accepted at Conference Name (CONF 2025)",
            description:
              'Our work "Title of Your Paper" was accepted at Conference Name. The paper studies XYZ and proposes a new method for ABC.',
            tags: ["New paper", "Machine Learning"]
          },
          {
            date: "Sep 2025",
            category: "Talk",
            title: "Invited talk at Some Workshop",
            description:
              'Gave an invited talk on "Title of Talk" at the Workshop on Something, covering recent results on representation learning for scientific applications.',
            tags: ["Talk", "Workshop"]
          },
          {
            date: "Jul 2025",
            category: "Service",
            title: "Program committee / reviewer service",
            description:
              "Serving as a reviewer for Conference A 2025 and Journal B.",
            tags: ["Service"]
          }
        ]
      },
      {
        year: 2024,
        items: [
          {
            date: "Dec 2024",
            category: "Milestone",
            title: "Started Ph.D. at XYZ University",
            description:
              "Joined the ABC Lab at XYZ University as a Ph.D. student, advised by Prof. Advisor Name.",
            tags: ["Ph.D."]
          }
        ]
      }
    ],
  
    publications: {
      selected: [
        {
          type: "Conference",
          year: "2025",
          title: "Title of your representative paper",
          authors: "First Author*, Second Author, Your Name, et al.",
          highlightName: "Your Name",
          venue: "In Proceedings of Conference Name (CONF 2025), pp. 1–12.",
          abstract:
            "One- or two-sentence summary of the main contribution of this work. Focus on what is new and why it matters.",
          links: [
            { label: "Paper", url: "#" },
            { label: "Code", url: "#" },
            { label: "Slides", url: "#" }
          ],
          imageUrl: "assets/img/paper1.png"
        },
        {
          type: "Journal",
          year: "2024",
          title: "Another key representative work",
          authors: "Your Name, Coauthor Name, Coauthor Name",
          highlightName: "Your Name",
          venue: "Journal Name, Volume X, Issue Y, 2024.",
          abstract:
            "Brief description of the problem, your approach, and the main empirical or theoretical findings.",
          links: [
            { label: "Paper", url: "#" },
            { label: "Code", url: "#" }
          ],
          imageUrl: "assets/img/paper2.png"
        },
        {
          type: "Workshop",
          year: "2023",
          title: "Workshop paper / extended abstract",
          authors: "Third Author, Your Name, et al.",
          highlightName: "Your Name",
          venue: "Workshop on Something, co-located with Big Conference 2023.",
          abstract:
            "Preliminary results on an ongoing project, including a negative result that informs future work.",
          links: [
            { label: "Paper", url: "#" },
            { label: "Poster", url: "#" }
          ],
          imageUrl: "assets/img/paper3.png"
        }
      ],
      all: [
        {
          title: "Title of Paper A",
          authors: "First Author, Your Name, Third Author",
          highlightName: "Your Name",
          venue: "Conference / Journal, 2025.",
          links: [
            { label: "paper", url: "#" },
            { label: "code", url: "#" }
          ]
        },
        {
          title: "Title of Paper B",
          authors: "Your Name, Coauthor",
          highlightName: "Your Name",
          venue: "Workshop, 2024.",
          links: [{ label: "paper", url: "#" }]
        },
        {
          title: "Title of Paper C",
          authors: "Coauthor, Coauthor, Your Name",
          highlightName: "Your Name",
          venue: "Journal, 2023.",
          links: [{ label: "paper", url: "#" }]
        }
      ]
    }
  };
  