// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Load news items (could be replaced with AJAX call to database)
    if (document.getElementById('newsContainer')) {
        loadNewsItems();
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function loadNewsItems() {
    const newsContainer = document.getElementById('newsContainer');
    
    // In a real implementation, this would come from a database
    const newsItems = [
        {
            title: "New Mineral Discovery in Kiruna",
            date: "2023-10-15",
            excerpt: "Our geologists have identified significant deposits of rare earth elements in our Kiruna operations.",
            image: "./images/discovery mineral.jpg"
        },
        {
            title: "Sustainability Award 2023",
            date: "2023-09-28",
            excerpt: "frontier Mining co. received the frontier  Council's Environmental Award for our reforestation efforts.",
            image: "./images/discovery mineral.jpg"
        },
        {
            title: "Partnership with Local Communities",
            date: "2023-08-10",
            excerpt: "We've signed new agreements with Sami communities to ensure responsible land use.",
            image: "./images/discovery mineral.jpg"
        }
    ];
    
    newsItems.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        
        newsItem.innerHTML = `
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="news-content">
                <h3>${item.title}</h3>
                <p class="news-date">${formatDate(item.date)}</p>
                <p>${item.excerpt}</p>
                <a href="#" class="btn btn-small">Read More</a>
            </div>
        `;
        
        newsContainer.appendChild(newsItem);
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
// Add to main.js for form handling
if (document.getElementById('contactForm')) {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Check for success/error message in URL
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    
    if (status === 'success') {
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.style.color = 'green';
        formMessage.style.display = 'block';
    } else if (status === 'error') {
        formMessage.textContent = 'There was an error sending your message. Please try again.';
        formMessage.style.color = 'red';
        formMessage.style.display = 'block';
    }
    
    // Form validation
    contactForm.addEventListener('submit', function(e) {
        let valid = true;
        
        // Simple validation example
        const email = document.getElementById('email').value;
        if (!email.includes('@') || !email.includes('.')) {
            valid = false;
            alert('Please enter a valid email address');
            e.preventDefault();
        }
        
        return valid;
    });
}
// Function to load news items
function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    
    // Sample news data (replace with your actual data source)
    const newsData = [
        {
            id: 1,
            title: "New Mineral Discovery in Kiruna",
            date: "2023-10-15",
            excerpt: "Our geologists have identified significant deposits of rare earth elements.",
            image: "images/news/mining-discovery.jpg"  // Make sure this path is correct
        },
        {
            id: 2,
            title: "Sustainability Award 2023",
            date: "2023-09-28",
            excerpt: "Received the Nordic Council's Environmental Award for reforestation efforts.",
            image: "images/news/sustainability-award.jpg"
        },
        {
            id: 3,
            title: "Community Partnership",
            date: "2023-08-10",
            excerpt: "New agreements with local communities for responsible land use.",
            image: "../images/part.jpg.jpg"
        }
    ];

    // Clear container first
    newsContainer.innerHTML = '';

    // Add each news item to the container
    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        
        newsItem.innerHTML = `
            <div class="news-image">
                <img src="${news.image}" alt="${news.title}">
            </div>
            <div class="news-content">
                <h3>${news.title}</h3>
                <p class="news-date">${formatDate(news.date)}</p>
                <p>${news.excerpt}</p>
                <a href="#" class="btn btn-small">Read More</a>
            </div>
        `;
        
        newsContainer.appendChild(newsItem);
    });
}

// Helper function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load news when page loads
document.addEventListener('DOMContentLoaded', loadNews);
// Sample news data with image paths
const newsData = [
    {
        title: "Sustainability Award Image",
        date: "October 15, 2023",
        excerpt: "Our geologists have identified significant deposits...",
        image: "images/awards.jpg"
    },
    // Add other news items...
];

function loadNews() {
    const container = document.querySelector('.news-container');
    
    newsData.forEach(item => {
        container.innerHTML += `
        <div class="news-item">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="news-content">
                <h3>${item.title}</h3>
                <p class="news-date">${item.date}</p>
                <p>${item.excerpt}</p>
                <a href="#" class="btn btn-small">Read More</a>
            </div>
        </div>
        `;
    });
}

// Call on page load
window.addEventListener('DOMContentLoaded', loadNews);
// Loading spinner control
window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    // Set minimum display time (8 seconds)
    const minDisplayTime = 8000;
    const pageLoadTime = performance.now();
    
    function hideLoader() {
      const currentTime = performance.now();
      const elapsed = currentTime - pageLoadTime;
      const remainingTime = minDisplayTime - elapsed;
      
      if (remainingTime > 0) {
        setTimeout(hideLoader, remainingTime);
      } else {
        loadingOverlay.classList.add('fade-out');
        
        // Remove overlay after fade completes
        setTimeout(() => {
          loadingOverlay.remove();
        }, 1000);
      }
    }
    
    // Start checking when to hide
    hideLoader();
  });