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
</div>`



