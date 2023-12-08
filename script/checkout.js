let date = document.querySelector("[data-year]");
date.textContent = new Date().getFullYear();

const tableDisplay = document.querySelector("[data-checkout]");
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];      // if theres nothing in the cart -- empty array

function ViewProducts() {
  tableDisplay.innerHTML = "";
  try {
    let shoppingItems = Object.groupBy(cartItems, (item) => item.id); // grouping the objects into an array
    for (let key in shoppingItems) {                           //the shooping items will display the multiple objects/items added to cart
      tableDisplay.innerHTML += ` 
      <tr>
          <th scope="row">${shoppingItems[key][0].id}</th>     
          <td>
          <img src="${shoppingItems[key][0].image}" 
          class="img-fluid w-25" alt="${shoppingItems[key][0].productType}">
          </td>
          <td>${shoppingItems[key].length}</td>
          <td>R${shoppingItems[key][0].Price}</td>
          <td>R${eval(
            `${shoppingItems[key][0].Price} * ${shoppingItems[key].length}`
          )} 
          </td>
         </tr>
          `;
    }          
    //the 0 indicates the index without duplicating the arrays


// create a variable that displays the amount 



    // if (cartItems) {
    //   cartItems.forEach((product) => {
    //     tableDisplay.innerHTML +=
    //     ` <tr>
    //            <th scope="row">${product.id}</th>
    //            <td>${product.productType}</td>
    //            <td>${product.price}</td>
    //            <td>Action</td>
    //      </tr>
    //       `;
    //   });
    // } else {
    //   tableDisplay.innerHTML += `<div class="d-flex justify-content-center">
    //         <div class="spinner-border" role="status">
    //           <span class="visually-hidden">Loading...</span>
    //         </div>
    //       </div>`; // add spinner
    // }
  } catch (e) {
    // error - message;
  }
}
ViewProducts();
