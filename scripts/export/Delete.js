import Render from "../export/render.js"

export default ()=>{
    document.querySelectorAll(".delete").forEach(element => {
        element.addEventListener("click", (event)=>{
            Delete(event.currentTarget)
        })
    });
    function Delete(item) {
        const deleteitem = item.parentNode.parentNode.id
        const array = JSON.parse(localStorage.getItem("new"))
        array.splice(deleteitem, 1)
        localStorage.setItem("new", JSON.stringify(array))
        Render()
    }
}