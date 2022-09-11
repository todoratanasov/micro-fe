import faker from 'faker';

// here we're going to receive an ref to an html element in which we'll render our content of the entire products project
const mount = (el) => {
    let products = '';
    console.log('something')
    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
    
        products += `<div>${name}</div>`;
    }
     
    el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
    // assuming that we'll not gonna have this selector in the Container project and this will mean that we're
    // developing locally (only products project)
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}

export {mount};