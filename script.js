// Portfolio Data
const portfolioData = {
    personal: {
        name: "Mohammod Ibrahim Hossain",
        roles: [
            "Machine Learning Engineer",
            "Data Scientist",
            "MLOps Specialist"
        ],
        bio: "Mohammod Ibrahim Hossain is a detail-oriented expert in Data Science, Machine Learning, and MLOps, with extensive experience in end-to-end model development, deployment, and optimization. He has a proven track record of delivering high-accuracy solutions, such as real estate price predictions with 95% accuracy, using tools like Python, NLP, Docker, and AWS. His expertise lies in creating data-driven insights through sentiment analysis, recommendation engines, and automated ML pipelines for scalable AI solutions.",
        location: "Dhaka, Bangladesh",
        email: "mohammod.ibrahim.data@gmail.com",
        phone: "+88 01301 927872",
        website: "https://sites.google.com/view/mohammod-ibrahim-data/home",
        languages: "English (Fluent), Bangla (Native)"
    },
    experience: [
        {
            id: "alloftech",
            year: "Aug 2024 – Present",
            title: "CEO and Chairman",
            institute: "AllOfTech",
            details: "Delivered ML solutions such as chatbots, recommendation systems, and predictive analytics for 3 clients. Improved sales forecasting accuracy from 70% to 90%. Optimized client pipelines, reducing processing time by 25% and cloud costs by 10%. Leading an innovative technology agency delivering cutting-edge solutions in AI/ML, blockchain, web development, mobile apps, UX/UI design, and graphics & branding.",
            link: "https://www.alloftech.site",
            linkTitle: "www.alloftech.site",
            highlight: true
        },
        {
            id: "bulipe",
            year: "May 2025 – Nov 25",
            title: "Data Scientist",
            institute: "Bulipe",
            details: "Built and deployed a RAG-based chatbot that reduced manual customer support by 30%. Developed forecasting models that cut planning time by 20%. Increased company sales by 5% with data-driven insights.",
            link: "",
            linkTitle: "",
            highlight: true
        },
        {
            id: "mashover",
            year: "Dec 2023 – Jul 2024",
            title: "Data Science & ML Specialist",
            institute: "Mashover",
            details: "Analyzed customer behavior, improving sales conversion and retention. Built demand models that cut overstock costs by 15% (saved about $20K). Deployed ML into the sales pipeline, reducing response time by 20%.",
            link: "",
            linkTitle: "",
            highlight: true
        }
    ],
    projects: [
        {
            id: "chatbot",
            title: "Personal AI Chatbot",
            category: "AI & NLP",
            description: "Developed and deployed a personal AI assistant with dynamic, context-aware conversations, helping users get fast, personalized answers and support in real time.",
            image: "images/Chatbot.jfif",
            stack: ["Python", "NLP", "Streamlit", "Deep Learning", "ML"],
            link: "https://ibrahim-chatbot.streamlit.app/",
            github: "https://github.com/mohammod2/my_personal_chatbot/blob/main/Chatbot.py"
        },
        {
            id: "business-dashboard",
            title: "Dashboard (Data Science & MLOps)",
            category: "Data Science, Analytics & MLOps",
            description: "Welcome to your smart, simple and powerful business dashboard. Track total sales, daily sales, customer growth and return rates in real time for 7, 14, 30 days or 3 months. The 3‑month view adds expert insights and personalized suggestions from data scientists. See beautiful charts of best‑selling products, trending items, customer locations, high‑performing platforms and efficient customer segments — each with clear, actionable recommendations. Just upload your data and the dashboard does the rest automatically, like having a full data team at your fingertips.",
            image: "images/Dashboard.jpg",
            stack: [
                "Python",
                "Streamlit",
                "pandas",
                "NumPy",
                "Matplotlib",
                "Plotly",
                "Requests",
                "JSON",
                "MLOps"
            ],
            link: "https://alloftech.streamlit.app/",
            
        },
        {
            id: "real-estate",
            title: "Real Estate Price Prediction & Analysis",
            category: "Machine Learning & MLOps",
            description: "Built an AI-powered tool for real estate price prediction, detailed data analysis, and apartment recommendations, achieving up to 95% accuracy for confident, data-driven property investment decisions.",
            image: "images/real-estate.webp",
            stack: ["Python", "Docker", "AWS", "CI/CD", "Streamlit", "Random Forest", "DVC", "GitHub Actions"],
            link: "https://dhaka-real-estate.streamlit.app/",
            github: "https://github.com/MohammoD2/bd_real_estate"
        },
        {
            id: "sentiment-analysis",
            title: "Sentiment Analysis System",
            category: "NLP & Machine Learning",
            description: "Developed an NLP model to classify text sentiment (positive, negative, neutral, suicidal). Achieved over 85% tracking accuracy with deep sort and an average accuracy of 75%.",
            image: "images/Sentiment.jpg",
            stack: ["TensorFlow", "Scikit-Learn", "NLP", "MLOps", "Pandas", "Logistic Regression", "TF-IDF", "Streamlit", "GitHub Actions"],
            link: "https://sentiment-analysis-system-ibrahim-hossain.streamlit.app/",
            github: "https://github.com/MohammoD2/Sentiment-Analysis-system"
        },
        {
            id: "movie-recommender",
            title: "Movie Recommendation System",
            category: "Machine Learning",
            description: "Built a recommendation system using collaborative filtering to suggest films based on user preferences. Improved similarity score from 72% to 90%. Deployed via Streamlit for real-time recommendations.",
            image: "images/american-movie-posters-z0puq43u0qbtr6j2.jpg",
            stack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "MLOps", "Docker", "GitHub Actions", "Streamlit"],
            link: "https://movie-recommender-system-ibrahim-hossain.streamlit.app/",
            github: "https://github.com/MohammoD2/Moive-Recommender-System"
        },
        {
            id: "youtube-analyzer",
            title: "YouTube Comment Analyzer",
            category: "NLP & Data Science",
            description: "Developed an NLP-based sentiment analysis tool to analyze YouTube comment trends using AWS cloud services, ML models, and data visualization techniques.",
            image: "images/YouTube_Comment_Analyzer.png",
            stack: ["NLP", "AWS", "MLOps", "Scientific Visualization"],
            link: "https://youtu.be/W4LsHP7b4qc?si=jt6TEPdinLpQ2bbB",
            github: "https://github.com/MohammoD2/Youtube-Comment-Analysis-"
        },
        {
            id: "cbc-predictor",
            title: "CBC Report Checker",
            category: "Healthcare ML",
            description: "Developed a medical web app to analyze CBC reports and provide health insights, handling data preprocessing, feature engineering, and model deployment.",
            image: "images/blood.jpg",
            stack: ["Medical Data Analysis", "ML Deployment"],
            link: "https://cbc-report-checker-ibrahim-hossain.streamlit.app/",
            github: "https://github.com/MohammoD2/CBc-"
        }
    ],
    services: [
        {
            title: "Machine Learning Solutions",
            description: "Building and deploying robust ML models using TensorFlow, Scikit-learn, and PyTorch for various business applications.",
            icon: "fas fa-robot"
        },
        {
            title: "Data Science & Analytics",
            description: "Comprehensive data analysis, feature engineering, EDA, statistical analysis, and advanced data visualization.",
            icon: "fas fa-chart-line"
        },
        {
            title: "MLOps & Automation",
            description: "End-to-end MLOps implementation with CI/CD, Docker, AWS, automated retraining, and scalable deployment pipelines.",
            icon: "fas fa-cogs"
        },
        {
            title: "Deep Learning",
            description: "Neural Networks, CNNs, RNNs, Transfer Learning, and model optimization for complex AI applications.",
            icon: "fas fa-brain"
        },
        {
            title: "Predictive Analytics",
            description: "Time series forecasting, demand prediction, sentiment analysis, and recommendation systems tailored to your needs.",
            icon: "fas fa-project-diagram"
        }
    ],
    testimonials: [],
    timeline: [
        {
            year: "2024",
            title: "CampusX Data Science Certification",
            description: "Completed comprehensive Data Science specialization with advanced machine learning, MLOps, and real-world project execution.",
            image: "images/CampusX-certificate.png",
            link: ""
        },
        {
            year: "2024",
            title: "Real Estate ML Project",
            description: "Led a full-stack real estate price prediction and recommendation system with advanced analytics and ML models.",
            image: "images/real-estate.webp",
            link: "https://dhaka-real-estate.streamlit.app/"
        },
        {
            year: "2024",
            title: "MLOps Implementation",
            description: "Implemented CI/CD pipelines with GitHub Actions, Docker, and AWS for automated model training and deployment.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
            link: ""
        }
    ],
    skills: {
        languages: ["Python (OOP)", "SQL", "Flask"],
        ml_frameworks: ["TensorFlow", "Scikit-Learn", "PyTorch", "Keras"],
        data_science: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "EDA", "Statistical Analysis", "Data Cleaning", "Feature Engineering", "Data Pipelines", "Data Visualization", "Advanced Statistics"],
        mlops: ["Docker", "Kubernetes", "AWS (EC2, S3, SageMaker)", "CI/CD", "Git", "DVC", "MLflow", "Automated Testing", "Model Monitoring", "Version Control"],
        ml_techniques: ["Supervised & Unsupervised Learning", "NLP", "CNNs", "RNNs", "Transfer Learning", "A/B Testing", "Ensemble Methods", "Classification", "Neural Networks", "Model Optimization", "Model Selection", "Hyperparameter Tuning"]
    },
    achievements: [
        "Built RAG-based chatbot reducing manual customer support by 30% at Bulipe.",
        "Improved sales forecasting accuracy from 70% to 90% at AllOfTech.",
        "Reduced client pipeline processing time by 25% and cloud costs by 10%.",
        "Cut overstock costs by 15% (saved ~$20K) with demand models at Mashover.",
        "Achieved 95% accuracy in real estate price prediction system.",
        "Improved movie recommendation similarity score from 72% to 90%.",
        "Deployed ML solutions for 3+ clients with measurable business impact."
    ],
    education: [
        {
            degree: "CampusX DSMP 2.0",
            institute: "Data Science, Machine Learning & MLOps",
            year: "2024",
            focus: "Python, Machine Learning, MLOps, Model Deployment, CI/CD, Docker, AWS",
            certificate: "https://drive.google.com/file/d/1DypeoeinLG2P7u9Av5j-JYp9zr7Msv4d/view?usp=sharing"
        },
        {
            degree: "Ongoing Studies",
            institute: "Govt. Bangla College",
            year: "August 2023 - Present",
            focus: "Mathematics, Physics, Computer Science Fundamentals"
        }
    ],
    certifications: [
        {
            degree: "CampusX DSMP 2.0",
            institute: "Data Science, Machine Learning & MLOps",
            year: "2024",
            certificate: "https://drive.google.com/file/d/1DypeoeinLG2P7u9Av5j-JYp9zr7Msv4d/view?usp=sharing"
        },
        {
            degree: "Google Cloud Digital Leader",
            institute: "Google Cloud",
            year: "2024",
            certificate: "https://www.cloudskillsboost.google/public_profiles/certificate"
        },
        {
            degree: "Google Cloud Associate Cloud Engineer",
            institute: "Google Cloud",
            year: "2024",
            certificate: "https://www.cloudskillsboost.google/public_profiles/certificate"
        },
        {
            degree: "Google Data Analytics Professional Certificate",
            institute: "Google (Coursera)",
            year: "2024",
            certificate: "https://www.coursera.org/professional-certificates/google-data-analytics"
        },
        {
            degree: "Google Cloud Professional Data Engineer",
            institute: "Google Cloud",
            year: "2024",
            certificate: "https://www.cloudskillsboost.google/public_profiles/certificate"
        }
    ],
    alloftech: {
        name: "AllOfTech",
        role: "Founder, CEO & Chairman",
        description: "Innovative Technology Solutions Agency dedicated to delivering cutting-edge solutions in AI/ML, blockchain, web development, mobile apps, UX/UI design, and graphics & branding.",
        mission: "To transform ideas into impactful digital realities by leveraging advanced technologies, ensuring efficiency, security, and user-centric experiences that drive measurable results for our clients.",
        website: "https://www.alloftech.site",
        email: "contact.alloftech@gmail.com",
        facebook: "https://www.facebook.com/AllOfTech.official",
        reddit: "https://www.reddit.com/user/Rare-Philosophy387/"
    },
    socials: {
        github: "https://github.com/MohammoD2",
        linkedin: "https://www.linkedin.com/in/ibrahim-hossain-554198285/",
        twitter: "https://twitter.com/MohammodIb51035",
        facebook: "https://www.facebook.com/imibrahimhossain",
        instagram: "https://www.instagram.com/mohammodibrahimhossain",
        website: "https://sites.google.com/view/mohammod-ibrahim-data/home"
    },
    stats: [
        { label: "AI Projects", value: "15+" },
        { label: "Companies", value: "3+" },
        { label: "Accuracy Achieved", value: "95%" },
        { label: "Cost Savings", value: "$20K+" }
    ]
};

// Render Education
function renderEducation() {
    const container = document.getElementById('educationList');
    if (!container) return;

    portfolioData.education.forEach((edu, index) => {
        const eduItem = document.createElement('div');
        eduItem.className = 'achievement-item';
        eduItem.style.animationDelay = `${index * 0.1}s`;

        eduItem.innerHTML = `
            <div>
                <h4>${edu.degree}</h4>
                <p class="text-primary">${edu.institute}</p>
                <p class="text-muted">${edu.focus}</p>
                <p class="text-muted" style="font-size: 0.875rem;">${edu.year}</p>
                ${edu.certificate ? `
                    <a href="${edu.certificate}" target="_blank" class="footer-link" style="margin-top: 0.5rem; display: inline-block;">View Certificate →</a>
                ` : ''}
            </div>
        `;

        container.appendChild(eduItem);
    });
}

// Render Certifications
function renderCertifications() {
    const container = document.getElementById('certificationsList');
    if (!container) return;

    // Use dedicated certifications array if available, otherwise fall back to education
    const certifications = portfolioData.certifications || portfolioData.education.filter(edu => edu.certificate);
    
    certifications.forEach((cert, index) => {
        const certItem = document.createElement('div');
        certItem.className = 'certification-item';
        certItem.style.animationDelay = `${index * 0.1}s`;

        // Only show "View Certificate" link for CampusX certificate
        const isCampusX = cert.degree.includes('CampusX');
        const certificateLink = isCampusX && cert.certificate 
            ? ` - <a href="${cert.certificate}" target="_blank" class="footer-link">View Certificate</a>` 
            : '';

        certItem.innerHTML = `
            <span class="cert-number">${index + 1}</span>
            <span><strong>${cert.degree}</strong> - ${cert.institute} ${cert.year ? `(${cert.year})` : ''}${certificateLink}</span>
        `;

        container.appendChild(certItem);
    });
}

// Render AllOfTech Section
function renderAllOfTech() {
    const description = document.getElementById('alloftechDescription');
    const content = document.getElementById('alloftechContent');
    
    if (!description || !content) return;

    const alloftech = portfolioData.alloftech;

    description.textContent = alloftech.description;

        content.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">
                ${alloftech.name} - ${alloftech.role}
            </h3>
            <p style="color: hsl(var(--muted-foreground)); line-height: 1.75;">
                ${alloftech.description}
            </p>
        </div>
        
        <div class="alloftech-mission">
            <h4>Our Mission</h4>
            <p style="color: hsl(var(--muted-foreground)); line-height: 1.75;">
                ${alloftech.mission}
            </p>
        </div>

        <div style="margin-top: 2rem;">
            <h4 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Why Choose AllOfTech?</h4>
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                    <i class="fas fa-check-circle" style="color: hsl(var(--primary)); font-size: 1.25rem; margin-top: 0.125rem;"></i>
                    <span style="color: hsl(var(--muted-foreground));"><strong>Customized Solutions:</strong> Technologies specifically aligned with your business goals.</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                    <i class="fas fa-check-circle" style="color: hsl(var(--primary)); font-size: 1.25rem; margin-top: 0.125rem;"></i>
                    <span style="color: hsl(var(--muted-foreground));"><strong>Proven Expertise:</strong> Projects that reduce costs, improve decision-making, and scale operations.</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                    <i class="fas fa-check-circle" style="color: hsl(var(--primary)); font-size: 1.25rem; margin-top: 0.125rem;"></i>
                    <span style="color: hsl(var(--muted-foreground));"><strong>End-to-End Support:</strong> From concept to deployment and maintenance.</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                    <i class="fas fa-check-circle" style="color: hsl(var(--primary)); font-size: 1.25rem; margin-top: 0.125rem;"></i>
                    <span style="color: hsl(var(--muted-foreground));"><strong>Client-Focused Approach:</strong> Collaboration, transparency, and high-value outcomes.</span>
                </li>
            </ul>
        </div>

        <div class="alloftech-links">
            <a href="${alloftech.website}" target="_blank" class="alloftech-link">
                <i class="fas fa-globe"></i> Visit Website
            </a>
            <a href="mailto:${alloftech.email}" class="alloftech-link">
                <i class="fas fa-envelope"></i> Contact Us
            </a>
            <a href="${alloftech.facebook}" target="_blank" class="alloftech-link">
                <i class="fab fa-facebook"></i> Facebook
            </a>
            <a href="${alloftech.website}" target="_blank" class="alloftech-link">
                <i class="fas fa-rocket"></i> Start Your Project
            </a>
        </div>
    `;
}

// Theme Management
function initTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    updateThemeIcons();
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
}

function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
        if (icon.classList.contains('theme-icon-moon')) {
            icon.style.display = isDark ? 'none' : 'block';
        } else {
            icon.style.display = isDark ? 'block' : 'none';
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu?.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;
                if (currentScroll > 50) {
                    header?.classList.add('scrolled');
                } else {
                    header?.classList.remove('scrolled');
                }
                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Animated Roles
function initAnimatedRoles() {
    const roleText = document.getElementById('roleText');
    if (!roleText) return;

    let currentIndex = 0;
    const roles = portfolioData.personal.roles;

    function updateRole() {
        // Fade out
        roleText.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        roleText.style.opacity = '0';
        roleText.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            // Change text
            roleText.textContent = roles[currentIndex];
            currentIndex = (currentIndex + 1) % roles.length;
            
            // Fade in
            roleText.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
                roleText.style.opacity = '1';
                roleText.style.transform = 'translateY(0)';
            });
        }, 300);
    }

    // Initial delay
    setTimeout(updateRole, 2000);
    setInterval(updateRole, 3000);
}

// Experience Tree
function renderExperienceTree() {
    const container = document.getElementById('experienceItems');
    if (!container) return;

    let showDetails = false;

    const toggleBtn = document.getElementById('experienceToggle');
    const toggleText = document.getElementById('toggleText');

    toggleBtn?.addEventListener('click', () => {
        showDetails = !showDetails;
        toggleBtn.classList.toggle('active');
        toggleText.textContent = showDetails ? 'Collapse Details' : 'View Detailed Experience';
        
        const detailsElements = document.querySelectorAll('.experience-details');
        detailsElements.forEach(el => {
            if (showDetails) {
                el.classList.add('expanded');
            } else {
                el.classList.remove('expanded');
            }
        });

        const cards = document.querySelectorAll('.experience-card');
        cards.forEach(card => {
            if (showDetails) {
                card.classList.add('experience-details-expanded');
            } else {
                card.classList.remove('experience-details-expanded');
            }
        });
    });

    portfolioData.experience.forEach((item, index) => {
        const isEven = index % 2 === 0;
        const experienceItem = document.createElement('div');
        experienceItem.className = `experience-item ${isEven ? 'even' : 'odd'}`;
        experienceItem.style.animationDelay = `${index * 0.1}s`;

        experienceItem.innerHTML = `
            <div class="experience-marker">
                <div class="marker-dot ${item.highlight ? 'highlight' : ''}"></div>
            </div>
            <div class="experience-branch"></div>
            <div class="experience-content">
                <div class="experience-card ${item.highlight ? 'highlight' : ''}">
                    <div class="experience-year">${item.year}</div>
                    <div class="experience-title">${item.title}</div>
                    <div class="experience-institute">
                        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" style="color: hsl(var(--primary)); text-decoration: none; transition: opacity 0.3s;">${item.institute} →</a>` : item.institute}
                    </div>
                    <div class="experience-details">
                        <div class="experience-details-text">${item.details}</div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(experienceItem);
    });
}

// Projects
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    let visibleCount = 6;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    function renderProjectsList() {
        container.innerHTML = '';
        const visibleProjects = portfolioData.projects.slice(0, visibleCount);

        visibleProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.animationDelay = `${index * 0.1}s`;
            projectCard.style.transitionDelay = `${index * 0.05}s`;

            projectCard.innerHTML = `
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}'">
                    <div class="project-overlay">
                        <div class="project-overlay-button">View Details</div>
                    </div>
                </div>
                <div class="project-card-footer">
                    <div class="project-category">${project.category}</div>
                    <h3 class="project-card-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-stack">
                        ${project.stack.slice(0, 3).map(tech => 
                            `<span class="project-stack-badge">${tech}</span>`
                        ).join('')}
                        ${project.stack.length > 3 ? 
                            `<span class="project-stack-badge">+${project.stack.length - 3}</span>` : ''}
                    </div>
                </div>
            `;

            projectCard.addEventListener('click', () => openProjectModal(project));
            container.appendChild(projectCard);
            
            // Trigger animation after a short delay
            setTimeout(() => {
                projectCard.style.opacity = '0';
                projectCard.style.transform = 'translateY(30px) scale(0.95)';
                setTimeout(() => {
                    projectCard.classList.add('animate');
                }, 50);
            }, 10);
        });

        if (visibleCount >= portfolioData.projects.length) {
            loadMoreContainer.style.display = 'none';
        } else {
            loadMoreContainer.style.display = 'block';
        }
    }

    loadMoreBtn?.addEventListener('click', () => {
        visibleCount = portfolioData.projects.length;
        renderProjectsList();
    });

    renderProjectsList();
}

function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    if (!modal || !modalBody) return;

    // Add smooth opening animation
    modal.style.opacity = '0';
    modal.classList.add('active');
    
    // Trigger animation
    requestAnimationFrame(() => {
        modal.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        modal.style.opacity = '1';
    });

    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image" onerror="this.src='https://via.placeholder.com/800x600?text=${encodeURIComponent(project.title)}'">
        <div class="modal-content-section">
            <span class="badge badge-outline modal-badge">${project.category}</span>
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-description">${project.description}</p>
            <div>
                <h4 class="modal-stack-title">Tech Stack</h4>
                <div class="modal-stack">
                    ${project.stack.map(tech => 
                        `<span class="modal-stack-badge">${tech}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="modal-button">
                ${project.link ? `<a href="${project.link}" target="_blank" class="btn btn-primary" style="margin-right: 1rem;">View Project →</a>` : ''}
                ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-outline">View Code →</a>` : ''}
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// Render Stats
function renderStats() {
    const container = document.getElementById('statsGrid');
    if (!container) return;

    portfolioData.stats.forEach((stat, index) => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.style.animationDelay = `${index * 0.1}s`;

        statItem.innerHTML = `
            <h3 class="stat-value">${stat.value}</h3>
            <p class="stat-label">${stat.label}</p>
        `;

        container.appendChild(statItem);
    });
}

// Render Achievements
function renderAchievements() {
    const container = document.getElementById('achievementsList');
    if (!container) return;

    portfolioData.achievements.forEach((achievement, index) => {
        const achievementItem = document.createElement('div');
        achievementItem.className = 'achievement-item';
        achievementItem.style.animationDelay = `${index * 0.1}s`;

        achievementItem.innerHTML = `
            <span class="achievement-bullet"></span>
            <p>${achievement}</p>
        `;

        container.appendChild(achievementItem);
    });
}

// Update About Text
function updateAboutText() {
    const aboutText = document.getElementById('aboutText');
    if (aboutText) {
        aboutText.textContent = portfolioData.personal.bio;
    }
}

// Update Testimonials to handle empty array
function renderTestimonials() {
    const container = document.getElementById('testimonialsScroll');
    if (!container) return;

    if (portfolioData.testimonials.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: hsl(var(--muted-foreground));">Testimonials coming soon!</p>';
        return;
    }

    // Duplicate testimonials for infinite scroll effect
    const testimonials = [...portfolioData.testimonials, ...portfolioData.testimonials];

    testimonials.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';

        testimonialCard.innerHTML = `
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-footer">
                <div class="testimonial-avatar">
                    <img src="${testimonial.image}" alt="${testimonial.name}" onerror="this.src='https://via.placeholder.com/48?text=${encodeURIComponent(testimonial.name.charAt(0))}'">
                </div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
                <div class="testimonial-stars">
                    ${Array(5).fill(0).map(() => '<span class="testimonial-star">★</span>').join('')}
                </div>
            </div>
        `;

        container.appendChild(testimonialCard);
    });

    // Make testimonials draggable
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    function closeModal() {
        modal.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal?.classList.remove('active');
            modal.style.opacity = '';
            modal.style.transition = '';
        }, 300);
    }

    modalOverlay?.addEventListener('click', closeModal);
    modalClose?.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });
}

// Timeline
function renderTimeline() {
    const container = document.getElementById('timelineItems');
    if (!container) return;

    portfolioData.timeline.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.1}s`;

        timelineItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="timeline-image" onerror="this.src='https://via.placeholder.com/400x500?text=${encodeURIComponent(item.title)}'">
            <div class="timeline-overlay"></div>
            <div class="timeline-content">
                <div class="timeline-year">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${item.year}</span>
                </div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
                ${item.link ? `
                    <a href="${item.link}" target="_blank" class="timeline-link">
                        Read More →
                    </a>
                ` : ''}
            </div>
        `;

        container.appendChild(timelineItem);
    });
}

// Services
function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    portfolioData.services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.animationDelay = `${index * 0.1}s`;

        serviceCard.innerHTML = `
            <div class="service-icon"><i class="${service.icon}"></i></div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;

        container.appendChild(serviceCard);
    });
}

// Expertise
function renderExpertise() {
    const container = document.getElementById('expertiseGrid');
    if (!container) return;

    const allSkills = [
        { title: "Programming Languages", items: portfolioData.skills.languages, color: "blue", compact: true },
        { title: "ML Frameworks", items: portfolioData.skills.ml_frameworks, color: "purple", compact: true },
        { title: "Data Science Tools", items: portfolioData.skills.data_science, color: "pink", compact: false },
        { title: "MLOps & Cloud", items: portfolioData.skills.mlops, color: "blue", compact: false },
        { title: "ML Techniques", items: portfolioData.skills.ml_techniques, color: "purple", compact: false }
    ];

    allSkills.forEach((category, idx) => {
        const expertiseCard = document.createElement('div');
        expertiseCard.className = `expertise-card ${category.compact ? 'compact' : ''}`;
        expertiseCard.style.animationDelay = `${idx * 0.2}s`;

        expertiseCard.innerHTML = `
            <h3 class="expertise-title">${category.title}</h3>
            <div class="expertise-tags">
                ${category.items.map(skill => 
                    `<span class="expertise-tag ${category.color}">${skill}</span>`
                ).join('')}
            </div>
        `;

        container.appendChild(expertiseCard);
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#contact') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Stats animation
    document.querySelectorAll('.stat-item').forEach((el, index) => {
        observer.observe(el);
    });

    // Projects animation
    document.querySelectorAll('.project-card').forEach((el, index) => {
        setTimeout(() => {
            observer.observe(el);
        }, index * 50);
    });

    // Services animation
    document.querySelectorAll('.service-card').forEach((el, index) => {
        setTimeout(() => {
            observer.observe(el);
        }, index * 100);
    });

    // Expertise animation
    document.querySelectorAll('.expertise-card').forEach((el, index) => {
        setTimeout(() => {
            observer.observe(el);
        }, index * 150);
    });

    // Achievement items
    document.querySelectorAll('.achievement-item, .certification-item').forEach((el, index) => {
        setTimeout(() => {
            observer.observe(el);
        }, index * 50);
    });

    // Timeline items
    document.querySelectorAll('.timeline-item').forEach((el, index) => {
        setTimeout(() => {
            observer.observe(el);
        }, index * 100);
    });

    // Testimonial cards
    document.querySelectorAll('.testimonial-card').forEach((el, index) => {
        setTimeout(() => {
            observer.observe(el);
        }, index * 80);
    });
}

// Set Current Year
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initHeaderScroll();
    initAnimatedRoles();
    renderStats();
    updateAboutText();
    renderExperienceTree();
    renderProjects();
    initProjectModal();
    renderTimeline();
    renderTestimonials();
    renderServices();
    renderExpertise();
    renderAchievements();
    renderEducation();
    renderCertifications();
    renderAllOfTech();
    initSmoothScroll();
    initScrollAnimations();
    setCurrentYear();

    // Theme toggle buttons
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
    document.getElementById('themeToggleMobile')?.addEventListener('click', toggleTheme);
});

