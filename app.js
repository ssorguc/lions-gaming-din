/*Global var*/
let brojacKlikova = 0;
let currentProduct = null;
let laptops = [
  {
    id: 1,
    name: "Z series 1 Pro",
    price: 6.299,
    description: "RAM: 32 GB LPDDR5 GPU: RTX 4080 CPU: I7 1255U",
    imageUrl: "assets/listpicturesproizvodi/listlaptoppic.png"
  },
  {
    id: 2,
    name: "Z series 1",
    price: 4.599,
    description: "RAM: 16 GB LPDDR5 GPU: RTX 4070 CPU: I5 2350U ",
    imageUrl: "assets/listpicturesproizvodi/listlaptoppic2.png"
  },
  {
    id: 3,
    name: "Z series 1 X",
    price: 3.899,
    description: "RAM: 16 GB LPDDR5 GPU: RTX 4060 CPU: I5 2350U ",
    imageUrl: "assets/listpicturesproizvodi/listlaptoppic3.png"
  },
];

/*Funkcije*/
function botunCart() {
  brojacKlikova++;
  console.log(brojacKlikova);
}

// ova funkcija ce dodati onoliko laptop kartica koliko se nalazi u nizu
//moramo implementirati da mjenja naslov, desc
function loadLaptops() {
  laptops.forEach((laptop) => {
    document.getElementById("laptops-container").innerHTML += `<div class="card">
  <img src="${laptop.imageUrl}" alt="laptop" style="width:100%">
    <div class ="cardtext">
   <h1>${laptop.name}</h1>
  <p class="price">${laptop.price}</p>
  <p>${laptop.description}</p>
    </div>
    <button class="products-nav glow-link" onclick="openLaptop(${laptop.id})">Purchase ></button>
</div>`;
  });
}


function openLaptop(id) {
  currentProduct = laptops.find((laptop) => laptop.id === id);
  sessionStorage.setItem("price", currentProduct.price);
  sessionStorage.setItem("name", currentProduct.name);
  sessionStorage.setItem("description", currentProduct.description);
  sessionStorage.setItem("imageUrl", currentProduct.imageUrl);
  window.open("productDetails.html", "_self");
}

function loadProductDetails() {
    document.getElementById("product-name").innerHTML = sessionStorage.getItem("name");
  document.getElementById("Product-image").innerHMTL = sessionStorage.getItem("imageUrl");
}