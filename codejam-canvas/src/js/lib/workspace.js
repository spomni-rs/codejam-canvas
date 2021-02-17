import {MDCList} from "@material/list";
import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';

const Viewport = require(`./workspace__viewport`);

export default class Workspace {

  constructor(viewportNode) {

    this.node = viewportNode;

    Array
      .from(
          this.node.querySelectorAll(`.workspace__slides input`)
      )
      .forEach((node) => {
        node.addEventListener(`change`, () => {
          if (node.checked) {
            this.viewport.draw(node.value);
          }
        });
      })
    ;


    this.lists = Array
      .from(
          this.node.querySelectorAll(`.mdc-list`)
      )
      .map((node) => {
        return MDCList.attachTo(node);
      })
    ;

    this.formFields = Array
      .from(
          this.node.querySelectorAll(`.mdc-form-field`)
      )
      .map((node) => {

        let radio = new MDCRadio(node.querySelector(`.mdc-radio`));
        let formField = new MDCFormField(node);
        formField.input = radio;
        return formField;
      })
    ;

    this.viewport = new Viewport(
        this.node.querySelector(`.workspace__viewport`)
    );
  }
}
