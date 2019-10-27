import style from '../scss/index.scss';

// header
import {MDCTopAppBar} from '@material/top-app-bar';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import Workspace from './lib/workspace';
let workspace = new Workspace(document.querySelector('.workspace'))