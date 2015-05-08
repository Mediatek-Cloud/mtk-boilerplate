import Debug from 'debug';
import App from '../../app';

const mountNode = document.getElementById('mountNode');

Debug.enable('myApp*');

const app = new App();

app.renderToDOM(mountNode);
