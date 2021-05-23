import React, { createContext, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Container, Hidden } from "@material-ui/core";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import GraphDialog from "./components/GraphDialog";
import MobileTopBar from "./components/MobileSearch";
import LoadingSpinner from "./components/LoadingSpinner";
import SnackBar from "./components/SnackBar";

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setCountries } from "./redux/reducers/commonReducer/actions";
import { getAllCountries } from "./utils/actions";
interface AppContextInterface {
  state: any;
  dispatch: any;
}

export const AppContext = createContext<AppContextInterface | null>(null);

const App = () => {
  const classes = useStyles();
  const state = useSelector((state: AppState) => state, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [showSnackBar, setShowSnackBar] = React.useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = React.useState("");
  const [snackBarVariant, setSnackBarVariant] = React.useState("success");

  useEffect(() => {
    getAllCountries()
      .then((res) => {
        dispatch(setCountries(res));
        setIsLoading(false);
      })
      .catch((err) => {
        setShowSnackBar(true);
        setSnackBarVariant("error");
        setSnackBarMessage(err);
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Hidden mdUp>
          <MobileTopBar />
        </Hidden>
        <Box mt={1.5} className={classes.border}>
          <Grid container>
            {/* Sidebar */}
            <Hidden smDown>
              <Grid item md={4}>
                <Sidebar />
              </Grid>
            </Hidden>
            {/* Message Area */}
            <Grid item xs>
              {/* <MessageArea /> */}
              <Map />
            </Grid>
          </Grid>
        </Box>
      </Container>
      {state?.showGraphDialog && (
        <GraphDialog isOpen={state?.showGraphDialog} />
      )}
      {isLoading && (
        <LoadingSpinner
          loading={isLoading}
          text="Loading Data..."
          size="large"
        />
      )}
      {showSnackBar && (
        <SnackBar
          open={showSnackBar}
          message={snackBarMessage}
          onClose={() => setShowSnackBar(false)}
          variant={snackBarVariant}
          autoHideDuration={3000}
        />
      )}
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  border: {
    border: "1px solid #ddd",
  },
}));

export default App;
