let date = document.querySelector('[data-year]')
date.textContent = new Date().getFullYear()


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
            Price: 750,
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


let fineWrapper = document.querySelector('[data-products]') 

function ViewProducts(){
    fineWrapper.innerHTML = "";
    try{

        if(products){
            products.forEach(product =>{
                fineWrapper.innerHTML +=`<div class="card d-flex justify-content-center" w-25>
                <img src="${product.image}" class="card-img-top" alt=${product.id}>
                <div class="card-body">
                  <h5 class="card-title">${product.productType}</h5>
                  <p class="card-text">${product.description}.</p>
                  <button href="#" class="btn btn-primary">Add to Cart</button>
                </div>
              </div>`
            })
        } else{
            fineWrapper.innerHTML = "No products"           // add spinner
    }
    
        
    } catch{
        (error-message)
    }

}
ViewProducts();


let Search = document.querySelector('[data-input]')
Search.addEventListener('keyup', ()=>{
    try{
        let SearchItem = products.filter(prod=> {
            return prod.description.toLowerCase().includes(Search.value.toLowerCase())
        })
        if(SearchItem){
            fineWrapper.innerHTML = ""
            SearchItem.forEach(item =>{
                fineWrapper.innerHTML +=
                `<div class="card" w-25>
                <img src="${item.image}" class="card-img-top" alt=${item.id}>
                <div class="card-body">
                  <h5 class="card-title">${item.productType}</h5>
                  <p class="card-text">${item.description}.</p>
                  <button href="#" class="btn btn-primary">Add to Cart</button>
                </div>
              </div> `
            })
        }else { 
            fineWrapper.innerHTML = `<div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`
            
            
        }
    }catch(e){
        (e.message)
    }
})

let btnSort = document.querySelector('[data-search]')





















// let  = document.querySelector('[data-products]').innerHTML =`
// <div class="card" style="width: 18rem;">
//   <img src="https://i.postimg.cc/zvbhjbnh/cream-stylized-product-opt-540x.webp" loading = "lazy" class = d-flex w-50 img-fluid class="card-img-top" alt="product1">
//   <div class="card-body">
//     <h5 class="card-title">Cream</h5>
//     <p class="card-text">infused with natural iingredients</p>
//     <a href="#" class="btn btn-primary"> Add to cart</a>
//   </div>
// </div>
// <div class="card" style="width: 18rem;">
//   <img src="https://i.postimg.cc/3rgfvK3c/white-tea-toner-stylized-opt-720x-no5.jpg" loading = "lazy" class = d-flex w-50 img-fluid
//   class="card-img-top" alt="product2">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Add to cart</a>
//   </div>
// </div> 
// <div class="card" style="width: 18rem;">
//   <img src="https://i.postimg.cc/zvtQKHL7/eye-complex-stylized-optimized-900x.webp" loading = "lazy" class = d-flex w-50 img-fluid class="card-img-top" alt="product3">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some qu0ick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Add to cart</a>
//   </div>
// </div> 
// <div class="card" style="width: 18rem;">
//   <img src="https://i.postimg.cc/xC0qsszM/goji-berry-clenser-opt-900x.webp" loading = "lazy" class ="d-flex w-50 img-fluid">
//    class="card-img-top" alt="product4">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Add to cart</a>
//   </div>
// </div> 
// <div class="card" style="width: 18rem;">
//   <img src="https://i.postimg.cc/3NbX9pCC/vitamin-c-serum-stylized-2-opt-900x.webp" loading = "lazy" class ="d-flex w-50 img-fluid">
//  class="card-img-top" alt="product5">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Add to cart</a>
//   </div>
// </div> 
// <div class="card" style="width: 18rem;">
//   <img src="https://i.postimg.cc/Z5r9q8vr/all-5.webp" alt="product5" loading = "lazy" class = d-flex w-50 img-fluid class="card-img-top" alt="picture6">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Add to cart</a>
//   </div>
// </div> 
// `
