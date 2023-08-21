import DateFunction from "../export/DateFunction.js"

export function Save(res) {
    const date = DateFunction()
    const OBJ = {cont: result.value, resu: res, date: date}
    if (!JSON.parse(localStorage.getItem("new"))) {
        console.log("rodo")
        localStorage.setItem("new", JSON.stringify([OBJ]))
    }else{
        const localGetNew = JSON.parse(localStorage.getItem("new"))
        localGetNew.push(OBJ)
        localStorage.setItem("new", JSON.stringify(localGetNew))
    }
}