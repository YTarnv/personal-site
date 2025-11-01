import { Container, CssBaseline, AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Personal Site
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ py: 4 }}>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </Box>
    </>
  );
}