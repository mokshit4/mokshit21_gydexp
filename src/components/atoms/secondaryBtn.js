import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    "typo": {
        textTransform: "none"
    }
});

const SecondaryBtn = ({btnText}) => {
    const classes = useStyles();
    return (
        <Button variant="outlined">
            <Typography className={classes.typo}>{btnText}</Typography>
        </Button>
    );
};

export default SecondaryBtn;