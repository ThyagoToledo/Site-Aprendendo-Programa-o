// Tab functionality for presentations page
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(targetTab) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        const targetButton = document.querySelector(`[data-tab="${targetTab}"]`);
        const targetContent = document.getElementById(targetTab);

        if (targetButton && targetContent) {
            targetButton.classList.add('active');
            targetContent.classList.add('active');
        }
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
            
            // Update URL hash for bookmarking
            window.location.hash = targetTab;
        });
    });

    // Handle initial load with hash
    function initializeTab() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            switchTab(hash);
        }
    }

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            switchTab(hash);
        }
    });

    // Initialize tab on page load
    initializeTab();

    // Add smooth scrolling for navigation links in this page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target && target.classList.contains('tab-content')) {
                e.preventDefault();
                
                // Switch to the target tab
                switchTab(targetId);
                
                // Scroll to the tabs container
                const tabsContainer = document.querySelector('.tabs-container');
                if (tabsContainer) {
                    tabsContainer.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('tab-button')) {
        let targetButton = null;
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            targetButton = e.target.nextElementSibling || document.querySelector('.tab-button');
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            targetButton = e.target.previousElementSibling || document.querySelector('.tab-button:last-child');
        } else if (e.key === 'Home') {
            e.preventDefault();
            targetButton = document.querySelector('.tab-button');
        } else if (e.key === 'End') {
            e.preventDefault();
            targetButton = document.querySelector('.tab-button:last-child');
        }
        
        if (targetButton) {
            targetButton.focus();
            targetButton.click();
        }
    }
});
