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
                            <td>${product.id}</td>
                            <td><img src="${product.image}" class="image w-25"</td>
                            <td>${product.productType}</td>
                            <td> ${product.Price}</td>
                            <td><button type="button" class="updatebtn rounded-3 bg-info-emphasis p-3 m-1" onclick='addNewProduct' data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                          </svg>Update</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <form>
                                      <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">id</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                      </div>
                                      <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Product Type</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                      </div>
                                      <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Price</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                      </div>
                                      <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Descsription:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                      </div>
                                    </form>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Add Product</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button class="deletebtn rounded-3 bg-info p-3 m-1" onclick='remove(id)'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                          </svg>Delete</button></td>
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

const btnUpdate = document.getElementsByClassName('#updatebtn')




const btnDelete = document.getElementById('deletebtn')

function remove(id){
  let removeProduct =  JSON.parse(localStorage.getItem('products')) || [];

  products.splice(id, 1);
  JSON.parse(localStorage.setItem('products', item))
}






function addNewProduct(){
  let newItem = []

  newItem.push(product).
  
  JSON.parse(localStorage.setItem('product', JSON.parse))

}




















































