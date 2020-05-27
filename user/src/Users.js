import React, { useState } from "react";

const Input = React.lazy(() => import("component/Input"));
const Button = React.lazy(() => import("component/Button"));
const Table = React.lazy(() => import("component/Table"));

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const Users = () => {
  const [users, setUsers] = useState(dataSource);

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [address, setAddress] = useState(null);

  const handleSubmit = () => {
    if (!name || !age || !address) return null;

    setUsers([...users, { key: users.length, name, age, address }]);
    setName(null);
    setAddress(null);
    setAge(null);
  };

  return (
    <>
      <b>Manage User</b>
      <br />
      <React.Suspense fallback="Loading ">
        <Input
          style={{ width: 200 }}
          prefix="Name :"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          style={{ width: 200 }}
          prefix="Age :"
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <Input
          style={{ width: 200 }}
          prefix="Address :"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />

        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Add
        </Button>
      </React.Suspense>

      <React.Suspense fallback="Loading ">
        <Table dataSource={users} columns={columns} />
      </React.Suspense>
    </>
  );
};

export default Users;
