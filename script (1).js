document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contactForm');
    const formConfirm = document.getElementById('form-confirm');
    const contactFormContainer = document.querySelector('.contact-form-container');


    contactForm.addEventListener('submit', function(event) {
        
        event.preventDefault(); 

        
        const formData = new FormData(contactForm);
    

    
        fetch("/", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.status === 200 || response.ok) {
        
                contactFormContainer.style.display = 'none'; 
                formConfirm.style.display = 'block'; 
                
                
                setTimeout(() => {
                    formConfirm.style.display = 'none';
                    contactFormContainer.style.display = 'block'; 
                    contactForm.reset();
                }, 5000); 

            } else {
                console.error('Submission Error:', response);
                alert('sorry, there was a problem sending your message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Submission Error:', error);
            alert('sorry, there was a problem sending your message. Please try again later.');
        });
    });
});