import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

interface Props {
  classes: any;
}

const Header: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg">
            <Typography variant="h6" className={classes.title}>
              Population Tracker
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
