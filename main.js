const containers = document.querySelector(".containers");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const containers2 = document.querySelector(".containers2");
const image = document.querySelector(".image");
const title = document.querySelector(".title");
const prices = document.querySelector(".prices");

const api = [
    iphone = {
        name:'iphone',
        image : src="https://images.priceoye.pk/apple-iphone-14-pakistan-priceoye-czome-500x500.webp",
        prices : "200000"
    },
    samsung = {
        name:'samsung',
        image : src="https://images.priceoye.pk/apple-iphone-15-pro-pakistan-priceoye-exopt-270x270.webp",
        prices : "25000"
    },
    oppo = {
        name:'oppo',
        image : src="https://images.priceoye.pk/apple-iphone-13-mini-pakistan-priceoye-ji8kn-270x270.webp",
        prices : "15000"
    },
    vivo = {
        name:'vivo',
        image : src="https://images.priceoye.pk/apple-iphone-xr-pakistan-priceoye-oklz0-270x270.webp",
        prices : "30000"
    },
    redmi = {
        name:'redmi',
        image : src="https://images.priceoye.pk/apple-iphone-xr-pakistan-priceoye-oklz0-270x270.webp",
        prices : "34000"
    },
]


const input12 = input.value
if (true) {
    btn.addEventListener("click" , () => {
        containers.classList.add("sum")
        image.classList.src = api.value.image
        title.src = api.title
     })
}
else{
    btn.addEventListener("click" , () => {
        alert("ENTER MOBILE NAME AND UN REQUT")
     })
}


