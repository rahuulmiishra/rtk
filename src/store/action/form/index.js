import * as actions from "../../constants/form";

export function updateText(text) {

  return {
    type: actions.FORM_UPDATE,
    myData: text,
  };
}
