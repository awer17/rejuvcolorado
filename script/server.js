
async function getSliderServis() {
            
    const file = '/json/services.json';
    let response = await fetch(file, {
        method: 'GET'
    });
    if(response.ok) {
        let result = await response.json();
        servisItemlist(result);
        
        ;
    } else {
        throw new Error(`!!!!!!!!!!! ${err}`)
    }
}

function servisItemlist(data){
    let wrapeerSlider = document.querySelector('.swiper-wrapper')
    wrapeerSlider.innerHTML = ''
    data.forEach(element => {
        wrapeerSlider.innerHTML += `<div class="swiper-slide _service_wpar _slide">
        <img src="${element.img}" alt="${element.title}">
        <p class="_title">${element.nameServes}</p>
        <span class="_line"></span>
        <p class="_subtitle">${element.title}</p>
</div>
`  

        console.log(element)
    });
    console.log(data[1])
}

getSliderServis()