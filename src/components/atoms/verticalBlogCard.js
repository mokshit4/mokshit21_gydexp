import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardMain: {
    backgroundColor: `${theme.palette.main.main} !important`,
    paddingRight: "20px"
  },
  cardImg: {
    maxWidth: "300px"
  },
  cardContent: {
    padding: "16px 0px !important"
  },
  titleTypo: {
    color: "#ffffff",
    fontSize: "20px !important"
  },
  descTypo: {
    color: "#ffffff",
    fontSize: "14px !important",
    marginTop: "8px !important",
    fontWeight: "300 !important"
  }
}));

const VerticalBlogCard = ({imgLink, title, descText}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardMain} elevation={0}>
      <CardMedia
        component="img"
        className={classes.cardImg}
        image={imgLink}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.titleTypo}>{title}</Typography>
        <Typography className={classes.descTypo}>{descText}</Typography>
      </CardContent>
    </Card>
  );
};

export default VerticalBlogCard;
