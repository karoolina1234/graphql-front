import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
} from "@mui/material";
import { Home as HomeIcon, Info as InfoIcon } from "@mui/icons-material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from "./pages/List";
import Item from "./pages/Item";

function App() {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        variant="elevation"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar style={{ backgroundColor: "#4B0082" }}>
          <Typography variant="h6" noWrap>
            Rick and Morty
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List
          style={{
            paddingTop: "5rem",
            backgroundColor: "#3C1B4A",
            minHeight: "100vh",
          }}
        >
          <ListItem button style={{ color: "#F0F0F0", margin: "0.5rem 0rem" }}>
            <ListItemIcon style={{ color: "#F0F0F0" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              style={{ cursor: "pointer" }}
              primary="Início"
              onClick={() => (window.location.href = "/")}
            />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
        <Toolbar />

        <Router>
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/item" element={<Item />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
