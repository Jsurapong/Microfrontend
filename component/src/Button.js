import React from "react";

import { Button } from "antd";

import "antd/dist/antd.css";

export default (props) => {
  const { children, onClick } = props;

  return (
    <>
      <Button
        onClick={() => {
          onClick && onClick();
        }}
      >
        {children}
      </Button>
    </>
  );
};
