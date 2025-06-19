// waiting for page to load before anything happens
document.addEventListener('DOMContentLoaded', function() {
    
    // getting elements from index.html by their ids
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const contactForm = document.getElementById('contactForm');
    const successPopup = document.getElementById('successPopup');
    const closePopup = document.getElementById('closePopup');
    
    // making the hamburger menu work
    mobileMenuBtn.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        } else {
            navMenu.classList.add('active');
        }
    });
    
    // smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = 80;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // closing the mobile menu
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Validating the contact form to check if the user filled it out correctly
    // and showing a success popup if everything is fine
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        //  get input values
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;
        
        // get error elements to show error messages
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        
        // clear errors
        nameError.innerHTML = '';
        emailError.innerHTML = '';
        messageError.innerHTML = '';
        
        let formValid = true;
        
        // check if name, email, and message are filled out correctly
        // check name
        if (name === '' || name === null) {
            nameError.innerHTML = 'Name is required';
            formValid = false;
        }
        
        // check email
        if (email === '' || email === null) {
            emailError.innerHTML = 'Email is required';
            formValid = false;
        } else {
            // simple email check
            if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                emailError.innerHTML = 'Please enter a valid email';
                formValid = false;
            }
        }
        
        // check message length
        if (message === '' || message === null) {
            messageError.innerHTML = 'Message is required';
            formValid = false;
        } else if (message.length < 10) {
            messageError.innerHTML = 'Message must be at least 10 characters';
            formValid = false;
        }
        
        // if form is valid 
        if (formValid === true) {
            // show success popup
            successPopup.style.display = 'block';
            
            // clear form after submission
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        }
    });
    
    // closing the popup when user clicks the close button
    closePopup.addEventListener('click', function() {
        successPopup.style.display = 'none';
    });
    
    // closing the popup when clicking outside it
    window.addEventListener('click', function(e) {
        if (e.target === successPopup) {
            successPopup.style.display = 'none';
        }
    });
    
    // simple project hover effect to make it more interactive
    const projects = document.querySelectorAll('.project');
    
    for (let i = 0; i < projects.length; i++) {
        projects[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        
        projects[i].addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
    }
    
});

// simple function to check email format
function validateEmail(email) {
    if (email.includes('@') && email.includes('.')) {
        return true;
    } else {
        return false;
    }
}