/* https://fakestoreapi.com/products */
const allProduct = document.querySelector('.product')

function getProduct() {

    fetch("https://fakestoreapi.com/products")
        .then((res) => {
            return res.json()
            console.log(newDiv)

        })

        .then((res) => {

            res.forEach((item) => {

                const newDiv = document.createElement("div")
                
                newDiv.innerHTML = `
                  <img src="${ item.image }" alt="">
                  <h3> ${item.title } </h3>
                  <span>${ item.price }</span>            `

                allProduct.append(newDiv)

            })

        })

}
getProduct()









