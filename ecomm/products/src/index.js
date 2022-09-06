import faker from 'faker';

let products = '';
console.log('something')
for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;