"use client";

import { Banner } from "flowbite-react";
import {  HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";

export default function OfferBanner() {

  return (
    <Banner>
      <div className="flex w-full justify-between border-t border-blue-200 bg-blue-50 p-4 dark:border-blue-600 dark:bg-blue-500">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-stone-500 dark:text-blue-50">
            <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
              <MdPercent className="h-4 w-4" />
            </span>
            <span className="[&_p]:inline">
              Üye ol ve sepette %5 indirim kazan!&nbsp;
            </span>
          </p>
        </div>
        <Banner.CollapseButton
          color="white"
          className="border-0 bg-transparent text-stone-500 dark:text-stone-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
