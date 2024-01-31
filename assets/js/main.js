const imgBox = document.getElementById("img-box")
const blueBtn = document.getElementById("blue-btn")
const greenBtn = document.getElementById("green-btn")
const buyBtn = document.getElementById("buy-btn")

const data = {
    blueimg: "assets/images/blue.jpg",
    greenimg: "assets/images/green.jpg",
};

blueBtn.addEventListener("click", () => {
    imgBox.innerHTML = `
    <img 
    src="${data.blueimg}" 
    class="card-img-top" 
    alt="..."/>
    `;
    buyBtn.classList.add("btnBlue")
    buyBtn.classList.remove("btnGreen")
});

greenBtn.addEventListener("click", () => {
    imgBox.innerHTML = `
    <img 
    src="${data.greenimg}" 
    class="card-img-top" 
    alt="..."/>
    `;
    buyBtn.classList.add("btnGreen")
    buyBtn.classList.remove("btnBlue")
});