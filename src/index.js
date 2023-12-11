/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

function isStandardElement(element) {
    return element instanceof HTMLElement && !(element instanceof HTMLUnknownElement);
}
function createDomElement(tagName, classNames = [], content = null, attributes = {}) {
    const element = document.createElement(tagName);

    if(!isStandardElement(element)) {
        console.warn(`${tagName} is not a standard element tag`);
    }
    element.classList.add(...classNames);
    element.textContent = content;

    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    return element;
}


