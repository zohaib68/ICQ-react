import styled from "@emotion/styled";
import { Button, TableCell, TextField } from "@mui/material";

export const CustomTableCellHeader = styled(TableCell)(({ theme, open }) => ({
  fontWeight: "bold",
}));
export const Field = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme, color }) => ({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: color,
    },
  },
}));
