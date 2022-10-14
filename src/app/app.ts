import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';

export const run = () => {

    const nameTextField = new MDCTextField(document.querySelector('#name'));
    const emailTextField = new MDCTextField(document.querySelector('#email'));
    const submitButton = new MDCRipple(document.querySelector('#submit'));

};
