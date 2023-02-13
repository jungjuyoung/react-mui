import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Typography, styled } from "@mui/material";

function App() {
  const CustomButton = styled(Button)(({ theme }) => ({
    margin: 1,
    backgroundColor: "orange",
    color: "white",
    "&:hover": {
      background: "white",
      border: `1px solid ${theme.palette.otherColor.main}`,
      color: "orangered",
    },
  }));
  return (
    <>
      <Button variant="text" startIcon={<PhotoCamera />}>
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="div">
        It uses h1 style but it's a div tag
      </Typography>
      <CustomButton>styled button</CustomButton>
      <CustomButton>styled another button</CustomButton>
    </>
  );
}

export default App;
