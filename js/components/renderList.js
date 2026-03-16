import getProductCard from './ProductCard.js';
import {getLiEl} from './components.js';

async function getProductList() {
    const productListsResponse = await fetch(
        './data/data.json', {
        method: 'GET'
    }
    );
    const productLists = await productListsResponse.json();
    return productLists;
}

async function renderList() {
    const productLists = await getProductList()
    const catalogListEl = document.querySelector('.catalog-list');
    catalogListEl.innerHTML = "";
    productLists.forEach((productData) => {
        const liEl = getLiEl('catalog-list__item');
        const productCardEl = getProductCard(productData);
        liEl.innerHTML = productCardEl;
        catalogListEl.append(liEl);
    })
    
}
export {
    getProductList,
    renderList,
}