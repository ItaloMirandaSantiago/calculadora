import Render from "./export/render.js"

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#history").addEventListener("click", ()=>{    
        Render()    
        document.querySelectorAll(".history")[0].style.display = "block"
    })
    document.querySelector("#exit").addEventListener("click", ()=> {
        document.querySelectorAll(".history")[0].style.display = "none"
    })
})