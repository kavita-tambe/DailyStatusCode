import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = /*istanbul ignore next*/ () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    data-testid="component-loader"
  >
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;
