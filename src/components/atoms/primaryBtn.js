import { Button, Typography } from "@mui/material";

const PrimaryBtn = ({btnText, btnStyles = {}}) => {
    return (
        <Button color="primary" variant="contained" className={btnStyles}>
            <Typography color="main" textTransform="none">{btnText}</Typography>
        </Button>
    )
};

export default PrimaryBtn;