import React, { createContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Container, Hidden } from "@material-ui/core";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import GraphDialog from "./components/GraphDialog";
import MobileTopBar from "./components/MobileSearch";
import Api from "./api";

import { useSelector, shallowEqual } from "react-redux";
interface AppContextInterface {
  state: any;
  dispatch: any;
}

export const AppContext = createContext<AppContextInterface | null>(null);

const App = () => {
  const classes = useStyles();
  const state = useSelector((state: AppState) => state, shallowEqual);

  return (
    <>
      <Api />
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
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  border: {
    border: "1px solid #ddd",
  },
}));

export default App;
