// файл script.js

window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null

 //   const outputHistory = document.getElementById("history")
    const outputElement = document.getElementById("result")

    function updateFontSize() {
        if ((a.length > 16) || (a > 999999999999999)){
            outputElement.style.fontSize = '0.9rem';
        }
        else if ((a.length > 7) || (a > 999999)) {
            outputElement.style.fontSize = '1.3rem';
        } 
        else {
            outputElement.style.fontSize = '1.8rem';
        }
    }

    document.getElementById('btn_op_clr').addEventListener('click', function() {
        if (document.body.style.backgroundColor === 'rgb(28, 60, 44)'){
            document.body.style.backgroundColor = '#927c4c';
        } else {
            document.body.style.backgroundColor = '#1c3c2c';
        }
    });
    document.getElementById('btn_op_res').addEventListener('click', function() {
        result - document.getElementById("result")
        if (result.style.background === 'rgb(73, 73, 73)'){
            result.style.background = 'rgb(67, 56, 56)';
        } else {
            result.style.background = 'rgb(73, 73, 73)';
        }
    });
    
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
                updateFontSize()
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b  
                updateFontSize() 
                switch(selectedOperation) { 
                    case 'x':
                        expressionResult = (+a) * (+b)
                        console.log(expressionResult);
                        break;
                    case '+':
                        expressionResult = (+a) + (+b)
                        break;
                    case '-':
                        expressionResult = (+a) - (+b)
                        break;
                    case '/':
                        expressionResult = (+a) / (+b)
                        break;
                    case '%':
                        expressionResult = (+a) % (+b)
                        break;
                }

            }
        }
    }


    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    document.getElementById("btn_op_backspace").onclick = function() {
        if (!selectedOperation) {
            if (a.length > 0) {
                a = a.slice(0, -1); 
                outputElement.innerHTML = a || '0';
                updateFontSize()  
            }
        } else {
            if (b.length > 0) {
                b = b.slice(0, -1); 
                outputElement.innerHTML = b || '0';
                updateFontSize()  

            }
        }
    };

    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        if (selectedOperation){
            a = expressionResult
            b = ''
            outputElement.innerHTML = a
        }
        selectedOperation = 'x'

    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_percent").onclick = function() { 
        if (a === '') return
        selectedOperation = '%'
    }
    document.getElementById("btn_op_000").onclick = function() { 
        if (a === '') return
        a =  (+a) * 1000
        outputElement.innerHTML = a
        updateFontSize()
    }
    document.getElementById("btn_op_cube").onclick = function() { 
        if (a === '') return
        a =  (+a) * (+a) * (+a)
        outputElement.innerHTML = a
    }
    document.getElementById("btn_op_square").onclick = function() { 
        if (a === '') return
        a =  (+a) * (+a)
        outputElement.innerHTML = a
    }
    document.getElementById("btn_op_sqrt").onclick = function() { 
        if (a === '') return
        a = Math.sqrt(+a)
        outputElement.innerHTML = a
    }
    document.getElementById("btn_op_fact").onclick = function() { 
        if (a === '') return
        function factorial(a) {
            return (a != 1) ? a * factorial(a - 1) : 1;
          }
        outputElement.innerHTML = factorial(a)
    }
    document.getElementById("btn_op_sign").onclick = function() { 
        if (a === '') return
        a = -a
        outputElement.innerHTML = a
    }
  
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
         outputElement.style.fontSize = '1.8rem'
    }


    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = (+a) % (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
     //  outputHistory.innerHTML += a 
     //   outputHistory.innerHTML += " "
        outputElement.innerHTML = a
        updateFontSize()
        
    }



    };