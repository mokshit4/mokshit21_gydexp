import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ReactComponent as TimeIcon } from "../../icons/timeIcon.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardMain: {
    backgroundColor: "transparent !important",
    margin: "15px 0px",
    display: "flex"
  },
  cardImg: {
    width: "120px",
  },
  cardContnet: {
    padding: "0px 10px !important"
  },
  keywordsBox: {
    display: "flex !important",
    justifyContent: "space-between",
    margin: "5px 0px 0px",
    alignItems: "center",
  },
  keywordsTypo: {
    color: theme.palette.primary.main,
    fontSize: "15px !important",
  },
  timeBox: {
    display: "flex",
    alignItems: "center",
  },
  timeTypo: {
    color: "#ffffff",
  },
  timeIcon: {
    marginRight: "10px",
    height: "17px",
    width: "17px"
  },
  titleTypo: {
    fontSize: "18px !important",
    color: "#ffffff",
  },
}));

const HorizontalBlogCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cardMain}>
      <CardMedia
        image="/images/explore-lores/horizontal-blog-img.png"
        className={classes.cardImg}
      />
      <CardContent className={classes.cardContnet}>
        <Typography className={classes.titleTypo}>
          The James Webb telecscope: Images of Neptune’s Rings{" "}
        </Typography>
        <Box className={classes.keywordsBox}>
          <Typography className={classes.keywordsTypo}>
            Lifestyle • Travel • Arabic Nights
          </Typography>
          <Box className={classes.timeBox}>
            <TimeIcon className={classes.timeIcon} />
            <Typography className={classes.timeTypo}>6 Min</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HorizontalBlogCard;
