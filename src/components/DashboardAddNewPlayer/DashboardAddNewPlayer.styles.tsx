import { styled } from "@mui/system";
import { DialogContent, DialogTitle } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const CustomDialogContent = styled(DialogContent)`
  && {
    border-radius: 18px;
  }
`;

export const CustomDialogTitle = styled(DialogTitle)`
  && {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
    font-weight: 600;
  }
`;

export const CustomDatePicker = styled(DatePicker)`
  && {
    border-radius: 18px;
  }
`;
