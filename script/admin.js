let date = document.querySelector('[data-year]')
date.textContent = new Date().getFullYear()

let products =
  JSON.parse(localStorage.getItem("products")) ||
  localStorage.setItem(
    "products",
    JSON.stringify([
      {
        id: "1",
        productType: "Cream",
        Price: 450,
        description: "Used day and night",
        image:
          " https://i.postimg.cc/zvbhjbnh/cream-stylized-product-opt-540x.webp",
      },
      {
        id: "2",
        productType: "Cleanser",
        Price: 550,
        description: "Used day and night",
        image: "https://i.postimg.cc/xC0qsszM/goji-berry-clenser-opt-900x.webp",
      },
      {
        id: "3",
        productType: "Vitamin C Serum",
        Price: 560,
        description: "Used day and night",
        image:
          "https://i.postimg.cc/3NbX9pCC/vitamin-c-serum-stylized-2-opt-900x.webp",
      },
      {
        id: "4",
        productType: "Deep Eye Therapy",
        Price: 680,
        description: "Used day and night",
        image:
          "https://i.postimg.cc/zvtQKHL7/eye-complex-stylized-optimized-900x.webp",
      },
      {
        id: "5",
        productType: "Toner",
        Price: 750,
        description: "Used day and night",
        image:
          "https://i.postimg.cc/3rgfvK3c/white-tea-toner-stylized-opt-720x-no5.jpg",
      },
      {
        id: "6",
        productType: "Fine SKN All in One",
        Price: 7750,
        description: "Used day and night",
        image: "https://i.postimg.cc/Z5r9q8vr/all-5.webp",
      },
    ])
  );

const fineWrapper = document.querySelector("[data-admin]");

function ViewProducts() {
  fineWrapper.innerHTML = " ";
  try {
    if (products) {
      products.forEach((product) =>{
        fineWrapper.innerHTML +=
                         `<div class="row"> <tr>
                         <th >${product.id}</th>
                            <td><img src="${product.image}" class="image w-25"</td>
                            <td>${product.productType}</td>
                            <td > ${product.Price}</td>
                        </tr>
                        </div>
                        `;
       
      });
    } else {
      fineWrapper.innerHTML += `<div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`;
    }
  } catch(e) {
    (error - message);
  }
}
ViewProducts();






























































