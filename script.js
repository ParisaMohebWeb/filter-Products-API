/* https://fakestoreapi.com/products */
const allProduct = document.querySelector('.product')
const loaderPro = document.querySelector('.loader')

function getProduct() {

    fetch("https://fakestoreapi.com/products")
        .then((res) => {
            if (res.ok) {
                return res.json()                
            }
            Promise.reject
        })

        .then((res) => {
            loaderPro.style.display = 'none'

            res.forEach((item) => {

                const newDiv = document.createElement("div")

                newDiv.innerHTML = `
                  <img src="${ item.image }" alt="">
                  <h3> ${item.title } </h3>
                  <span>${ item.price }</span>            `

                allProduct.append(newDiv)

            })

        })

        .catch((error)=>{
            loaderPro.style.display = 'block'

        })

}
getProduct()









