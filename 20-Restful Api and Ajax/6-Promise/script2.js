let myObj = {
    url: 'https://randomuser.me/api/?results=5'
}

let request = obj => {
    return new Promise((resolve, reject) => {
        // var XMLHttpRequest = require('xhr2');
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || 'GET', obj.url);

        if (xhr.headers) {
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key, xhr.headers[key]);
            });
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        }

        xhr.onerror = () => {
            reject(xhr.statusText);
        }

        xhr.send(obj.body);
    })
}

let buildHtml = (data) => {
    let users = JSON.parse(data);
    let html = "";
    users.results.forEach(user => {
        // console.log(user);
        html += `
        <div>
            <img src="${user.picture.medium}">
            <div>
                ${user.name.title} 
                ${user.name.first} 
                ${user.name.last}
            </div>
        </div>
        `;
    })

    document.querySelector('#users').innerHTML = html;

    return Promise.resolve("Html is loaded successfully");
}

request(myObj)
.then(buildHtml)
.then(msg => {
    console.log(msg);
})
.catch(error => {
    console.log(error);
})