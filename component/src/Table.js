import React from "react";

import { Table } from "antd";

import "antd/dist/antd.css";

export default (props) => {
  const { dataSource, columns } = props;

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};
