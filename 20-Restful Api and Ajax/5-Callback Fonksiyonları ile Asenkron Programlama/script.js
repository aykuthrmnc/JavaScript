// Callback

// var products = [
//     { id: 1, name: 'Samsung S8', price: 3000 },
//     { id: 2, name: 'Samsung S7', price: 2000 },
//     { id: 3, name: 'Samsung S6', price: 1000 }
// ];

// function addProduct(product, callback) {
//     setTimeout(() => {
//         products.push(product);
//         callback();
//     }, 2000);
// }

// function getProducts() {
//     setTimeout(() => {
//         products.forEach(p => {
//             console.log(p.name);
//         });
//     }, 1000);
// }

// addProduct({ id: 4, name: 'Samsung S5', price: 500 }, getProducts);

// --------------------------------------------------------------------

// var products = [
//     { id: 1, name: 'Samsung S8', price: 3000 },
//     { id: 2, name: 'Samsung S7', price: 2000 },
//     { id: 3, name: 'Samsung S6', price: 1000 }
// ];

// let added = true;

// function addProduct(product, callback) {
//     if (added) {
//         setTimeout(() => {
//             products.push(product);
//             callback(null, product);
//         }, 2000);
//     } else {
//         callback('500', product);
//     }

// }

// function getProducts() {
//     setTimeout(() => {
//         products.forEach(p => {
//             console.log(p.name);
//         });
//     }, 1000);
// }

// addProduct({ id: 4, name: 'Samsung S5', price: 500 }, function (err, data) {
//     if (err) {
//         console.error('hata : ' + err);
//     } else {
//         console.log(data);
//     }
// });

// --------------------------------------------------------------------
// Promise

var products = [
    { id: 1, name: 'Samsung S8', price: 3000 },
    { id: 2, name: 'Samsung S7', price: 2000 },
    { id: 3, name: 'Samsung S6', price: 1000 }
];

function addProduct(product, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            products.push(product);
            let added = true;

            if (added) {
                resolve();
            } else {
                reject('Hata : 500');
            }
        }, 2000);
    })
}

function getProducts() {
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        });
    }, 1000);
}

addProduct({ id: 4, name: 'Samsung S5', price: 500 })
.then(getProducts)
.catch(function (err) { console.log(err); });