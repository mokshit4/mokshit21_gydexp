import { CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./route";

const theme = createTheme({
  palette: {
    main: {
      main: "#0C0F17", // Main background color
    },
    primary: {
      main: "#EDC16A", // Primary text and btn color
    },
  },
  typography: {
    fontFamily: "Poppins"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Grid container>
          <Grid item xs={12}>
            <CustomRoutes />
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
