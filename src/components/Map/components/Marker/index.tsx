import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { toggleGraphDialog } from "../../../../redux/reducers/commonReducer/actions";

interface Props {
  text: string;
  lat: number;
  lng: number;
}

const Marker: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const { text } = props;

  const dispatch: Dispatch<any> = useDispatch();

  const showGraphDialog = (e: any) => {
    e.stopPropagation();
    dispatch(toggleGraphDialog());
  };

  return (
    <>
      <div className={classes.marker}>
        <div className={classes.circle} />
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="small"
        onClick={showGraphDialog}
        disableElevation
      >
        View {text} Graph
      </Button>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  circle: {
    width: 18,
    height: 18,
    position: "absolute",
    left: 6,
    top: 6,
    background: "white",
    borderRadius: "50%",
  },
  marker: {
    width: "30px",
    height: "30px",
    borderRadius: "50% 50% 50% 0",
    border: `2px solid ${theme.palette.secondary.main}`,
    background: theme.palette.secondary.main,
    position: "absolute",
    WebkitTransform: "rotate(-45deg)",
    MozTransform: "rotate(-45deg)",
    OTransform: "rotate(-45deg)",
    MsTransform: "rotate(-45deg)",
    transform: "rotate(-45deg)",
    left: "50%",
    top: "50%",
    margin: "-20px 0 0 -20px",
    WebkitAnimationName: "bounce",
    MozAnimationName: "bounce",
    OAnimationName: "bounce",
    MsAnimationName: "bounce",
    animationName: "bounce",
    WebkitAnimationFillMode: "both",
    MozAnimationFillMode: "both",
    OAnimationFillMode: "both",
    MsAnimationFillMode: "both",
    animationFillMode: "both",
    WebkitAnimationDuration: "1s",
    MozAnimationDuration: "1s",
    OAnimationDuration: "1s",
    MsAnimationDuration: "1s",
    animationDuration: "1s",
  },
  text: {
    transform: "rotate(45deg)",
    fontSize: 12,
    position: "relative",
    color: "white",
    fontWeight: 600,
    top: 6,
  },
  button: {
    whiteSpace: "nowrap",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, 75%)",
    textTransform: "capitalize",
  },
}));

export default Marker;
