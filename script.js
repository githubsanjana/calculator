let string = "";
let memory = 0; // Initialize memory to zero
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Evaluate the expression
            } catch (error) {
                string = "Error"; // Handle any errors during evaluation
            }
        }
        else if (e.target.innerHTML === 'C') {
            string = ""; // Clear the input
        }
        else if (e.target.innerHTML === 'M+') {
            memory += parseFloat(string); // Add the current value to memory
        }
        else if (e.target.innerHTML === 'M-') {
            memory -= parseFloat(string); // Subtract the current value from memory
        }
        else {
            string = string + e.target.innerHTML;
        }
        
        console.log(e.target);
        document.querySelector('input').value = string;
    });
});
