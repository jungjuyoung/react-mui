import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Avatar,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import Face2Icon from "@mui/icons-material/Face2";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";
import { Notifications } from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  // border: "1px solid red",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <Face2Icon sx={{ display: { xs: "blcok", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Nadia"
            src="/static/images/avatar/1.jpg"
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Nadia"
            src="/static/images/avatar/1.jpg"
          />
          <Typography variant="span">Nadia</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
