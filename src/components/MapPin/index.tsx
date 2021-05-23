import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  text: string;
  lat: number;
  lng: number;
}

const MapPin: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const { text } = props;

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
        disableElevation
        disableRipple
        onClick={(e) => e.stopPropagation()}
      >
        {text}
      </Button>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  circle: {
    width: 15,
    height: 15,
    position: "absolute",
    left: 5,
    top: 5,
    background: "white",
    borderRadius: "50%",
  },
  marker: {
    width: "25px",
    height: "25px",
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
    margin: "-20px 0 0 -15px",
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
  button: {
    whiteSpace: "nowrap",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, 50%)",
    textTransform: "capitalize",
    padding: 4,
  },
}));

export default MapPin;
