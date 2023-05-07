const servisesList = document.getElementById("services_list", true);
const pagination = document.querySelector(".pagination");
const selectServises = document.querySelector('#select_servises');
const servisesListLeft = document.querySelector("._left-items")
const descripcion = document.querySelector("._descripcion")
const slider = document.querySelector("._slider")
const titleServises = document.querySelector("._slider")

async function getSliderServis() {
    const file = './json/services.json';
    let response = await fetch(file, {
        method: 'GET'
    });
    if(response.ok) {
        let result = await response.json();
        servicesDescripcion(result);
        ;
    } else {
        throw new Error(`!!!!!!!!!!! ${err}`)
    }
}

function servicesDescripcion(data){
    data.forEach(element => {
        if(element.nameServes === serviseValue && serviseValue !== ''|| element.code === serviseValue){
            descripcion.innerHTML = '';
            descripcion.innerHTML = `<button  onclick="btnReturn()" id="return" class="btn_white">
            return
        </button>
        <h3>${element.nameServes}</h3>
        <div class="_wrapper">
            <p class="_main">${element.description}</p>
            <div class="_grafic">
                <img src="${element.img}" alt="${element.nameServes}">
                <div class="_shadow"></div>
            </div>    
        </div>
        <div class="_additional">
            ${element.superDescription}
        </div>
            `
        }
    });
}

let params = (new URL(document.location)).searchParams;


titleStartServises(params)

function titleStartServises(a){
    serviseValue = a.get('data')
    if (serviseValue !== null) {
        getSliderServis()
        classAdd();
    }
}

titleServises.addEventListener('click' , function(event){
    serviseValue = event.target.innerHTML;
    if(serviseValue !== '' && serviseValue.length < 30 ){
        getSliderServis()
        classAdd();    }
});

function classAdd (){
    descripcion.classList.add("_active");
    slider.classList.add("_disabled");
}

function btnReturn () {
    descripcion.classList.remove("_active");
    slider.classList.remove("_disabled");
    // window.location.href = "servises.html";    

}

servisesList.addEventListener('change' , function(event){
    selectServises.setAttribute("disabled","disabled");
    serviseValue = event.target.value
    console.log(event.target.value)
    getSliderServis()
    classAdd();
});


servisesListLeft.addEventListener('click',function(event){
    serviseValue = event.target.dataset.code;
    getSliderServis()
    classAdd();
})

