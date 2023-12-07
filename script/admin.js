let date = document.querySelector('[data-year]')
date.textContent = new Date().getFullYear()

let fineWrapper = document.querySelector('[data-tableAdmin]')

let products = JSON.parse(localStorage.getItem('products')) ||
localStorage.setItem('products', JSON.stringify(

 [{
            id : "1",
            productType: "Cream",
            Price: 450,
            description: "Used day and night",
            image: " https://i.postimg.cc/zvbhjbnh/cream-stylized-product-opt-540x.webp",

        },{
            id : "2",
            productType: "Cleanser",
            Price: 550,
            description: "Used day and night",
            image:"https://i.postimg.cc/xC0qsszM/goji-berry-clenser-opt-900x.webp" ,

        },{
             id : "3",
             productType: "Vitamin C Serum",
             Price: 560,
             description: "Used day and night",
             image:"https://i.postimg.cc/3NbX9pCC/vitamin-c-serum-stylized-2-opt-900x.webp" ,

        },{
            id : "4",
            productType: "Deep Eye Therapy",
            Price: 680,
            description: "Used day and night",
            image: "https://i.postimg.cc/zvtQKHL7/eye-complex-stylized-optimized-900x.webp",
    
        },{
            id : "5",
            productType: "Toner",
            Price: 750 ,
            description: "Used day and night",
            image:"https://i.postimg.cc/3rgfvK3c/white-tea-toner-stylized-opt-720x-no5.jpg" 
    
        },{
            id : "6",
            productType: "Fine SKN All in One",
            Price: 7750,
            description: "Used day and night",
            image:"https://i.postimg.cc/Z5r9q8vr/all-5.webp" ,
    
        }]

))



function ViewProducts(){
    fineWrapper.innerHTML = "";
    try{

        if(products){
            products.forEach(product =>{
                fineWrapper.innerHTML +=`
                <tr>
                  <th scope="row"><img src="${product.image}" alt="prod1" class = "img-fluid w-25"></th>
                  <td>${product.productType}</td>
                  <td>${product.price}</td>
                  <td><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  data-bs-whatever="@fat">add</button>
  
  
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">New Product</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <form>
                                  <div class="mb-3">
                                      <label for="recipient-name" class="col-form-label">Image:</label>
                                      <input type="text" class="form-control" id="recipient-name">
                                  </div>
                                  <div class="mb-3">
                                      <label for="message-text" class="col-form-label">Product Type</label>
                                      <textarea class="form-control" id="message-text"></textarea>
                                  </div>
                                  <div class="mb-3">
                                      <label for="message-text" class="col-form-label">Price:</label>
                                      <textarea class="form-control" id="message-text"></textarea>
                                  </div>
                              </form>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary" onclick="add2cart(${JSON.stringify(product)})">Add New item</button>
                          </div>
                      </div>Add</button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                  </svg>Delete</button></td>  `
            })
        } else{
            fineWrapper.innerHTML += `<div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`           // spinner
    }
    
        
    } catch{
        (error-message)
    }

}
ViewProducts();
