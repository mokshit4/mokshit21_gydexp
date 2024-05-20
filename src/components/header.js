import {
  AppBar,
  Box,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PrimaryBtn from "./atoms/primaryBtn";
import { Link, useLocation } from "react-router-dom";

const headerOptions = [
  {
    "displayText": "Explore Gydes",
    "pageRoute": "/home"
  },
  {
    "displayText": "Explore Lores",
    "pageRoute": "/lores"
  },
  {
    "displayText": "Explore Us",
    "pageRoute": "home"
  }
];

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "20px 35px",
    position: 'relative !important',
    zIndex: 1
  },
  boxLevel0: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  },
  gydeLogoImg: {
    width: "120px",
  },
  navBarToggleText: {
    color: "#FFFFFF",
    textTransform: "none",
    fontSize: "20px !important"
  },
  navToggleBtn: {
    display: "flex",
    flexDirection: "column"
  },
  toggleBtnTextLink: {
    padding: '0px 8px',
    textDecoration: "none"
  },
  activeText: {
    fontWeight: "500 !important",
    color: theme.palette.primary.main
  },
  toggleUnderline: {
    borderBottom: `3.5px solid ${theme.palette.primary.main}`,
    margin: "4px 0px -8px",
    width: "100%"
  },
  signUpBtn: {
    width: "150px",
    height: "45px",
    borderRadius: "62px !important",
    "& p": {
        textTransform: "none",
        fontWeight: "600"
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <AppBar
      position="static"
      color="main"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar disableGutters>
        <Box className={classes.boxLevel0}>
          <Box>
            <IconButton>
              <img
                src="/images/gyde-logo.svg"
                alt="Gyde Logo"
                className={classes.gydeLogoImg}
              ></img>
            </IconButton>
          </Box>
          <Box>
            <ToggleButtonGroup value={location.pathname}>
              {headerOptions.map(({pageRoute, displayText}) => (
                <Link to={pageRoute} className={classes.toggleBtnTextLink}>
                  <ToggleButton className={classes.navToggleBtn} value={pageRoute}>
                    <Typography className={`${classes.navBarToggleText} ${pageRoute === location.pathname ? classes.activeText : {}}`}>{displayText}</Typography>
                    {pageRoute === location.pathname && <Box className={classes.toggleUnderline} />}
                  </ToggleButton>
                </Link>
              ))}
            </ToggleButtonGroup>
          </Box>
          <Box>
            <PrimaryBtn btnText="Sign Up" btnStyles={classes.signUpBtn} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
