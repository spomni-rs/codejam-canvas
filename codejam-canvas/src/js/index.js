import style from '../scss/index.scss';
import {MDCTopAppBar} from '@material/top-app-bar';
import Workspace from './lib/workspace';

class App {
  constructor() {

    this.topAppBar = new MDCTopAppBar(
        document.querySelector(`.mdc-top-app-bar`)
    );

    this.workspace = new Workspace(
        document.querySelector(`.workspace`)
    );

    this.style = style;
  }
}

window.app = new App();
