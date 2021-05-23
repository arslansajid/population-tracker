import React, { useEffect } from "react";
import { getAllCountries } from "./actions";

import LoadingSpinner from "../components/LoadingSpinner";
import SnackBar from "../components/SnackBar";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setCountries } from "../redux/reducers/commonReducer/actions";

interface Props {}

const API: React.FC<Props> = () => {
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

export default API;
