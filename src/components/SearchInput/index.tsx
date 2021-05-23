import React from "react";
import { InputAdornment, TextField, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  onChange(value: string): any;
}

const SearchInput: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const { onChange } = props;
  return (
    <TextField
      autoFocus
      className={classes.container}
      size="small"
      variant="outlined"
      placeholder="Search Countries ..."
      fullWidth
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton disabled className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: theme.spacing(1),
  },
  searchIcon: {
    padding: "12px 12px 12px 0px",
  },
}));

export default SearchInput;
