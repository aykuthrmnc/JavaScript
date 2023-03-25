// Storage Controller
const StorageController = (function () {


    return {
        storeProduct: function (product) {
            let products;

            if (localStorage.getItem('products') === null) {
                products = [];
                products.push(product);
            } else {
                products = JSON.parse(localStorage.getItem('products'));
                products.push(product);
            }

            localStorage.setItem('products', JSON.stringify(products));
        },

        getProducts: function () {
            let products;

            if (localStorage.getItem('products') === null) {
                products = [];
            } else {
                products = JSON.parse(localStorage.getItem('products'));
            }

            return products;
        },

        updateProduct: function (product) {
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach(function (prd, index) {
                if (prd.id === product.id) {
                    products.splice(index, 1, product);
                }
            });

            localStorage.setItem('products', JSON.stringify(products));
        },

        deleteProduct: function (id) {
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach(function (prd, index) {
                if (prd.id === id) {
                    products.splice(index, 1);
                }
            });

            localStorage.setItem('products', JSON.stringify(products));
        }
    }
})();

// Product Controller

const ProductController = (function () {

    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: StorageController.getProducts(),
        selectedProduct: null,
        totalPrice: 0
    }

    return {
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        addProduct: function (name, price) {
            let id;
            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            // data.totalPrice += newProduct.price; // get Total 2. Yontem
            return newProduct;
        },

        getTotal: function () {
            let total = 0;

            data.products.forEach(function (product) {
                total += product.price;
            });

            data.totalPrice = total;
            return data.totalPrice;
        },

        getProductById: function (id) {
            let product = null;

            data.products.forEach(function (prd) {
                if (prd.id == id) {
                    product = prd;
                }
            })

            return product;
        },

        setCurrentProduct: function (product) {
            data.selectedProduct = product;
        },

        getCurrentProduct: function () {
            return data.selectedProduct;
        },

        updateProduct: function (name, price) {
            let product = null;

            data.products.forEach(function (prd) {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = name;
                    prd.price = parseFloat(price);
                    product = prd;
                }
            });

            return product;
        },

        deleteProduct: function (product) {
            data.products.forEach(function (prd, index) {
                if (prd.id == product.id) {
                    data.products.splice(index, 1);
                }
            });
        }
    }

})();

// UI Controller

const UIController = (function () {

    const Selectors = {
        productList: '#item-list',
        productListItems: '#item-list tr',
        addButton: '.addBtn',
        updateButton: '.updateBtn',
        deleteButton: '.deleteBtn',
        cancelButton: '.cancelBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totalTL: '#totalTL',
        totalDolar: '#totalDolar',
        productTotal: '#productTotal'
    }

    return {
        createProductList: function (products) {
            let html = '';

            products.forEach(product => {
                html += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price} $</td>
                    <td class="text-end"><i class="far fa-edit edit-product"></i></td>
                </tr>
                `;
            })

            document.querySelector(Selectors.productList).innerHTML = html;
        },

        getSelectors: function () {
            return Selectors;
        },

        addProduct: function (product) {
            document.querySelector(Selectors.productCard).style.display = 'block';
            document.querySelector(Selectors.productTotal).style.display = 'block';

            var item = `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price} $</td>
                    <td class="text-end"><i class="far fa-edit edit-product"></i></td>
                </tr>
            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },

        clearInputs: function () {
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },

        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = 'none';
            // document.querySelector(Selectors.productTotal).style.display = 'none';
        },

        showTotal: function (total) {
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total * 15.5;
        },

        addProductToForm: function () {
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },

        addingState: function () {
            UIController.clearWarnings();
            UIController.clearInputs();
            document.querySelector(Selectors.addButton).style.display = 'inline';
            document.querySelector(Selectors.updateButton).style.display = 'none';
            document.querySelector(Selectors.deleteButton).style.display = 'none';
            document.querySelector(Selectors.cancelButton).style.display = 'none';
        },

        editState: function (tr) {

            const parent = tr.parentNode;

            // 1. Yontem
            // for (const i of parent.children) {
            //     i.classList.remove('bg-warning');
            // }

            // 2. Yontem
            // for (let i = 0; i < parent.children.length; i++) {
            //     parent.children[i].classList.remove('bg-warning');
            // }

            // 3. Yontem
            UIController.clearWarnings();

            tr.classList.add('bg-warning');
            document.querySelector(Selectors.addButton).style.display = 'none';
            document.querySelector(Selectors.updateButton).style.display = 'inline';
            document.querySelector(Selectors.deleteButton).style.display = 'inline';
            document.querySelector(Selectors.cancelButton).style.display = 'inline';
        },

        updateProduct: function (prd) {
            let updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function (item) {
                if (item.classList.contains('bg-warning')) {
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price + ' $';
                    updatedItem = item;
                }
            })

            return updatedItem;
        },

        clearWarnings: function () {
            const items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function (item) {
                if (item.classList.contains('bg-warning')) {
                    item.classList.remove('bg-warning');
                }
            });
        },

        deleteProduct: function () {
            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function (item) {
                if (item.classList.contains('bg-warning')) {
                    item.remove();
                }
            })
        }
    }

})();

// App Controller

const App = (function (ProductCtrl, UICtrl, StorageCtrl) {

    const UISelectors = UIController.getSelectors();

    // Load Event Listeners
    const loadEventListeners = function () {

        // add product event
        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);

        // edit product click
        document.querySelector(UISelectors.productList).addEventListener('click', productEditClick);

        // edit product submit
        document.querySelector(UISelectors.updateButton).addEventListener('click', editProductSubmit);

        // cancel button click
        document.querySelector(UISelectors.cancelButton).addEventListener('click', cancelUpdate);

        // delete button click
        document.querySelector(UISelectors.deleteButton).addEventListener('click', deleteProductSubmit);

    }

    const productAddSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            // add product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // add to item list
            UICtrl.addProduct(newProduct);

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // clear inputs
            UICtrl.clearInputs();

            // add product to local storage
            StorageCtrl.storeProduct(newProduct);
        }

        e.preventDefault();
    }

    const productEditClick = function (e) {

        if (e.target.classList.contains('edit-product')) {
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            // get selected product
            const product = ProductCtrl.getProductById(id);

            // set current product
            ProductCtrl.setCurrentProduct(product);

            // add product to UI
            UICtrl.addProductToForm();

            UICtrl.editState(e.target.parentNode.parentNode);
        }


        e.preventDefault();
    }

    const editProductSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {

            // update product
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

            // update UI
            let item = UICtrl.updateProduct(updatedProduct);

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            UICtrl.addingState();

            // update storage
            StorageCtrl.updateProduct(updatedProduct);
        }

        e.preventDefault();
    }

    const cancelUpdate = function (e) {

        UICtrl.addingState();
        UICtrl.clearWarnings();

        e.preventDefault();
    }

    const deleteProductSubmit = function (e) {

        // get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        // delete product
        ProductCtrl.deleteProduct(selectedProduct);

        // delete UI
        UICtrl.deleteProduct(selectedProduct);

        // get total
        const total = ProductCtrl.getTotal();

        // show total
        UICtrl.showTotal(total);

        UICtrl.addingState();

        if (total == 0) {
            UICtrl.hideCard();
        }

        // delete from local storage
        StorageCtrl.deleteProduct(selectedProduct.id);

        e.preventDefault();
    }

    return {
        init: function () {
            console.log('starting app...');

            UICtrl.addingState();

            const products = ProductCtrl.getProducts();

            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            loadEventListeners();
        }
    }

})(ProductController, UIController, StorageController);

App.init();