"use client";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve("done");
        }, 10000)
      );
    };
    fetchData();
    console.log("Blog Loaded");
  }, []);
  return <h1>Blog</h1>;
}
