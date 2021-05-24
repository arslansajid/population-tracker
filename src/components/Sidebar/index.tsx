import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

// components
import SearchInput from "../SearchInput";
import useDebounce from "../../hooks/useDebounce";
import useDidMountEffect from "../../hooks/useDidMountEffect";

// redux
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  setSelectedCountry,
  setSearchResults,
  resetSearchResults,
  toggleGraphDialog,
} from "../../redux/reducers/commonReducer/actions";

interface Props {
  classes: object;
}

const Sidebar: React.FC<Props> = (props: any) => {
  const { classes } = props;

  const state = useSelector((state: AppState) => state);
  const dispatch: Dispatch<any> = useDispatch();

  const { countries, searchResults } = state;
  const selectedCountry: ISelectedCountry = state.selectedCountry;

  const [stateCountries, setStateCountries] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterCountriesByName = React.useCallback(
    (name) => {
      let results = countries.filter((x: any) =>
        x.name.toLowerCase().includes(name.toLowerCase().trim())
      );
      setStateCountries(results);
      setSearchTerm(name);
    },
    [countries]
  );

  const handleCountryClick = (item: ICountry) => {
    if (selectedCountry?.name !== item.name) {
      // if different country is clicked
      dispatch(setSelectedCountry(item));
      if (!searchTerm.length) {
        // for better UX
        dispatch(setSearchResults([item]));
      }
    }
  };

  useEffect(() => {
    if (countries.length) {
      setStateCountries(countries);
    }
  }, [countries]);

  const debouncedResults = useDebounce(stateCountries, 500);

  useDidMountEffect(() => {
    if (debouncedResults && searchTerm !== "") {
      const firstResult = stateCountries[0]; // select first country when user search
      dispatch(setSearchResults(debouncedResults));
      dispatch(setSelectedCountry(firstResult));
    } else if (searchResults.length && searchTerm === "") {
      dispatch(resetSearchResults());
    }
  }, [debouncedResults]);

  return (
    <>
      <Grid className={`${classes.borderRight500} ${classes.messageArea}`}>
        <Grid className={classes.searchChatContainer}>
          <SearchInput onChange={(val: string) => filterCountriesByName(val)} />
        </Grid>
        <Grid className={classes.listContainer}>
          <List
            disablePadding
            className={
              Boolean(searchResults.length)
                ? classes.listwithButton
                : classes.list
            }
          >
            {stateCountries.map((item: ICountry) => {
              return (
                <Grid
                  key={item.name}
                  className={
                    selectedCountry?.name === item.name
                      ? classes.selectedItem
                      : classes.listItem
                  }
                >
                  <ListItem button onClick={() => handleCountryClick(item)}>
                    <ListItemIcon>
                      <Avatar
                        alt="user-img"
                        src={
                          item.flag
                            ? item.flag
                            : require("../../assets/user.png")
                        }
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1">{item.name}</Typography>
                      <Typography variant="body2">{item.nativeName}</Typography>
                    </ListItemText>
                  </ListItem>
                </Grid>
              );
            })}
          </List>
          {/* show button if the the search term matches any country */}
          {Boolean(searchResults.length) && (
            <Grid className={classes.fixedButtonContainer}>
              <Button
                color="secondary"
                variant="contained"
                disableElevation
                fullWidth
                onClick={() => dispatch(toggleGraphDialog())}
              >
                {`${
                  searchResults.length === 1 ? "View" : "Compare"
                } Population`}
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(Sidebar);
