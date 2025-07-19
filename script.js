// DOM Elements
const bootScreen = document.getElementById('bootScreen');
const bootText = document.getElementById('bootText');
const bootProgressFill = document.getElementById('bootProgressFill');
const terminalContainer = document.getElementById('terminalContainer');
const terminalOutput = document.getElementById('terminalOutput');
const terminalInput = document.getElementById('terminalInput');

// Command History
let commandHistory = [];
let historyIndex = -1;

// Portfolio Data
const portfolioData = {
        about: `A highly motivated and results-driven Graduate Trainee Engineer specializing in Database Engineering, with a strong passion for building robust, scalable, and high-performance data solutions. My expertise spans a wide array of technologies including SQL (PostgreSQL, MySQL), NoSQL (Neo4j), cloud platforms (AWS), and big data ecosystems (Kafka, Spark, Airflow). I excel at designing and implementing efficient data pipelines, optimizing complex SQL queries, and leading critical database migrations with a focus on high availability and data integrity.

My project work, notably CoinSight (real-time crypto data pipelines with ML-ready data) and BharatLawAI (an AI-powered legal assistant leveraging RAG and advanced data structures), showcases my ability to develop innovative, full-stack applications and automate complex workflows. I am committed to leveraging my skills in database administration, data engineering, and software development to drive technological innovation and contribute to impactful systems.`,

    education: [
        {
            degree: "Bachelor of Technology",
            institution: "Pimpri Chinchwad College of Engineering",
            location: "Pune, Maharashtra",
            dates: "June 2020 - June 2024"
        }
    ],

    experience: [
        {
            title: "Graduate Trainee Engineer (Database Engineer)",
            company: "Pune, Maharashtra",
            location: "Pune, Maharashtra",
            dates: "May 2024 - Present",
            details: [
                "Engineered and automated SQL data sync pipelines across PostgreSQL, MySQL, and IBM DB2 using Bash and Python scripts on Linux systems, significantly reducing manual effort and ensuring data consistency.",
                "Led seamless end-to-end MySQL database migration from on-prem to AWS RDS, ensuring high availability, data integrity, and minimal downtime for critical systems.",
                "Collaborated with developers, data engineers, and data scientists to define data requirements, implement DDL/DML changes, and design scalable schemas and data models for new generation applications.",
                "Built and maintained robust data ingestion workflows for internal and external sources, adhering to standard ETL best practices for reliable data delivery.",
                "Tuned and optimized complex SQL queries on large-scale datasets in PostgreSQL and MySQL, substantially improving query performance and resource efficiency for high-performance software systems.",
                "Executed schema migration and reconciliation across staging, pre-prod, and prod environments to maintain relational integrity and version control, supporting continuous application development.",
                "Innovated and automated internal database access request workflows by integrating Python with the Jira API, streamlining access provisioning and reducing manual DBA intervention.",
                "Administered Neo4j graph database access policies and automated housekeeping tasks to enhance performance and ensure security compliance for NoSQL data management."
            ]
        }
    ],

    skills: {
        languages: ["Python", "SQL (PostgreSQL, MySQL)", "Java", "Cypher (Neo4j)"],
        cloudPlatforms: ["AWS", "Azure"],
        bigDataTechnologies: ["Apache Spark (PySpark)", "Kafka", "Hadoop", "Hive", "AWS Glue", "Amazon Redshift", "Google BigQuery"],
        databases: ["PostgreSQL", "MySQL", "Neo4j (NoSQL)", "ClickHouse", "IBM DB2"],
        orchestrationTools: ["Apache Airflow", "Git", "Docker", "VS Code", "Shell Scripting"],
        dataMLLibraries: ["pandas", "NumPy", "scikit-learn", "Matplotlib", "Prophet", "Streamlit", "Dash"]
    },

    projects: [
        {
            name: "CoinSight",
            technologies: ["Kafka", "Spark", "Airflow", "PostgreSQL", "Streamlit", "AWS"],
            description: "Engineered real-time data pipelines to stream crypto data from CoinGecko to Kafka and process with Spark Structured Streaming, demonstrating expertise in scalable and high-performance data systems. Designed and built ETL pipelines following Medallion architecture for structured, ML-ready data, ensuring robust data quality and organization. Automated hourly data aggregation workflows using Apache Airflow for reliable and efficient data delivery, contributing to high-performance software systems. Deployed anomaly detection (Isolation Forest) and time series forecasting (Prophet) models for live monitoring and insights, showcasing application of data structures and algorithms. Integrated external sentiment signals (e.g., Fear-Greed Index) into the data pipeline and stored results in PostgreSQL. Developed interactive dashboards with Streamlit and Dash for visualizing KPIs, anomalies, and forecasts, enabling data-driven decision making.",
            link: "https://github.com/ZaddyAman/CoinSight"
        },
        {
            name: "BharatLawAI",
            technologies: ["React", "FastAPI", "ChromaDB", "Ollama", "Python", "TypeScript"],
            description: "Developed a full-stack AI-powered legal assistant, featuring an interactive chat interface for Indian laws, demonstrating technological innovation in application build-out. Engineered a Retrieval-Augmented Generation (RAG) pipeline, leveraging ChromaDB for efficient vector search and contextual retrieval of legal statutes to ground LLM responses, showcasing advanced data structures and algorithms for semantic search. Designed and implemented robust RESTful APIs via FastAPI to serve a searchable, paginated legal acts library with structured metadata, incorporating in-memory caching for optimized data fetching and high-performance. Managed data persistence for users, conversations, and chat history using SQLAlchemy and SQLite, ensuring data integrity and schema validation for structured data. Built a responsive and modern user interface with React, TypeScript, and Tailwind CSS for seamless user experience, demonstrating ability to deliver reliable software systems.",
            link: "https://github.com/ZaddyAman/BharatLawAI"
        }
    ],

    contact: {
        email: "aman2003sayyad@gmail.com",
        linkedin: "https://linkedin.com/in/aman-sayyad2003",
        github: "https://github.com/ZaddyAman"
    },

    certifications: [
        {
            name: "Operating System Fundamentals",
            issuer: "NPTEL Online Certification, IIT Kharagpur",
            year: "2023"
        }
    ],

    schemas: {
        CoinSight_DB: {
            tables: {
                transactions: [
                    "transaction_id (VARCHAR(64) PRIMARY KEY)",
                    "currency_pair (VARCHAR(20) NOT NULL)",
                    "transaction_type (ENUM('BUY', 'SELL'))",
                    "amount (DECIMAL(18,8) NOT NULL)",
                    "price_usd (DECIMAL(18,8) NOT NULL)",
                    "timestamp (TIMESTAMP NOT NULL)",
                    "exchange_id (VARCHAR(50) NOT NULL)",
                    "user_id (VARCHAR(64))",
                    "fees (DECIMAL(18,8))",
                    "status (ENUM('PENDING', 'COMPLETED', 'FAILED'))",
                    "created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)",
                    "updated_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
                ],
                hourly_aggregates: [
                    "id (BIGINT PRIMARY KEY AUTO_INCREMENT)",
                    "currency_pair (VARCHAR(20) NOT NULL)",
                    "hour_timestamp (TIMESTAMP NOT NULL)",
                    "open_price (DECIMAL(18,8) NOT NULL)",
                    "high_price (DECIMAL(18,8) NOT NULL)",
                    "low_price (DECIMAL(18,8) NOT NULL)",
                    "close_price (DECIMAL(18,8) NOT NULL)",
                    "volume (DECIMAL(18,8) NOT NULL)",
                    "trade_count (INT NOT NULL)",
                    "avg_price (DECIMAL(18,8) NOT NULL)",
                    "price_volatility (DECIMAL(10,6))",
                    "created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
                ],
                sentiment_signals: [
                    "signal_id (VARCHAR(64) PRIMARY KEY)",
                    "currency_pair (VARCHAR(20) NOT NULL)",
                    "signal_timestamp (TIMESTAMP NOT NULL)",
                    "sentiment_score (DECIMAL(3,2))",
                    "confidence_level (DECIMAL(3,2))",
                    "source_type (ENUM('TWITTER', 'NEWS', 'REDDIT', 'FORUM'))",
                    "source_url (TEXT)",
                    "content_hash (VARCHAR(64))",
                    "processing_time (INT)",
                    "model_version (VARCHAR(20))",
                    "created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
                ]
            }
        },
        BharatLawAI_DB: {
            tables: {
                users: [
                    "user_id (UUID PRIMARY KEY)",
                    "email (VARCHAR(255) UNIQUE NOT NULL)",
                    "username (VARCHAR(100) UNIQUE NOT NULL)",
                    "password_hash (VARCHAR(255) NOT NULL)",
                    "full_name (VARCHAR(200))",
                    "profession (ENUM('LAWYER', 'JUDGE', 'STUDENT', 'RESEARCHER', 'OTHER'))",
                    "organization (VARCHAR(200))",
                    "subscription_tier (ENUM('FREE', 'PREMIUM', 'ENTERPRISE'))",
                    "is_verified (BOOLEAN DEFAULT FALSE)",
                    "last_login (TIMESTAMP)",
                    "created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)",
                    "updated_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
                ],
                conversations: [
                    "conversation_id (UUID PRIMARY KEY)",
                    "user_id (UUID NOT NULL)",
                    "title (VARCHAR(500))",
                    "conversation_type (ENUM('CASE_RESEARCH', 'LEGAL_QUERY', 'DOCUMENT_ANALYSIS'))",
                    "status (ENUM('ACTIVE', 'ARCHIVED', 'DELETED'))",
                    "total_messages (INT DEFAULT 0)",
                    "last_activity (TIMESTAMP)",
                    "metadata (JSON)",
                    "created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)",
                    "updated_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)",
                    "FOREIGN KEY (user_id) REFERENCES users(user_id)"
                ],
                messages: [
                    "message_id (UUID PRIMARY KEY)",
                    "conversation_id (UUID NOT NULL)",
                    "sender_type (ENUM('USER', 'AI_ASSISTANT'))",
                    "content (TEXT NOT NULL)",
                    "message_type (ENUM('QUERY', 'RESPONSE', 'CLARIFICATION'))",
                    "cited_cases (JSON)",
                    "cited_sections (JSON)",
                    "confidence_score (DECIMAL(3,2))",
                    "processing_time_ms (INT)",
                    "tokens_used (INT)",
                    "created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)",
                    "FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id)"
                ]
            }
        }
    }
};

// Boot sequence messages
const bootMessages = [
    "Initializing system...",
    "Loading kernel modules...",
    "Starting data pipeline services...",
    "Loading portfolio data...",
    "System ready."
];

// Utility Functions
function appendOutput(text, className = '') {
    // Use document fragment for better performance
    requestAnimationFrame(() => {
        const output = document.createElement('div');
        if (className) {
            output.className = className;
        }
        output.textContent = text;
        terminalOutput.appendChild(output);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    });
}

function appendHTML(html, className = '') {
    requestAnimationFrame(() => {
        const output = document.createElement('div');
        if (className) {
            output.className = className;
        }
        output.innerHTML = html;
        terminalOutput.appendChild(output);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    });
}

function createTable(headers, rows) {
    let table = '';
    const colWidths = headers.map((header, i) => 
        Math.max(header.length, ...rows.map(row => (row[i] || '').toString().length))
    );
    
    // Top border
    table += '┌' + colWidths.map(w => '─'.repeat(w + 2)).join('┬') + '┐\n';
    
    // Headers
    table += '│' + headers.map((header, i) => ' ' + header.padEnd(colWidths[i]) + ' ').join('│') + '│\n';
    
    // Header separator
    table += '├' + colWidths.map(w => '─'.repeat(w + 2)).join('┼') + '┤\n';
    
    // Rows
    rows.forEach(row => {
        table += '│' + row.map((cell, i) => ' ' + (cell || '').toString().padEnd(colWidths[i]) + ' ').join('│') + '│\n';
    });
    
    // Bottom border
    table += '└' + colWidths.map(w => '─'.repeat(w + 2)).join('┴') + '┘';
    
    return table;
}

function showWelcomeMessage() {
    // Use requestAnimationFrame for smoother rendering
    requestAnimationFrame(() => {
        appendOutput('', '');
        appendHTML(`
        <div class="welcome-box">
            <div class="output-heading typewriter">🚀 AMAN SAYYAD PORTFOLIO 🚀</div>
            <div class="output-subheading">Data Engineer | Database Specialist</div>
            <div class="output-info">System Status: <span class="status-online">● ONLINE</span></div>
        </div>
        `, 'fade-in');
        appendOutput('', '');
        appendOutput('🎯 Welcome to my interactive terminal portfolio!', 'output-info');
        appendOutput('💡 Type "help;" or "select help;" to see available commands.', 'output-info');
        appendOutput('🔧 All commands are SQL-inspired and case-insensitive.', 'output-info');
        appendOutput('⚡ Pro tip: Use arrow keys to navigate command history!', 'output-info');
        appendOutput('', '');
    });
}

function typeBootMessage(index = 0) {
    if (index >= bootMessages.length) {
        // Boot complete, show terminal
        bootProgressFill.style.width = '100%';
        setTimeout(() => {
            bootScreen.style.transition = 'opacity 0.3s ease-out';
            bootScreen.style.opacity = '0';
            setTimeout(() => {
                bootScreen.style.display = 'none';
                terminalContainer.classList.add('show');
                showWelcomeMessage();
                terminalInput.focus();
            }, 300);
        }, 200);
        return;
    }
    
    const message = bootMessages[index];
    let charIndex = 0;
    
    function typeChar() {
        if (charIndex < message.length) {
            bootText.textContent += message[charIndex];
            charIndex++;
            setTimeout(typeChar, 25);
        } else {
            bootText.textContent += '\n';
            // Update progress bar
            bootProgressFill.style.width = ((index + 1) / bootMessages.length * 100) + '%';
            setTimeout(() => typeBootMessage(index + 1), 150);
        }
    }
    
    typeChar();
}

function startBootSequence() {
    // Start immediately for faster loading
    requestAnimationFrame(() => {
        typeBootMessage();
    });
}

function processCommand(command) {
    const cmd = command.toLowerCase().trim();
    
    // Add command to history
    if (command.trim() && commandHistory[commandHistory.length - 1] !== command) {
        commandHistory.push(command);
    }
    historyIndex = -1;
    
    // Display command
    appendOutput(`aman@portfolio:~$ ${command}`, 'output-command');
    
    if (!cmd) return;
    
    // Process commands
    if (cmd === 'help;' || cmd === 'select help;') {
        showHelp();
    } else if (cmd === 'select * from about;') {
        showAbout();
    } else if (cmd === 'select * from education;') {
        showEducation();
    } else if (cmd === 'select * from experience;') {
        showExperience();
    } else if (cmd === 'select * from skills;') {
        showSkills();
    } else if (cmd === 'select * from projects;') {
        showProjects();
    } else if (cmd === 'select * from certifications;') {
        showCertifications();
    } else if (cmd === 'select * from contact;' || cmd === 'contact;') {
        showContact();
    } else if (cmd.startsWith('select * from projects where name =')) {
        const projectName = cmd.match(/name\s*=\s*['"](.*?)['"];?/);
        if (projectName) {
            showSpecificProject(projectName[1]);
        } else {
            appendOutput('Error: Invalid project name format. Use: select * from projects where name = \'ProjectName\';', 'output-error');
        }
    } else if (cmd.startsWith('show tables from')) {
        const dbName = cmd.replace('show tables from', '').replace(';', '').trim();
        showTables(dbName);
    } else if (cmd.startsWith('describe table')) {
        const tableRef = cmd.replace('describe table', '').replace(';', '').trim();
        describeTable(tableRef);
    } else if (cmd === 'clear;') {
        terminalOutput.innerHTML = '';
    } else if (cmd === 'reboot;') {
        reboot();
    } else if (cmd === 'gui_mode;') {
        window.location.href = 'gui.html';
    } else if (cmd === 'exit;') {
        exit();
    } else {
        appendOutput(`❌ Command not found: ${command}`, 'output-error');
        appendOutput('💡 Type "help;" to see available commands.', 'output-info');
    }
}

function showHelp() {    appendOutput('📋 Available Commands:', 'output-heading');    appendOutput('', '');        const commands = [        ['help;', '📖 Show this help message'],        ['select * from about;', '👨‍💻 Display about information'],        ['select * from education;', '🎓 Show education details'],        ['select * from experience;', '💼 Display work experience'],        ['select * from skills;', '🛠️ List technical skills'],        ['select * from projects;', '🚀 Show all projects'],        ['select * from certifications;', '📜 Show certifications'],        ['select * from contact;', '📧 Display contact information'],        ['select * from projects where name = \'ProjectName\';', '🔍 Show specific project details'],        ['show tables from DatabaseName;', '🗃️ List database tables'],        ['describe table DatabaseName.TableName;', '📊 Show table schema'],        ['clear;', '🧹 Clear terminal output'],        ['reboot;', '🔄 Restart terminal'],        ['exit;', '🚪 Exit terminal']    ];        const table = createClickableTable(['Command', 'Description'], commands);    appendHTML(table, 'output-table');    appendOutput('', '');    appendOutput('🗄️ Available Databases: CoinSight_DB, BharatLawAI_DB', 'output-info');}function showCertifications() {    appendOutput('📜 Certifications:', 'output-heading');    appendOutput('', '');        portfolioData.certifications.forEach((cert, index) => {        appendOutput(`${index + 1}. 📜 ${cert.name}`, 'output-subheading');        appendOutput(`   🏛️ Issuer: ${cert.issuer}`, 'output-success');        appendOutput(`   📅 Year: ${cert.year}`, 'output-success');        appendOutput('', '');    });}

function createClickableTable(headers, rows) {
    let table = '<table>';
    
    // Headers
    table += '<thead><tr>';
    headers.forEach(header => {
        table += `<th>${header}</th>`;
    });
    table += '</tr></thead>';
    
    // Rows
    table += '<tbody>';
    rows.forEach(row => {
        table += '<tr>';
        row.forEach((cell, i) => {
            if (i === 0) {
                table += `<td><span class="command-link" onclick="copyCommandToInput('${cell}')">${cell}</span></td>`;
            } else {
                table += `<td>${cell}</td>`;
            }
        });
        table += '</tr>';
    });
    table += '</tbody>';
    
    table += '</table>';
    return table;
}

function copyCommandToInput(command) {
    terminalInput.value = command;
    terminalInput.focus();
}

function showAbout() {
    appendOutput('👨‍💻 About Aman Sayyad:', 'output-heading');
    appendOutput('', '');
    appendOutput(portfolioData.about, 'output-success');
    appendOutput('', '');
}

function showEducation() {
    appendOutput('🎓 Education:', 'output-heading');
    appendOutput('', '');
    
    portfolioData.education.forEach((edu, index) => {
        appendOutput(`${index + 1}. 📜 ${edu.degree}`, 'output-subheading');
        appendOutput(`   🏛️ Institution: ${edu.institution}`, 'output-success');
        appendOutput(`   📍 Location: ${edu.location}`, 'output-success');
        appendOutput(`   📅 Duration: ${edu.dates}`, 'output-success');
        appendOutput('', '');
    });
}

function showExperience() {
    appendOutput('💼 Work Experience:', 'output-heading');
    appendOutput('', '');
    
    portfolioData.experience.forEach((exp, index) => {
        appendOutput(`${index + 1}. 🎯 ${exp.title}`, 'output-subheading');
        appendOutput(`   🏢 Company: ${exp.company}`, 'output-success');
        appendOutput(`   📍 Location: ${exp.location}`, 'output-success');
        appendOutput(`   📅 Duration: ${exp.dates}`, 'output-success');
        appendOutput('   🏆 Key Achievements:', 'output-info');
        exp.details.forEach(detail => {
            appendOutput(`   ✅ ${detail}`, 'output-success');
        });
        appendOutput('', '');
    });
}

function showSkills() {
    appendOutput('🛠️ Technical Skills:', 'output-heading');
    appendOutput('', '');
    
    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const categoryName = category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        const categoryIcons = {
            'Languages': '💻',
            'Cloud Platforms': '☁️',
            'Big Data Technologies': '📊',
            'Databases': '🗃️',
            'Orchestration Tools': '🔧',
            'Data M L Libraries': '🤖'
        };
        const icon = categoryIcons[categoryName] || '🔹';
        appendOutput(`${icon} ${categoryName}:`, 'output-subheading');
        
        // Create skill tags
        const skillTags = skills.map(skill => `<span class="skill-tag">${skill}</span>`).join(' ');
        appendHTML(skillTags);
        appendOutput('', '');
    });
}

function showProjects() {    appendOutput('🚀 Projects:', 'output-heading');    appendOutput('', '');        portfolioData.projects.forEach((project, index) => {        appendHTML(`            <div class="project-card">                <div class="output-subheading">${index + 1}. 🎯 ${project.name}</div>                <div class="output-info">🔧 Technologies: ${project.technologies.join(', ')}</div>                <div class="output-success">📝 To view details, type: <span class="command-link" onclick="copyCommandToInput('select * from projects where name = \'${project.name}\';')">select * from projects where name = '${project.name}';</span></div>            </div>        `);        appendOutput('', '');    });}

function showContact() {
    appendOutput('📧 Contact Information:', 'output-heading');
    appendOutput('', '');
    appendOutput(`📧 Email: ${portfolioData.contact.email}`, 'output-success');
    appendHTML(`💼 LinkedIn: <span class="output-link" onclick="window.open('${portfolioData.contact.linkedin}', '_blank')">${portfolioData.contact.linkedin}</span>`);
    appendHTML(`🐙 GitHub: <span class="output-link" onclick="window.open('${portfolioData.contact.github}', '_blank')">${portfolioData.contact.github}</span>`);
    appendOutput('', '');
}

function showSpecificProject(projectName) {
    const project = portfolioData.projects.find(p => 
        p.name.toLowerCase() === projectName.toLowerCase()
    );
    
    if (project) {
        appendOutput(`🎯 Project: ${project.name}`, 'output-heading');
        appendHTML(`
            <div class="project-card">
                <div class="output-info">🔧 Technologies: ${project.technologies.join(', ')}</div>
                <div class="output-success">📝 Description: ${project.description}</div>
                <div>🔗 Link: <span class="output-link" onclick="window.open('${project.link}', '_blank')">${project.link}</span></div>
            </div>
        `);
        appendOutput('', '');
    } else {
        appendOutput(`❌ Project '${projectName}' not found.`, 'output-error');
        appendOutput('📋 Available projects: ' + portfolioData.projects.map(p => p.name).join(', '), 'output-info');
    }
}

function showTables(dbName) {
    const db = portfolioData.schemas[dbName];
    if (db) {
        appendOutput(`🗃️ Tables in ${dbName}:`, 'output-heading');
        appendOutput('', '');
        
        const tables = Object.keys(db.tables).map(table => [table]);
        const tableList = createTable(['Table Name'], tables);
        appendOutput(tableList, 'output-table');
        appendOutput('', '');
    } else {
        appendOutput(`❌ Database '${dbName}' not found.`, 'output-error');
        appendOutput('🗄️ Available databases: ' + Object.keys(portfolioData.schemas).join(', '), 'output-info');
    }
}

function describeTable(tableRef) {
    const [dbName, tableName] = tableRef.split('.');
    
    if (!dbName || !tableName) {
        appendOutput('❌ Error: Invalid table reference. Use format: DatabaseName.TableName', 'output-error');
        return;
    }
    
    const db = portfolioData.schemas[dbName];
    if (!db) {
        appendOutput(`❌ Database '${dbName}' not found.`, 'output-error');
        return;
    }
    
    const table = db.tables[tableName];
    if (!table) {
        appendOutput(`❌ Table '${tableName}' not found in ${dbName}.`, 'output-error');
        return;
    }
    
    appendOutput(`📊 Schema for ${dbName}.${tableName}:`, 'output-heading');
    appendOutput('', '');
    
    const columns = table.map((col, index) => [index + 1, col]);
    const schemaTable = createTable(['#', 'Column Definition'], columns);
    appendOutput(schemaTable, 'output-table');
    appendOutput('', '');
}

function reboot() {
    appendOutput('🔄 Rebooting system...', 'output-loading');
    setTimeout(() => {
        terminalOutput.innerHTML = '';
        showWelcomeMessage();
    }, 2000);
}

function exit() {
    appendOutput('🙏 Thank you for visiting my portfolio!', 'output-success');
    appendOutput('🔌 Connection terminated.', 'output-info');
    terminalInput.disabled = true;
    terminalInput.style.opacity = '0.5';
}

// Event Listeners
terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = terminalInput.value;
        processCommand(command);
        terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0) {
            if (historyIndex === -1) {
                historyIndex = commandHistory.length - 1;
            } else if (historyIndex > 0) {
                historyIndex--;
            }
            terminalInput.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex !== -1) {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = -1;
                terminalInput.value = '';
            }
        }
    }
});

// Auto-focus input when clicking anywhere on terminal
terminalContainer.addEventListener('click', function() {
    terminalInput.focus();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    startBootSequence();
});