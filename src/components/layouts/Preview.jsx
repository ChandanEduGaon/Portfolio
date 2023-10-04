import React from "react";
import { useLocation } from "react-router-dom";
import { NotFound } from "../common/NotFound";

const Preview = () => {
  const location = useLocation();
  console.log("Preview");
  const id = location.state.id;
    return (
        <NotFound />
  );
};

export default Preview;
