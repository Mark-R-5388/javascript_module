import {clients,programs} from './utils/file1.js';
import {showClients,showPrograms} from './utils/file2.js'
import get from './utils/element.js'

const container = get('.container')
const btn1 = get('.btn-1');
const btn2 = get('.btn-2');


btn1.addEventListener('click', () => {
    container.innerHTML = showClients(clients);
})

btn2.addEventListener('click', () => {
    container.innerHTML = showPrograms(programs);
})