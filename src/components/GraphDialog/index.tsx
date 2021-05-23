import React from "react";

import PropTypes from "prop-types";

import Dialog from "../Dialog";
import BarGraph from "../BarGraph";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { toggleGraphDialog } from "../../redux/reducers/commonReducer/actions";

interface Props {
  isOpen: boolean;
}

const GraphDialog: React.FC<Props> = (props: any) => {
  const { isOpen } = props;
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <Dialog
      open={isOpen}
      title={`Population Graph`}
      message={<BarGraph />}
      cancelForm={() => dispatch(toggleGraphDialog())}
      hideActions
      size="lg"
    />
  );
};

GraphDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default GraphDialog;
