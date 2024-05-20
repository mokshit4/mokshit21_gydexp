import {Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchBar from "./atoms/searchBar";
import VerticalBlogCard from "./atoms/verticalBlogCard";
import { gydePillarsData } from "../mockData/gydePillars";
import GydesProfileBar from "./atoms/gydesProfileBar";

const useStyles = makeStyles((theme) => ({
  backgroundImageSection: {
    backgroundImage: "url(images/explore-gydes/background.png)",
    minHeight: "calc(100vh)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "-100px 0px 0px",
    position: "relative",
    // zIndex: -1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  typoHeader1: {
    fontSize: "54px !important",
    color: "#ffffff",
    fontFamily: "Prata !important",
  },
  typoHeader2: {
    fontSize: "40px !important",
    color: "#ffffff",
    fontFamily: "Charlotte !important",
  },
  headerBox: {
    padding: "0px 60px",
  },
  cardsBox: {
    background: theme.palette.main.main,
    padding: "35px 15px 35px 35px",
    margin: "-2px"
  },
  pillarsheading: {
    textAlign: "center",
    fontSize: "22px",
    color: "#ffffff",
    marginBottom: "40px !important"
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Box elevation={0}>
      <Box className={classes.backgroundImageSection}>
        <Box className={classes.searchBox}>
          <Box className={classes.headerBox}>
            <Typography className={classes.typoHeader1}>
              Reimagining Experiences
            </Typography>
            <Typography className={classes.typoHeader2}>
              for those who wander
            </Typography>
          </Box>
          <Box>
            <SearchBar />
          </Box>
          <GydesProfileBar />
        </Box>
      </Box>
      <Box className={classes.cardsBox}>
        <Typography className={classes.pillarsheading}>The four pillars that define the Gyde experience</Typography>
        <Grid container>
          {gydePillarsData.map((data) => (
            <Grid item xs={3}>
              <VerticalBlogCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
