import {Save} from "../export/saveItens.js"

export default function Verification() {
    const Show = document.querySelectorAll(".card")
    let verification = true

    for (let i = 0; i < result.value.length || i===0; i++) { 
        if (!result.value ||  (isNaN(result.value[i]) && result.value[i] !== "+" && result.value[i] !== "÷" && result.value[i] !== "-" )){
            verification = false
            alert(`o valor "${result.value[i]}" não é um número e este sistema não foi programado para resolver problemas que possuem caractéries.`)
            result.value = ''
        }
    }
    if (verification) {
     //   try{
            const res = eval(result.value.replace("÷", "/"))
            Show[0].style.display = "grid"
            Show[1].style.display = "grid"
            document.getElementById("visor").innerText = res
            document.getElementById("integeCont").innerText = result.value
            Save(res)
      //  }catch{
       //     alert("esta não é uma operação possivel")
      //  } 
    }else{
        Show[0].style.display = "none"
        Show[1].style.display = "none"
    }
}
