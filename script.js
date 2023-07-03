let kgRef = document.getElementById("kg")
let pdRef = document.getElementById("pd")
let ozRef = document.getElementById("oz")

let convertFromKg = ()=> {
    let kg = kgRef.value;

    pdRef.value = (kg * 2.205).toFixed(2)
    ozRef.value = (kg * 35.274).toFixed(2)
}

let convertFromPd = ()=> {
    let pd = pdRef.value;

    kgRef.value = (pd / 2.205).toFixed(2)
    ozRef.value = (pd * 16).toFixed(2)

}

let convertFromOz = ()=> {
    let oz = ozRef.value;

    kgRef.value = (oz / 35.274).toFixed(2)
    pdRef.value = (oz / 16).toFixed(2)
}

kgRef.addEventListener("input", convertFromKg)
pdRef.addEventListener("input", convertFromPd)
ozRef.addEventListener("input", convertFromOz)

//window.addEventListener("load" , convertFromKg)