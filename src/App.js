import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
