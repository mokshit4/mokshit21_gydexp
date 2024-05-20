import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as TimeIcon } from "../../icons/timeIcon.svg";
const useStyles = makeStyles((theme) => ({
    cardMain: {
        backgroundColor: `transparent !important`,
        margin: '15px 40px 0px 0px'
    },
    cardImg: {
        borderRadius: "10px",
        height: "30vw"
    },
    titleTypo: {
        fontSize: "22px !important",
        color: "#ffffff"
    },
    cardContent: {
        padding: "20px 0px !important"
    },
    keywordsBox: {
        display:"flex !important",
        justifyContent: "space-between",
        margin: "0px 0px 10px",
        alignItems: "center"
    },
    keywordsTypo: {
        color: theme.palette.primary.main,
        fontSize: "20px !important"
    },
    timeBox: {
        display: "flex",
        alignItems: "center"
    },
    timeTypo: {
        color: "#ffffff"
    },
    timeIcon: {
        marginRight: "10px"
    },
    descTypo: {
        color: "#ffffff",
        marginTop: "10px !important",
        fontSize: "15px !important",
        fontWeight: "300 !important",
        textAlign: "justify"
    }
}));

const BigBlogCard = () => {
    const classes = useStyles();
    return (
        <Card elevation={0} className={classes.cardMain}>
            <CardMedia
                image="/images/explore-lores/big-blog-img.png"
                className={classes.cardImg}
            />
            <CardContent className={classes.cardContent}>
                <Box className={classes.keywordsBox}>
                    <Typography className={classes.keywordsTypo}>Lifestyle • Travel • Arabic Nights</Typography>
                    <Box className={classes.timeBox}>
                        <TimeIcon className={classes.timeIcon} />
                        <Typography className={classes.timeTypo}>6 Min</Typography>
                    </Box>
                </Box>
                <Typography className={classes.titleTypo}>The James Webb telecscope: Images of Neptune’s Rings </Typography>
                <Typography className={classes.descTypo}>Dive into adventures the moment inspiration strikes. Tailored for college trips, school field trips, corporate retreats, and large group adventures, Gyde Go crafts personalized itineraries to meet the unique needs of every traveler.</Typography>
            </CardContent>
        </Card>
    );
};

export default BigBlogCard;