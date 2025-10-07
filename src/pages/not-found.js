import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "NotFound Instagram";
  }, []);
  return (
    <div className="bg-gray-background">
      <div className="  mx-auto max-w-screen-lg flex justify-center items-center h-screen">
        <p className="text-center text-2xl">Not Found Page</p>
      </div>
    </div>
  );
};

export default NotFound;
