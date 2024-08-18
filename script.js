let product = [
  {
    name: "White Chair",
    headline: "Soft Like Cloud...",
    price: "1500rs",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "White Stool",
    headline: "Lakdi Ka Stool.",
    price: "1500rs",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "White Stool",
    headline: "Dadaji Ki Chair",
    price: "1500rs",
    image:
      "https://images.unsplash.com/photo-1601392740426-907c7b028119?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let Popular = [
  {
    name: "White Chair",
    headline: "Soft Like Cloud...",
    price: "1500rs",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "White Stool",
    headline: "Lakdi Ka Stool.",
    price: "1500rs",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "White Stool",
    headline: "Dadaji Ki Chair",
    price: "1500rs",
    image:
      "https://images.unsplash.com/photo-1601392740426-907c7b028119?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showProduct() {
  let clutter = "";
  product.forEach(function (obj, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${obj.image}" alt="Image" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${obj.headline}</h3>
                            <h4 class="font-semibold mt-2">${obj.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                                data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

function showPopular() {
  let clutter = "";
  Popular.forEach(function (obj) {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${obj.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${obj.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${obj.price}</h4>
                    </div>
                </div> `;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

let cart = [];
function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", (dets, index) => {
      if (dets.target.classList.contains("add")) {
        cart.push(product[dets.target.dataset.index]);
      }
    });
}

var val = 0;

function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    let clutter = "";
    cart.forEach(function (products, index) {
      clutter += `
      <div class="flex gap-2 bg-white p-2 rounded-lg">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
      <img src="${products.image}"/>
      </div>
      <div>
      <h3 class="font-semibold">${products.name}</h3>
      <h5 class"text-sm font-semibold opacity-80">${products.price}</h5>
      </div>
      </div>
    `;
      document.querySelector(".cartexpnd").innerHTML = clutter;
      val = 1
    });
  });
}

showCart();
addToCart();
showPopular();
showProduct();
