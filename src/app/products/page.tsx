"use client";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [productId, setProductId] = useState<any>(1);
  return (
    <>
      <h1>Products List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="number"
        value={productId}
        onChange={(e) => {
          if (e.target.value == "0" || parseInt(e.target.value) > 3) return;
          if (e.target.value == "") {
            setProductId("");
            return;
          }
          if (Number.isNaN(parseInt(e.target.value))) return;
          setProductId(parseInt(e.target.value));
        }}
      />
      <br />
      <Link href={`/products/${productId}`}>Go to PRODUCT {productId}</Link>
      <br />
      <Link href="/">HOME</Link>
      <h2>
        <Link href="/products/1">Product 1</Link>|
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>|
      </h2>
      <h2>
        <Link replace href="/products/3">
          Product 3
        </Link>
        |
      </h2>
    </>
  );
}
