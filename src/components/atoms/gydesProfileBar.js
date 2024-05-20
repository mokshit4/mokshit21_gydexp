import { Avatar, Box, Typography } from "@mui/material";
import PrimaryBtn from "./primaryBtn.js";
import { makeStyles } from "@mui/styles";
import { gydeProilesData } from "../../mockData/gydeProfiles.js";

const useStyles = makeStyles({
  mainBox: {
    display: "flex",
    marginTop: "35px",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "35px !important",
    height: "35px !important",
  },
  primaryBtn: {
    borderRadius: "16px !important",
    padding: "3px 14px !important",
  },
  typo: {
    color: "#ffffff",
    margin: "0px 30px !important",
  },
});

const GydesProfileBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      {gydeProilesData.map((data, index) => (
        <Avatar
          className={classes.avatar}
          src={data.imgLink}
          style={{ marginLeft: index === 0 ? "0px" : "-10px" }}
        />
      ))}
      <Typography className={classes.typo}>
        Look what experience 570 people around you recommend
      </Typography>
      <PrimaryBtn btnText="Gyde now" btnStyles={classes.primaryBtn} />
    </Box>
  );
};

export default GydesProfileBar;
