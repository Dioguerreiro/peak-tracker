import React from "react";
import { CustomTextField } from "./Textfield.styles";
import CustomTextFieldProps from "./Textfield.types";

const Textfield: React.FC<CustomTextFieldProps> = (props) => {
  return (
    <CustomTextField
      label={props.label}
      variant="outlined"
      {...props}
    />
  );
};

export default Textfield;
