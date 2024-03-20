import React from "react";

export default function Alert(props) {
    const capitalize = (word) => {
        let lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
  return (
    // "prop.alert &&" checks if it's not null.
    props.alert && <div class={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong><div>: {props.alert.msg}</div>
    </div>
  );
}
