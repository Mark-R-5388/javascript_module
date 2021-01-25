function getElement (selector) {
    const element = document.querySelector(selector);
    if(element) {
        return element
    } else {
        throw Error ('did not select an element')
    }
}

export default getElement;