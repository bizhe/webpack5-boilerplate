import example from './images/example.jpg';
import './styles/main.scss';

class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

const p = document.createElement('p')
p.textContent = `I like ${myGame.game}.`


const heading = document.createElement('h1')
heading.textContent = 'Webpack 5!'

const root = document.querySelector('#root')
root.append(heading)

