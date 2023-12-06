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


const fineWrapper = document.querySelector('[data-products]') 

function ViewProducts(){
    fineWrapper.innerHTML = "";
    try{

        if(products){
            products.forEach(product =>{
                fineWrapper.innerHTML +=`<div class="card d-flex justify-content-center" w-25>
                <img src="${product.image}" class="card-img-top" alt=${product.id}>
                <div class="card-body">
                  <h5 class="card-title">${product.productType}</h5>
                  <p class="card-text">${product.Price}.</p>
                  <button type='button' class="btn btn-primary" onclick='add2cart(${JSON.stringify(product)})' >Add to Cart</button>
                </div>
              </div>`
            })
        } else{
            fineWrapper.innerHTML += `<div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`           // add spinner
    }
    
        
    } catch{
        (error-message)
    }

}
ViewProducts();


let searchInput = document.querySelector('[data-input]')
searchInput.addEventListener('keyup', ()=>{
    try{
        let searchResults = products.filter(prod=> {
            return prod.productType.toLowerCase().includes(searchInput.value.toLowerCase()) 
        })

        console.log(searchResults);
        if(searchResults.length > 0){
            fineWrapper.innerHTML = ""
            searchResults.forEach(item =>{
                fineWrapper.innerHTML +=
                `<div class="card" w-25>
                <img src="${item.image}" class="card-img-top" alt=${item.id}>
                <div class="card-body">
                  <h5 class="card-title">${item.productType}</h5>
                  <p class="card-text">${item.price}.</p>
                  <button href="#" data-addTocart class="btn btn-primary">Add to Cart</button>
                </div>
              </div> `
            })
        }else { 
            fineWrapper.innerHTML += `<div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`
            
            // mayChange
        }
    }catch(e){
        fineWrapper.innerHTML = "Please try again later"
    }
})

/



 [ [{
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

]


 
function displayPrice(list){
priceWrapper.innerHTML= '';
list.forEach(item =>{
    priceWrapper.innerHTML += ` 
    <div>
                <div class="card-body">
                  <h5 class="card-title">${item.productType}</h5>
                  <p class="card-text">${item.Price}.</p>
                </div>
              </div> 
    `

} )
}
let priceWrapper = document.querySelector('[data-products]')

let btnSort = document.querySelector('[data-sort]')

btnSort.addEventListener('click',()=>{
   try{
    let sortedItem = products.sort((arg1, arg2)=>{
        return arg1.Price - arg2.Price
    })
    displayPrice(sortedItem)
   }
   catch(e){
    console.log(e)
    priceWrapper.innerHTML = 'No Fine SKN price Found'
   }
}) 


 
 // for checkout need this to target !
let cart = []
function add2cart(item){
    console.log();
    if(cart)   // add the cart items into the array
    cart.push(item)
localStorage.setItem('cart', JSON.stringify(cart))
}



