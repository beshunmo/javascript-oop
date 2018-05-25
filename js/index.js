import Grid from './grid.js';
import Game from './game.js';

new Game({
    element: document.querySelector('#game'),
    grid: new Grid({
        element: document.querySelector('#grid'),
        size: 36
    })
});