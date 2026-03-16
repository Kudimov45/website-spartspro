function getLiEl(className) {
    const liEl = document.createElement('li');
    liEl.classList.add(className);
    return liEl;
}

export {
    getLiEl
}