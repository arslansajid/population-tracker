import React, { useState, useEffect } from "react";

import {
  Grid,
  Button,
  TextField,
  Paper,
  List,
  ListItem,
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import { Dispatch } from "redux";
import {
  setSearchResults,
  resetSearchResults,
  setSelectedCountry,
  toggleGraphDialog,
} from "../../redux/reducers/commonReducer/actions";

const useStyles = makeStyles((theme) => ({
  avatarMobile: {
    height: 30,
    width: 30,
  },
  relativePosition: {
    position: "relative",
  },
  ListContainer: {
    position: "relative",
    background: theme.palette.common.white,
    maxHeight: 150,
    overflow: "scroll",
    marginBottom: theme.spacing(7), // button height
  },
  resultsContainer: {
    marginTop: theme.spacing(0.5),
    position: "absolute",
    zIndex: 2,
    width: "100%",
    overflow: "hidden",
  },
  fixedButtonContainer: {
    position: "absolute",
    bottom: 0,
    height: 40,
    width: "calc(100% - 32px)",
    padding: theme.spacing(1, 2),
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
}));

const DebounceSelect = (props) => {
  const classes = useStyles();
  const { label, getOptionLabel, fullWidth } = props;
  // states
  const [inputText, setInputText] = useState("");
  const [filterResults, setFilterResults] = useState(null);
  const [valueSelected, setValueSelected] = useState(null);

  const state = useSelector((state: AppState) => state);
  const dispatch: Dispatch<any> = useDispatch();

  const { countries, searchResults } = state;
  const selectedCountry: ISelectedCountry = state.selectedCountry;

  const debouncedSearchTerm = useDebounce(inputText, 500);

  const filterCountriesByName = React.useCallback(
    (name) => {
      let results = countries.filter((x) =>
        x.name.toLowerCase().includes(name.toLowerCase().trim())
      );
      setFilterResults(results);
      setInputText(name);
    },
    [countries]
  );

  useEffect(() => {
    if (debouncedSearchTerm && valueSelected !== inputText) {
      filterCountriesByName(debouncedSearchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleItemSelect = (option) => {
    const selectedLabel = getOptionLabel(option);
    // onChange(option);
    setInputText(selectedLabel);
    if (selectedCountry?.name !== option.name) {
      dispatch(setSelectedCountry(option));
    }
  };

  useDidMountEffect(() => {
    if (filterResults.length && inputText !== "") {
      dispatch(setSearchResults(filterResults));
      if (selectedCountry?.name !== filterResults[0].name) {
        dispatch(setSelectedCountry(filterResults[0]));
      }
    } else if (searchResults.length && inputText === "") {
      dispatch(resetSearchResults());
    }
  }, [filterResults]);

  const showOptions = !!filterResults && filterResults.length && !valueSelected;

  return (
    <Grid className={classes.relativePosition}>
      <TextField
        variant="outlined"
        size="small"
        label={label}
        fullWidth={fullWidth}
        value={inputText}
        onChange={(e) => {
          if (valueSelected) {
            setValueSelected(null);
          }
          if (e.target.value === "") {
            setFilterResults([]);
          }
          setInputText(e.target.value);
        }}
      />
      {showOptions ? (
        <Paper className={classes.resultsContainer}>
          <Grid className={classes.ListContainer}>
            <List disablePadding>
              {filterResults.map((option) => (
                <ListItem
                  button
                  onClick={() => handleItemSelect(option)}
                  key={option?.name}
                  selected={option?.name === selectedCountry?.name}
                >
                  <ListItemIcon>
                    <Avatar
                      alt="user-img"
                      src={
                        option.flag
                          ? option.flag
                          : require("../../assets/user.png")
                      }
                      className={classes.avatarMobile}
                    />
                  </ListItemIcon>
                  <ListItemText primary={getOptionLabel(option)} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid className={classes.fixedButtonContainer}>
            <Button
              color="secondary"
              variant="contained"
              disableElevation
              fullWidth
              onClick={() => dispatch(toggleGraphDialog())}
            >
              {`${filterResults.length === 1 ? "View" : "Compare"} Population`}
            </Button>
          </Grid>
        </Paper>
      ) : null}
    </Grid>
  );
};

DebounceSelect.defaultProps = {
  fullWidth: false,
};

DebounceSelect.propTypes = {
  getOptionLabel: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

export default DebounceSelect;
