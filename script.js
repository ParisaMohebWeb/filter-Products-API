/* https://fakestoreapi.com/products */
const allProduct = document.querySelector('.product')
const loaderPro = document.querySelector('.loader')
const input = document.querySelector('header>input')

function getProduct() {

    fetch("https://fakestoreapi.com/products")
        .then((res) => {
            if (res.ok) {
                return res.json()                
            }
            Promise.reject()
        })

        .then((res) => {
            loaderPro.style.display = 'none'

            addToDom(res)
          
            userSearch(res)
        })

        .catch((error)=>{
            loaderPro.style.display = 'block'

        })

}
getProduct()

function addToDom(list) {
    list.map((item) => {

        const newDiv = document.createElement("div")
        newDiv.innerHTML = `
          <img src="${ item.image }" alt="">
          <h3> ${item.title } </h3>
          <span>${ item.price }</span> `
        allProduct.append(newDiv)
    })
}

function userSearch(arrayProduct) {

    input.addEventListener('input',()=>{
       let value = input.value.trim().toLowerCase()

      let filterProduct = arrayProduct.filter((item)=>{

        if(item.title.toLowerCase().includes(value) )return item
       })

       allProduct.innerHTML=''
       addToDom(filterProduct)
    })
}








