import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <Link to="/">
            <ListItemButton>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/job">
            <ListItemButton>
              <ListItemText>Jobs</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/companies">
            <ListItemButton>
              <ListItemText>Companies</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/companies">
            <ListItemButton>
              <ListItemText>Profiles</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/companies">
            <ListItemButton>
              <ListItemText>Messages</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/companies">
            <ListItemButton>
              <ListItemText>Saved Items</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/companies">
            <ListItemButton>
              <ListItemText>Settings</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/companies">
            <ListItemButton>
              <ListItemText>Help & Support</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome
          </Typography>
          <div>
            <Link
              to="/auth"
              variant="outlined"
              style={{ color: "white", border: "white 1px solid" }}
            >
              Sign In
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
