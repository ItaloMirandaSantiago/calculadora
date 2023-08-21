import Verification from "./export/Verification.js"

document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".but")
    const input = document.getElementById("result")
    buttons.forEach(button => {
        
        button.addEventListener("click", ()=>{

            input.value += button.value
            input.focus()

        })
    })
    const buttonSpecil = document.querySelectorAll(".special")
    buttonSpecil.forEach(button => {
        
        button.addEventListener("click", ()=>{
            if (button.id === "back") {
                input.value = ""
            }else if (button.id === "enter"){
                Verification()
            }
            
            input.focus()

        })
    })
    
})

