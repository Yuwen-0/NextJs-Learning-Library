"use client";
import { notFound } from "next/navigation";
import { parse } from "path";

export default function Reviews({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const num = Math.floor(Math.random() * 5);
  const num2 = "im tired";
  if (num > 1) {
    throw new Error("error");
  }
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Product {params.productId} Review {params.reviewId}
    </h1>
  );
}
