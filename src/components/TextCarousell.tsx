import React from "react";
import HeartAnimation from "./HeartAnimation/HeartAnimation";
import ArrowRightIcon from "@heroicons/react/solid/ArrowRightIcon";

const TextCarousell = () => {
  return (
    <div className={"grid place-content-center h-screen"}>
      <HeartAnimation />

      <div className={"col-2"}>
        <div className="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
              Email Subscription
            </h1>
            <p className="text-sm text-gray-500 text-center w-5/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut laborea.
            </p>
            <button className="bg-blue-400 text-white rounded-full font-semibold px-4 py-3">
              <ArrowRightIcon width={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCarousell;
