// like this we can decide when we want to display products project
import {mount as productsMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';

productsMount(document.querySelector('#dev-products'));
cartMount(document.querySelector('#cart-dev'));
console.log('container')
