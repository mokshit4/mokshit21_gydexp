import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../icons/searchIcon.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  searchTextField: {
    background: "rgba(243, 243, 243, 0.15)",
    backdropFilter: "blur(8px)",
    borderRadius: "8px",
    margin: "30px 0px 0px !important",
    "& .MuiInputBase-input": {
      color: "#ffffff",
      fontSize: "18px",
      fontFamily: "Poppins",
    },
  },
  notchedOutline: {
    border: "0px !important",
  },
  searchIcon: {
    margin: "0px 10px 0px 20px",
  },
});

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Autocomplete
      freeSolo
      options={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          className={classes.searchTextField}
          placeholder="Search for Places, Pincodes, Travel Destinations"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classes.searchIcon} />
              </InputAdornment>
            ),
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
      )}
    />
  );
};

export default SearchBar;
