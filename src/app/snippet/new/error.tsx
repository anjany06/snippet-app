"use client";

// error.tsx hameha client side pe hi render hota hai

// why this error.tsx file
//so ager koi error ata toh uska pop na aye hme error ui me display talki ux better ho jaye
// and sath hi hme try catch use krnaa pdega thbi usi ui k bagl me ayega wrna ek new page me error.message ayega
import React from "react";

type ErrorPageProps = {
  error: Error;
};
const ErrorPage = ({ error }: ErrorPageProps) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
