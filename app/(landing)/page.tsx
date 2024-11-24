/* eslint-disable @next/next/no-img-element */
"use client";

import {
  BarChart4,
  CodeXml,
  Download,
  Hourglass,
  Infinity,
  Linkedin,
  NotebookText,
  Plus,
  Receipt,
  Rocket,
  Twitter,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoPreview from "./components/demoPreview";

const Home = () => {
  return (
    <div className="bg-[#f7f7f7] flex justify-center items-center overflow-x-hidden">
      <div className="border-l border-r max-w-4xl w-full mx-auto border-dashed h-full flex justify-center flex-col border-gray-300">
        <div className="justify-center items-center h-full flex flex-col my-10">
          <div className="border-t border-dashed border-gray-300 w-full mx-auto py-10 flex justify-center items-center relative">
            <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
            <Image
              src="/android-chrome-512x512.png"
              width={100}
              height={100}
              className="rounded-lg"
              alt="logo"
            />
          </div>
          <div className="pt-10 pb-11 flex gap-3 items-center mx-auto border-gray-300 border-b w-full justify-center border-dashed relative">
            <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            <Link
              href="/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-orange-500 to-pink-400 text-white hover:bg-black/90 px-6 py-2 text-lg"
            >
              Generate Invoice
            </Link>
          </div>

        </div>
        <div className="mb-10">
          <DemoPreview />
        </div>
      </div>
    </div>
  );
};

export default Home;
