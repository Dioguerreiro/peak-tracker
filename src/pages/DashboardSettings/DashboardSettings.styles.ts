import { styled } from "@mui/system";
import Tab from "@mui/material/Tab";

export const CustomTab = styled(Tab)`
  && {
    text-transform: none;
    font-weight: bold;
  }
  &[aria-selected="true"] {
    color: #0a0a0a;
    background-color: #f5f5f5;
    border-radius: 10px;
    border: none !important;
  }
`;
