import Delete from "../export/Delete.js"

export default function Render(){
    const render = JSON.parse(localStorage.getItem("new"))
    if (!localStorage.getItem("new")) {
        
        document.querySelectorAll(".obj")[0].innerHTML = `
            <div>
                <div class="re">
                <p class="date"></p>
                </div>
                <div class="pCont">
                    <p>Suas contas aparecerão aqui! Não se preocupe que elas serão salvas automáticamente.</p>
                </div>
            </div>
        `
    }else{
        document.querySelectorAll(".obj")[0].innerHTML = ``
        for(let i = 0; i < render.length; i++){
            document.querySelectorAll(".obj")[0].innerHTML += `
            <div id="${[i]}">
                <div class="re">
                <p class="date">${render[i].date}</p>
                <Button class="delete">excluír</Button>
                </div>
                <div class="pCont">
                    <p>${render[i].cont}: ${render[i].resu}</p>
                </div>
            </div>`
        }
        Delete()
    }
}