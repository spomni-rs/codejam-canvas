import {MDCList} from "@material/list";
import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';

const viewport = require('./workspace__viewport')

export default class Workspace {

  constructor(node) {

    this.node = node;

    Array
      .from(
        this.node.querySelectorAll('.workspace__slides input')
      )
      .forEach((node) => {
        node.addEventListener('change', () => {
          if (node.checked){
            this.viewport.draw(node.value)
          }
        })
      })
    ;


    this.lists = Array
      .from(
        this.node.querySelectorAll(`.mdc-list`)
      )
      .map((node) => {
        return MDCList.attachTo(node)
      })
    ;

    this.formFields = Array
      .from(
        this.node.querySelectorAll(`.mdc-form-field`)
      )
      .map((node) => {

        let radio = new MDCRadio(node.querySelector('.mdc-radio'));
        let formField = new MDCFormField(node);
        formField.input = radio;
        return formField;
      })
    ;

    this.viewport = new viewport(
      this.node.querySelector('.workspace__viewport'));

    // setTimeout(() => {
    //   this.viewport.draw('4x4')
    // }, 2000);

    // setTimeout(() => {
    //   this.viewport.draw('32x32')
    // }, 4000);

    // setTimeout(() => {
    //   this.viewport.draw('RSSLogo')
    // }, 6000);

    // setTimeout(() => {
    //   this.viewport.draw('RSSLogo')
    // }, 8000);

  }
}