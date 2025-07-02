export const portfolioData = {
  personal: {
    name: "John Doe",
    title: "Full-Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar: "/avatars/john-doe.jpg",
    status: "Available for new opportunities",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating innovative solutions and learning new technologies.",
    resume: "/resume/john-doe-resume.pdf"
  },
  
  contacts: [
    {
      id: "about",
      name: "About Me",
      avatar: "👨‍💻",
      lastMessage: "Get to know me better",
      time: "now",
      unread: 0,
      isOnline: true,
      category: "personal"
    },
    {
      id: "skills",
      name: "Technical Skills",
      avatar: "⚡",
      lastMessage: "My technical expertise",
      time: "now",
      unread: 0,
      isOnline: true,
      category: "technical"
    },
    {
      id: "experience",
      name: "Work Experience",
      avatar: "💼",
      lastMessage: "My professional journey",
      time: "now",
      unread: 0,
      isOnline: true,
      category: "professional"
    },
    {
      id: "projects",
      name: "Featured Projects",
      avatar: "🚀",
      lastMessage: "Check out my latest work",
      time: "now",
      unread: 3,
      isOnline: true,
      category: "projects"
    },
    {
      id: "education",
      name: "Education",
      avatar: "🎓",
      lastMessage: "Academic background",
      time: "now",
      unread: 0,
      isOnline: true,
      category: "academic"
    },
    {
      id: "testimonials",
      name: "Testimonials",
      avatar: "⭐",
      lastMessage: "What people say about me",
      time: "now",
      unread: 0,
      isOnline: true,
      category: "social"
    },
    {
      id: "contact",
      name: "Get In Touch",
      avatar: "📞",
      lastMessage: "Let's work together!",
      time: "now",
      unread: 1,
      isOnline: true,
      category: "contact"
    },
    {
      id: "blog",
      name: "Tech Blog",
      avatar: "📝",
      lastMessage: "Latest thoughts and insights",
      time: "2h",
      unread: 0,
      isOnline: true,
      category: "content"
    }
  ],

  conversations: {
    about: [
      {
        id: 1,
        type: "incoming",
        content: "Hi there! 👋 Welcome to my portfolio!",
        timestamp: "10:00 AM",
        isTyping: false
      },
      {
        id: 2,
        type: "incoming",
        content: "I'm John, a passionate full-stack developer based in San Francisco. I love building innovative web applications and solving complex problems with code.",
        timestamp: "10:00 AM",
        isTyping: false
      },
      {
        id: 3,
        type: "incoming",
        content: "🌟 Quick facts about me:\n• 5+ years of experience\n• 50+ projects completed\n• 10+ technologies mastered\n• Always learning something new!",
        timestamp: "10:01 AM",
        isTyping: false
      },
      {
        id: 4,
        type: "incoming",
        content: "Feel free to explore different sections to learn more about my skills, experience, and projects! 🚀",
        timestamp: "10:01 AM",
        isTyping: false
      }
    ],

    skills: [
      {
        id: 1,
        type: "incoming",
        content: "💻 Frontend Technologies:",
        timestamp: "10:05 AM",
        isTyping: false
      },
      {
        id: 2,
        type: "skill-card",
        content: {
          category: "Frontend",
          skills: [
            { name: "React", level: 95, icon: "⚛️" },
            { name: "Next.js", level: 90, icon: "▲" },
            { name: "TypeScript", level: 88, icon: "🔷" },
            { name: "Tailwind CSS", level: 92, icon: "🎨" },
            { name: "Vue.js", level: 80, icon: "💚" }
          ]
        },
        timestamp: "10:05 AM",
        isTyping: false
      },
      {
        id: 3,
        type: "incoming",
        content: "⚙️ Backend Technologies:",
        timestamp: "10:06 AM",
        isTyping: false
      },
      {
        id: 4,
        type: "skill-card",
        content: {
          category: "Backend",
          skills: [
            { name: "Node.js", level: 93, icon: "🟢" },
            { name: "Python", level: 87, icon: "🐍" },
            { name: "PostgreSQL", level: 85, icon: "🐘" },
            { name: "MongoDB", level: 82, icon: "🍃" },
            { name: "GraphQL", level: 78, icon: "◉" }
          ]
        },
        timestamp: "10:06 AM",
        isTyping: false
      },
      {
        id: 5,
        type: "incoming",
        content: "☁️ DevOps & Tools:",
        timestamp: "10:07 AM",
        isTyping: false
      },
      {
        id: 6,
        type: "skill-card",
        content: {
          category: "DevOps",
          skills: [
            { name: "AWS", level: 80, icon: "☁️" },
            { name: "Docker", level: 85, icon: "🐳" },
            { name: "Git", level: 95, icon: "📝" },
            { name: "CI/CD", level: 82, icon: "🔄" },
            { name: "Vercel", level: 90, icon: "▲" }
          ]
        },
        timestamp: "10:07 AM",
        isTyping: false
      }
    ],

    experience: [
      {
        id: 1,
        type: "incoming",
        content: "Here's my professional journey! 💼",
        timestamp: "10:10 AM",
        isTyping: false
      },
      {
        id: 2,
        type: "experience-card",
        content: {
          title: "Senior Full-Stack Developer",
          company: "TechCorp Inc.",
          period: "2022 - Present",
          location: "San Francisco, CA",
          description: "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
          achievements: [
            "Increased app performance by 40%",
            "Led team of 5 developers",
            "Implemented CI/CD pipeline",
            "Reduced deployment time by 60%"
          ],
          technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
        },
        timestamp: "10:10 AM",
        isTyping: false
      },
      {
        id: 3,
        type: "experience-card",
        content: {
          title: "Full-Stack Developer",
          company: "StartupXYZ",
          period: "2020 - 2022",
          location: "Remote",
          description: "Built the company's main product from scratch, implemented payment systems, and developed admin dashboards.",
          achievements: [
            "Built MVP in 3 months",
            "Integrated Stripe payments",
            "Developed responsive admin panel",
            "Achieved 99.9% uptime"
          ],
          technologies: ["Vue.js", "Python", "MongoDB", "Docker"]
        },
        timestamp: "10:11 AM",
        isTyping: false
      },
      {
        id: 4,
        type: "experience-card",
        content: {
          title: "Frontend Developer",
          company: "WebAgency",
          period: "2019 - 2020",
          location: "New York, NY",
          description: "Created responsive websites and web applications for various clients, focusing on user experience and performance.",
          achievements: [
            "Delivered 20+ client projects",
            "Improved site speed by 50%",
            "Maintained 98% client satisfaction",
            "Implemented SEO best practices"
          ],
          technologies: ["JavaScript", "React", "SCSS", "WordPress"]
        },
        timestamp: "10:12 AM",
        isTyping: false
      }
    ],

    projects: [
      {
        id: 1,
        type: "incoming",
        content: "🚀 Here are some of my featured projects:",
        timestamp: "10:15 AM",
        isTyping: false
      },
      {
        id: 2,
        type: "project-card",
        content: {
          title: "E-Commerce Platform",
          description: "Full-featured e-commerce platform with admin dashboard, payment integration, and inventory management.",
          image: "/projects/ecommerce.jpg",
          technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
          features: [
            "User authentication & authorization",
            "Shopping cart & checkout",
            "Payment processing",
            "Admin dashboard",
            "Inventory management",
            "Order tracking"
          ],
          liveUrl: "https://ecommerce-demo.vercel.app",
          githubUrl: "https://github.com/johndoe/ecommerce",
          status: "Live"
        },
        timestamp: "10:15 AM",
        isTyping: false
      },
      {
        id: 3,
        type: "project-card",
        content: {
          title: "Social Media Analytics",
          description: "Real-time social media analytics dashboard with data visualization and automated reporting.",
          image: "/projects/analytics.jpg",
          technologies: ["React", "D3.js", "Python", "MongoDB"],
          features: [
            "Real-time data processing",
            "Interactive charts & graphs",
            "Automated report generation",
            "Multi-platform integration",
            "Custom dashboards",
            "Export functionality"
          ],
          liveUrl: "https://analytics-demo.vercel.app",
          githubUrl: "https://github.com/johndoe/analytics",
          status: "Live"
        },
        timestamp: "10:16 AM",
        isTyping: false
      },
      {
        id: 4,
        type: "project-card",
        content: {
          title: "Task Management App",
          description: "Collaborative task management application with real-time updates, team workspaces, and productivity insights.",
          image: "/projects/taskmanager.jpg",
          technologies: ["Vue.js", "Express.js", "Socket.io", "Redis"],
          features: [
            "Real-time collaboration",
            "Team workspaces",
            "Task prioritization",
            "Time tracking",
            "Progress analytics",
            "Mobile responsive"
          ],
          liveUrl: "https://taskmanager-demo.vercel.app",
          githubUrl: "https://github.com/johndoe/taskmanager",
          status: "In Development"
        },
        timestamp: "10:17 AM",
        isTyping: false
      }
    ],

    education: [
      {
        id: 1,
        type: "incoming",
        content: "🎓 My educational background:",
        timestamp: "10:20 AM",
        isTyping: false
      },
      {
        id: 2,
        type: "education-card",
        content: {
          degree: "Bachelor of Science in Computer Science",
          institution: "University of California, Berkeley",
          period: "2015 - 2019",
          gpa: "3.8/4.0",
          achievements: [
            "Graduated Magna Cum Laude",
            "Dean's List (6 semesters)",
            "CS Department Honor Society",
            "ACM Programming Contest Winner"
          ],
          coursework: [
            "Data Structures & Algorithms",
            "Software Engineering",
            "Database Systems",
            "Computer Networks",
            "Machine Learning",
            "Web Development"
          ]
        },
        timestamp: "10:20 AM",
        isTyping: false
      },
      {
        id: 3,
        type: "incoming",
        content: "📚 Continuous Learning & Certifications:",
        timestamp: "10:21 AM",
        isTyping: false
      },
      {
        id: 4,
        type: "certification-list",
        content: [
          {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
            credentialId: "AWS-CSA-2023-001"
          },
          {
            name: "Google Cloud Professional Developer",
            issuer: "Google Cloud",
            date: "2022",
            credentialId: "GCP-PD-2022-001"
          },
          {
            name: "MongoDB Certified Developer",
            issuer: "MongoDB Inc.",
            date: "2022",
            credentialId: "MD-2022-001"
          },
          {
            name: "React Advanced Patterns",
            issuer: "Frontend Masters",
            date: "2023",
            credentialId: "FM-RAP-2023"
          }
        ],
        timestamp: "10:21 AM",
        isTyping: false
      }
    ],

    testimonials: [
      {
        id: 1,
        type: "incoming",
        content: "⭐ Here's what people say about working with me:",
        timestamp: "10:25 AM",
        isTyping: false
      },
      {
        id: 2,
        type: "testimonial-card",
        content: {
          text: "John is an exceptional developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into elegant solutions is remarkable.",
          author: "Sarah Johnson",
          position: "Product Manager",
          company: "TechCorp Inc.",
          avatar: "/testimonials/sarah.jpg",
          rating: 5
        },
        timestamp: "10:25 AM",
        isTyping: false
      },
      {
        id: 3,
        type: "testimonial-card",
        content: {
          text: "Working with John was a pleasure. He's not only technically skilled but also a great communicator and team player. He helped us launch our product ahead of schedule.",
          author: "Mike Chen",
          position: "CTO",
          company: "StartupXYZ",
          avatar: "/testimonials/mike.jpg",
          rating: 5
        },
        timestamp: "10:26 AM",
        isTyping: false
      },
      {
        id: 4,
        type: "testimonial-card",
        content: {
          text: "John's attention to detail and commitment to best practices made our codebase much more maintainable. He's the kind of developer every team needs.",
          author: "Emily Rodriguez",
          position: "Senior Developer",
          company: "WebAgency",
          avatar: "/testimonials/emily.jpg",
          rating: 5
        },
        timestamp: "10:27 AM",
        isTyping: false
      }
    ],

    contact: [
      {
        id: 1,
        type: "incoming",
        content: "📞 Let's connect! I'm always open to discussing new opportunities and interesting projects.",
        timestamp: "10:30 AM",
        isTyping: false
      },
      {
        id: 2,
        type: "contact-card",
        content: {
          email: "john.doe@example.com",
          phone: "+1 (555) 123-4567",
          location: "San Francisco, CA",
          linkedin: "https://linkedin.com/in/johndoe",
          github: "https://github.com/johndoe",
          twitter: "https://twitter.com/johndoe",
          availability: "Available for new opportunities"
        },
        timestamp: "10:30 AM",
        isTyping: false
      },
      {
        id: 3,
        type: "incoming",
        content: "📝 Feel free to download my resume or reach out directly:",
        timestamp: "10:31 AM",
        isTyping: false
      },
      {
        id: 4,
        type: "file-message",
        content: {
          fileName: "John_Doe_Resume.pdf",
          fileSize: "245 KB",
          downloadUrl: "/resume/john-doe-resume.pdf"
        },
        timestamp: "10:31 AM",
        isTyping: false
      },
      {
        id: 5,
        type: "incoming",
        content: "I typically respond within 24 hours. Looking forward to hearing from you! 🚀",
        timestamp: "10:32 AM",
        isTyping: false
      }
    ],

    blog: [
      {
        id: 1,
        type: "incoming",
        content: "📝 Welcome to my tech blog! Here are my latest articles:",
        timestamp: "8:00 AM",
        isTyping: false
      },
      {
        id: 2,
        type: "blog-card",
        content: {
          title: "Building Scalable React Applications",
          excerpt: "Best practices for structuring large React applications with proper state management and component architecture.",
          publishDate: "2024-06-15",
          readTime: "8 min read",
          tags: ["React", "Architecture", "Best Practices"],
          url: "/blog/scalable-react-applications"
        },
        timestamp: "8:00 AM",
        isTyping: false
      },
      {
        id: 3,
        type: "blog-card",
        content: {
          title: "The Future of Web Development",
          excerpt: "Exploring emerging trends in web development including WebAssembly, Edge Computing, and the Jamstack architecture.",
          publishDate: "2024-06-10",
          readTime: "12 min read",
          tags: ["Web Development", "Trends", "Future Tech"],
          url: "/blog/future-of-web-development"
        },
        timestamp: "8:01 AM",
        isTyping: false
      },
      {
        id: 4,
        type: "blog-card",
        content: {
          title: "Optimizing Next.js Performance",
          excerpt: "Advanced techniques for improving your Next.js application performance including code splitting, image optimization, and caching strategies.",
          publishDate: "2024-06-05",
          readTime: "10 min read",
          tags: ["Next.js", "Performance", "Optimization"],
          url: "/blog/nextjs-performance-optimization"
        },
        timestamp: "8:02 AM",
        isTyping: false
      }
    ]
  }
};
