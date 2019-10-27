import {MDCList} from "@material/list";
const viewport = require('./workspace__viewport')

export default class Workspace {

  constructor(node) {

    this.node = node;

    this.lists = Array
      .from(
        this.node.querySelectorAll(`.mdc-list`)
      )
      .map((node) => {
        return MDCList.attachTo(node)
      })
    ;

    this.viewport = new viewport(
      this.node.querySelector('.workspace__viewport'),
      // '32x32'
      // '4x4'
      // 'RSLogo'
    );

    setTimeout(() => {
      this.viewport.draw('4x4')
    }, 1000);

    setTimeout(() => {
      this.viewport.draw('32x32')
    }, 2000);

  }
}