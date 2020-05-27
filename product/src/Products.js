import React, { useState } from "react";

const Input = React.lazy(() => import("component/Input"));
const Button = React.lazy(() => import("component/Button"));
const Table = React.lazy(() => import("component/Table"));

const dataSource = [
  {
    key: "1",
    name: "Tesla",
    price: 100,
  },
  {
    key: "2",
    name: "BMW",
    price: 150,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

const Products = () => {
  const [products, setProducts] = useState(dataSource);

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  const handleSubmit = () => {
    if (!name || !price) return null;

    setProducts([...products, { key: products.length, name, price }]);
    setName(null);
    setPrice(null);
  };

  return (
    <>
      <b>Manage Products</b>
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
          prefix="Price :"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
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
        <Table dataSource={products} columns={columns} />
      </React.Suspense>
    </>
  );
};

export default Products;
