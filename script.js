let re = new XMLHttpRequest();
re.onload = () => {
    if (re.readyState === 4) {
        console.log("all is ok");
        if (re.status == 200) {
            let response = JSON.parse(re.responseText);
            let products = response.products;
            console.log(products);
            let productSection = document.querySelector(".product");
            productSection.innerHTML = "";
            products.map(product => {
                productSection.innerHTML += `
                <div class="card">
                    <img src="${product.thumbnail}" alt="">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p>Price: <span class="price">${product.price} $</span></p>
                </div>
                `;
            });
        }
    }
};

re.open("GET", "https://dummyjson.com/products", true);
re.send();

let productSection = document.querySelector(".product");
function getByCategory(category) {
    productSection.innerHTML = "";
    let re = new XMLHttpRequest();
    re.onload = () => {
        if (re.readyState === 4) {
            console.log("all is ok");
            if (re.status == 200) {
                let response = JSON.parse(re.responseText);
                let products = response.products;
                console.log(products);

                let productSection = document.querySelector(".product");

                products.map(product => {
                    productSection.innerHTML += `
                <div class="card">
                    <img src="${product.thumbnail}" alt="">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p>Price: <span class="price">${product.price} $</span></p>
                </div>
                `;
                });
            }
        }
    };

    re.open("GET", `https://dummyjson.com/products/category/${category}`, true);
    re.send();

}

function searchProducts() {
    let search = document.querySelector(".search").value;
    productSection.innerHTML = "";
    let re = new XMLHttpRequest();
    re.onload = () => {
        if (re.readyState === 4) {
            console.log("all is ok");
            if (re.status == 200) {
                let response = JSON.parse(re.responseText);
                let products = response.products.filter(product =>
                    product.title.includes(search) ||
                    product.description.includes(search)
                );
                console.log(products);

                products.map(product => {
                    productSection.innerHTML += `
                <div class="card">
                    <img src="${product.thumbnail}" alt="">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p>Price: <span class="price">${product.price} $</span></p>
                </div>
                `;
                });
            }
        }
    };

    re.open("GET", "https://dummyjson.com/products", true);
    re.send();
}
