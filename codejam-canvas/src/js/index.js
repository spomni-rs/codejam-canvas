import style from '../scss/index.scss';
import {MDCTopAppBar} from '@material/top-app-bar';
import Workspace from './lib/workspace';

const topAppBar = new MDCTopAppBar(
  document.querySelector('.mdc-top-app-bar')
);

const workspace = new Workspace(
  document.querySelector('.workspace')
);
