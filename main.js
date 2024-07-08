document.addEventListener('DOMContentLoaded',function(){
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.buttons div');
    let currentInput='';
    let result='';

    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            const value = button.textContent;

            if (value === "CE") {
                currentInput = "";
                result = "";
              } else if (value === "=") {
                try {
                  result = eval(currentInput);
                } catch {
                  result = "Error";
                }
                currentInput = result;
              } else {
                currentInput += value;
              }
        
              screen.textContent = currentInput || result || "0";
        })
    })
})