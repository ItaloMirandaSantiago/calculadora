import Verification from "./export/Verification.js"

document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById("result")
    
    result.addEventListener("keyup", function(event){
        if (event.key === "Enter") {
                Verification(result)
        }
    })
})
