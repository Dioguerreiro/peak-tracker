import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const CustomTextField = styled(TextField)`
  && {
    border: 1px rgb(212, 212, 212);
    color: #171717;
    width: 100%;

    & .MuiOutlinedInput-root {
      border-radius: 12px;
    }
  }
`;
