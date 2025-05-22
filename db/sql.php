-- Contacts table (for contact form submissions)
CREATE TABLE contacts (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    ip_address VARCHAR(45)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- News table (for news section)
CREATE TABLE news (
    news_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    excerpt VARCHAR(300),
    image_path VARCHAR(255),
    publication_date DATE NOT NULL,
    is_featured BOOLEAN DEFAULT FALSE,
    author VARCHAR(100),
    views INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Team members table (for About Us page)
CREATE TABLE team_members (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    bio TEXT,
    image_path VARCHAR(255),
    join_date DATE,
    department VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    display_order INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Projects table (for Projects/Operations page)
CREATE TABLE projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    location VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    type ENUM('iron', 'rare', 'industrial') NOT NULL,
    status ENUM('exploration', 'development', 'active', 'closed') NOT NULL,
    start_date DATE,
    end_date DATE,
    image_path VARCHAR(255),
    coordinates POINT,
    content TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sustainability initiatives table
CREATE TABLE sustainability (
    initiative_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    image_path VARCHAR(255),
    year INT NOT NULL,
    metrics JSON
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Technology table (for technology section)
CREATE TABLE technologies (
    tech_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    image_path VARCHAR(255),
    implementation_date DATE,
    benefits TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- FAQ table (for Contact page)
CREATE TABLE faqs (
    faq_id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(50),
    display_order INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Subscribers table (for newsletter if needed)
CREATE TABLE subscribers (
    subscriber_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100),
    subscription_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;