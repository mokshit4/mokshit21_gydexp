import { Box, Grid, Typography } from "@mui/material";
import SearchBar from "./atoms/searchBar";
import { makeStyles } from "@mui/styles";
import SecondaryBtn from "./atoms/secondaryBtn";
import BigBlogCard from "./atoms/bigBlogCard";
import HorizontalBlogCard from "./atoms/horizontalBlogCard";

const useStyles = makeStyles((theme) => ({
  backgroundImageSection: {
    backgroundImage: "url(images/explore-lores/main.svg)",
    minHeight: "calc(100vh)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "-110px 0px 0px",
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
    background: "linear-gradient(to bottom, #0a0b0f, #0C0F17)",
    padding: "0px 15px 35px 35px",
    margin: "-2px 0px 0px",
  },
}));

const Lores = () => {
  const classes = useStyles();
  return (
    <Box elevation={0}>
      <Box className={classes.backgroundImageSection}>
        <Box className={classes.searchBox}>
          <Box className={classes.headerBox}>
            <Typography className={classes.typoHeader1}>
              Explore Gyde Lores
            </Typography>
            <Typography className={classes.typoHeader2}>
              for those who wander
            </Typography>
          </Box>
          <Box>
            <SearchBar />
          </Box>
        </Box>
      </Box>
      <Box className={classes.cardsBox}>
        <Grid container>
          <Grid item xs={7}>
            <Box>
              <SecondaryBtn btnText="Featured" />
            </Box>
            <BigBlogCard />
          </Grid>
          <Grid item xs={5}>
            <Box>
              <SecondaryBtn btnText="Most Read" />
            </Box>
            <HorizontalBlogCard />
            <HorizontalBlogCard />
            <HorizontalBlogCard />
            <HorizontalBlogCard />
            <HorizontalBlogCard />
            <HorizontalBlogCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Lores;
