/**
 * Central Portfolio Data Store for Daksh Sharma (DAKSHU)
 * 100% Verified Information - Zero Invented Facts
 */

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Daksh Sharma',
    brandName: 'DAKSHU',
    githubUsername: 'dakshcrafts',
    roles: [
      'Python Developer',
      'Aspiring AI Engineer',
      'B.Tech CSE Student'
    ],
    location: 'Delhi, India',
    coordinates: '28.6139° N, 77.2090° E',
    education: 'B.Tech in Computer Science & Engineering (R.D. Engineering College)',
    motto: 'Learn, Build, Improve, Repeat.',
    headline: 'BUILDING SOFTWARE. LEARNING AI. CREATING WHAT\'S NEXT.',
    bio: 'A passionate Python developer and B.Tech CSE student building practical desktop tools, data utilities, and security algorithms while deepening knowledge in Data Structures, Machine Learning, and Artificial Intelligence.',
    status: 'AVAILABLE FOR OPPORTUNITIES'
  },

  projects: [
    {
      id: 'medicine-reminder',
      number: '01',
      title: 'Medicine Reminder',
      repoName: 'medicine-reminder-python',
      category: 'DESKTOP APPLICATION',
      techCategory: 'PYTHON / TKINTER / MYSQL',
      stack: ['Python', 'Tkinter', 'MySQL', 'mysql-connector-python'],
      description: 'A desktop application engineered to manage medication schedules, automate timed reminders, and synchronize patient dosage history with a MySQL relational database.',
      features: [
        'User Authentication & Session Management',
        'Custom Dosage Scheduling & Medicine Registry',
        'Timed Alarm & Visual Desktop Popup Reminders',
        'Persistent MySQL Database Sync & History Logs'
      ],
      githubUrl: 'https://github.com/dakshcrafts/medicine-reminder-python',
      featured: true
    },
    {
      id: 'image-processing-toolkit',
      number: '02',
      title: 'Image Processing Toolkit',
      repoName: 'image-processing-toolkit',
      category: 'DESKTOP SUITE & VISION UTILITY',
      techCategory: 'PYTHON / TKINTER / PILLOW / NUMPY',
      stack: ['Python', 'Tkinter', 'Pillow (PIL)', 'NumPy'],
      description: 'A graphical image manipulation suite featuring real-time image matrix transformations, pixel-level filtering, brightness/contrast tuning, and live preview rendering.',
      features: [
        'Real-time Canvas Image Transformation',
        'NumPy-Powered Image Matrix Adjustments',
        'Custom Filter Suite (Grayscale, Invert, Blur, Sharpen)',
        'Aspect-Ratio Preserving Crop, Rotate & Flip'
      ],
      githubUrl: 'https://github.com/dakshcrafts/image-processing-toolkit',
      featured: true
    },
    {
      id: 'encryption-decryption',
      number: '03',
      title: 'Encryption & Decryption System',
      repoName: 'encryption-decryption-python',
      category: 'SECURITY & CRYPTOGRAPHY UTILITY',
      techCategory: 'PYTHON / MYSQL',
      stack: ['Python', 'MySQL', 'Custom Algorithms'],
      description: 'A cryptographic security utility implementing multi-layer character transformation algorithms, ASCII-based mapping, time-sensitive OTP verification cycles, and secure MySQL audit logging.',
      features: [
        'Custom Character & ASCII Transformations',
        'Time-Based OTP Verification Mechanism',
        'Multi-Pass Cipher Encoding & Decoding',
        'Structured MySQL Audit Logging'
      ],
      githubUrl: 'https://github.com/dakshcrafts/encryption-decryption-python',
      featured: true
    },
    {
      id: 'student-result-analyzer',
      number: '04',
      title: 'Student Result Analyzer',
      repoName: 'student-result-analyzer',
      category: 'ACADEMIC ANALYTICS & AUTOMATION',
      techCategory: 'PYTHON / DATA PROCESSING',
      stack: ['Python', 'Data Analytics', 'File I/O'],
      description: 'An automated academic data processing system built in Python to evaluate student performance datasets, compute statistical metrics, determine grade distributions, and generate structured analytical summaries.',
      features: [
        'Automated Batch Score & Grade Evaluation',
        'Statistical Computation (Mean, Median, Highest, Lowest)',
        'Categorical Performance Distribution Analysis',
        'Formatted Performance Summary Exporting'
      ],
      githubUrl: 'https://github.com/dakshcrafts/student-result-analyzer',
      featured: false
    },
    {
      id: 'payment-form',
      number: '05',
      title: 'Payment Form Interface',
      repoName: 'Payment-Foam',
      category: 'FRONTEND WEB COMPONENT',
      techCategory: 'HTML5 / CSS3',
      stack: ['HTML5', 'CSS3', 'Responsive Design'],
      description: 'A focused, accessible payment information interface designed with clean semantic HTML and modular CSS styling, featuring responsive field layouts and real-time input state feedback.',
      features: [
        'Semantic & Accessible Form Architecture',
        'Responsive Card Layout with Input Feedback',
        'Clean Minimalist Typography & Styling',
        'Zero-Dependency Lightweight Footprint'
      ],
      githubUrl: 'https://github.com/dakshcrafts/Payment-Foam',
      featured: false
    }
  ],

  githubRepositories: [
    {
      name: 'medicine-reminder-python',
      desc: 'Python desktop application to manage medicines and receive timed reminders with MySQL integration.',
      isFork: false,
      url: 'https://github.com/dakshcrafts/medicine-reminder-python'
    },
    {
      name: 'image-processing-toolkit',
      desc: 'GUI image processing toolkit built in Python with Tkinter, PIL/Pillow and NumPy.',
      isFork: false,
      url: 'https://github.com/dakshcrafts/image-processing-toolkit'
    },
    {
      name: 'encryption-decryption-python',
      desc: 'Encryption and decryption system in Python featuring custom ASCII transforms, OTP verification, and MySQL.',
      isFork: false,
      url: 'https://github.com/dakshcrafts/encryption-decryption-python'
    },
    {
      name: 'student-result-analyzer',
      desc: 'Python utility to process student academic marks, evaluate performance, and generate statistical insights.',
      isFork: false,
      url: 'https://github.com/dakshcrafts/student-result-analyzer'
    },
    {
      name: 'Payment-Foam',
      desc: 'Clean frontend webpage for payment details and checkout form styling.',
      isFork: false,
      url: 'https://github.com/dakshcrafts/Payment-Foam'
    },
    {
      name: 'dakshcrafts',
      desc: 'Daksh Sharma GitHub profile configuration and personal overview repository.',
      isFork: false,
      url: 'https://github.com/dakshcrafts/dakshcrafts'
    },
    {
      name: 'github-readme-stats',
      desc: 'Dynamically generated stats for GitHub readmes (Forked from anuraghazra/github-readme-stats).',
      isFork: true,
      url: 'https://github.com/dakshcrafts/github-readme-stats'
    }
  ],

  techStack: [
    {
      category: 'Core & Languages',
      tier: 'PRIMARY',
      items: ['Python', 'C', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      category: 'Libraries & GUI',
      tier: 'WORKING WITH',
      items: ['Tkinter', 'NumPy', 'Pillow (PIL)', 'mysql-connector-python']
    },
    {
      category: 'Database & Storage',
      tier: 'PRIMARY',
      items: ['MySQL', 'Relational Schemas', 'SQL Queries']
    },
    {
      category: 'Developer Tools',
      tier: 'PRIMARY',
      items: ['Git', 'GitHub', 'VS Code', 'Windows Terminal']
    },
    {
      category: 'Active Learning & Research',
      tier: 'EXPLORING',
      items: ['Data Structures & Algorithms', 'Machine Learning', 'Artificial Intelligence']
    }
  ],

  services: [
    {
      number: '01',
      title: 'Python Development',
      desc: 'Crafting modular Python scripts, algorithmic data handlers, backend logic, and structured problem solving.'
    },
    {
      number: '02',
      title: 'Desktop Applications',
      desc: 'Building cross-platform desktop GUI software with Tkinter, event-driven interfaces, and MySQL database backends.'
    },
    {
      number: '03',
      title: 'Automation & Tooling',
      desc: 'Automating repetitive workflows, batch image manipulation, file parsing, and data processing routines.'
    },
    {
      number: '04',
      title: 'Secure Data Systems',
      desc: 'Implementing custom encryption/decryption routines, time-based OTP verification, and relational database integrity.'
    },
    {
      number: '05',
      title: 'AI & ML Exploration',
      desc: 'Developing mathematical and algorithmic foundations in machine learning, NumPy matrix operations, and intelligent systems.'
    }
  ],

  journey: [
    {
      step: '01',
      title: 'B.Tech Computer Science',
      status: 'Current Foundation',
      desc: 'Enrolled in B.Tech CSE at R.D. Engineering College, building strong computer science and problem-solving foundations.'
    },
    {
      step: '02',
      title: 'Python Programming',
      status: 'Core Specialization',
      desc: 'Developing deep practical competence in Python, object-oriented programming, and functional workflows.'
    },
    {
      step: '03',
      title: 'Desktop GUIs & Relational Databases',
      status: 'Built Practical Apps',
      desc: 'Engineered full-featured desktop applications with Tkinter wired to persistent MySQL database backends.'
    },
    {
      step: '04',
      title: 'Data Structures & Algorithms',
      status: 'Active Learning',
      desc: 'Actively solving algorithmic challenges, mastering trees, graphs, dynamic programming, and complexity analysis.'
    },
    {
      step: '05',
      title: 'Machine Learning Fundamentals',
      status: 'Exploring',
      desc: 'Exploring statistical learning models, predictive pipelines, and high-performance numeric arrays using NumPy.'
    },
    {
      step: '06',
      title: 'Artificial Intelligence & Open Source',
      status: 'Target & Vision',
      desc: 'Aspiring to engineer impactful AI systems and contribute actively to global open-source software communities.'
    }
  ],

  socials: [
    { name: 'GitHub', handle: 'dakshcrafts', url: 'https://github.com/dakshcrafts' },
    { name: 'LinkedIn', handle: 'dakshcrafts', url: 'https://linkedin.com/in/dakshcrafts' },
    { name: 'Instagram', handle: 'dakshcrafts', url: 'https://instagram.com/dakshcrafts' },
    { name: 'X / Twitter', handle: 'dakshcrafts', url: 'https://x.com/dakshcrafts' },
    { name: 'YouTube', handle: '@dakshcrafts', url: 'https://youtube.com/@dakshcrafts' }
  ]
};