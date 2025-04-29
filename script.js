/* https://fakestoreapi.com/products */


const newDiv = document.createElement('div')
console.log(newDiv)

newDiv.innerHTML = `

    <img src="img/1.jpg" alt="">
    <p>Lorem ipsum dolor sit amet consectetu</p>
    <span>$ 99.55</span>       

`
const productAll = document.querySelector('.product')

productAll.append(newDiv)








