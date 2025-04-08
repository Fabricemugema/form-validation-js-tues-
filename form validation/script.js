document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputs = document.querySelectorAll('input[type="text"]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && input.value.trim() === '') {
            isValid = false;
            input.style.border = '1px solid red';
            
            input.addEventListener('input', function() {
                this.style.border = '';
            });
        }
    });
    if (!isValid) {
        alert('Please fill in all required fields.');
    } else {
        alert('Form submitted successfully!');
    }
});