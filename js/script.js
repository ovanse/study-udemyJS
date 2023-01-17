'use strict';

const data = [
    {
        id: 'box',
        tag: 'div',
    },
    {
        id: 'fff',
        tag: 'nav',
    },
    {
        id: 'circle',
        tag: '',
    },
];

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (blockObj.id === '') throw new Error(`В данных под номером ${i + 1} нет id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    if (e.name === 'Error') {
        console.error(e.name);
        console.log(e.message);
        console.log(e.stack);
    } else throw e;
}

const err = new SyntaxError('testtesttest');
console.log(err.name);
console.log(err.message);
console.log(err.stack);
