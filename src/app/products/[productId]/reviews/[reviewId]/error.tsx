"use client";
export default function ErrorHandle({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>Something went wrong! with {error.message}</h1>
      <button onClick={() => reset()}>retry</button>
    </>
  );
}
