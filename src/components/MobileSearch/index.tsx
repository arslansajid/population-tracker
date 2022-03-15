import React from "react";
import { Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import DebounceSelect from "../DebounceSelect";

interface Props {
  classes: object;
}

const MobileSearch: React.FC<Props> = (props: any) => {
  const { classes } = props;

  return (
    <Grid container className={classes.messageBarMobile}>
      <Grid item xs={12}>
        <DebounceSelect
          label="Search Countries"
          fullWidth
          getOptionLabel={(option) => option.name.common}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(MobileSearch);
