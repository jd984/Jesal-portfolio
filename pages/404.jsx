import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <>
      <div className="flex w-full h-screen flex-col justify-center items-center pt-24">
        <h1 className="text-3xl mb-6">Page Not Found </h1>
        <Link href="/" className="flex items-center text-accent">
          <span className="mr-2">{<FaHome size="20px" />}</span>
          Return Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
