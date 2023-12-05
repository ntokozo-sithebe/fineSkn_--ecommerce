let date = document.querySelector('[data-year]')
date.textContent = new Date().getFullYear()


let cards = document.querySelector('[data-slide]').innerHTML=`
<div> 
<img src="https://i.postimg.cc/vBfnBykr/image1-ecomm.jpg" alt="image1" loading = "lazy" class = d-flex w-50 img-fluid >
</div>
<div>
<img src="https://i.postimg.cc/8CwTcCQM/no2-ecomm.jpg" alt="image3" loading = "lazy" class = d-flex w-50 img-fluid>
</div>
<div>
<img src="https://i.postimg.cc/XNxJgXfZ/no3-ecomm.jpg" alt="image3" loading = "lazy" class = d-flex w-50 img-fluid>
</div>



`

// <div id="carouselExample" class="carousel slide">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://i.postimg.cc/vBfnBykr/image1-ecomm.jpg" class="d-block w-100 img-fluid" loading = "lazy" alt="picAbout1">
//     </div>
//     <div class="carousel-item">
//       <img src="https://i.postimg.cc/13V4vn5j/no4-Ecomm.jpg" class="d-block w-50 img-fluid" loading = "lazy" alt="picAbout2">
//     </div>
//     <div class="carousel-item">
//       <img src="https://i.postimg.cc/8CwTcCQM/no2-ecomm.jpg" class="d-block w-50 img-fluid" loading = "lazy" alt="picAbout3">
//     </div>
//     <div class="carousel-item">
//       <img src="https://i.postimg.cc/XNxJgXfZ/no3-ecomm.jpg" class="d-block w-100 img-fluid" loading = "lazy" alt="picAbout4">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div> 