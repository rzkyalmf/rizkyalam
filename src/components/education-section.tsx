import Link from "next/link";
import React from "react";

export const EducationSection = () => {
  return (
    <section className="max-w-2xl mx-auto w-full px-10 sm:px-0">
      <div className="flex items-center text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 gap-2">
        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
        <h2 className="text-2xl font-bold  text-white">EDUCATION</h2>
      </div>
      <div className="space-y-6 sm:space-y-8">
        {/* Bootcamp */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link href="https://www.devscale.id/" className="hover:underline">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                RAG 101 Workshop - Devscale Indonesia
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">
              AI/LLMs Development
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONLINE
            </span>
          </div>
          <p className="text-gray-400">28 - 29 Dec 2023</p>
        </div>

        {/* Bootcamp */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link
              href="https://www.devscale.id/programs/fullstack-javascript-bootcamp"
              className="hover:underline"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Fullstack Javascript Advance Bootcamp
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">
              Full-Stack Development
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONLINE
            </span>
          </div>
          <p className="text-gray-400">Nov 2023 - Dec 2023</p>
        </div>

        {/* Bootcamp */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link
              href="https://www.devscale.id/programs/fullstack-javascript-bootcamp"
              className="hover:underline"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Full-Stack JavaScript Bootcamp
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">
              Full-Stack Development
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONLINE
            </span>
          </div>
          <p className="text-gray-400">June 2023 - July 2023</p>
        </div>

        {/* LSIA */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link
              href="https://nukilan-salaf.vercel.app"
              className="hover:underline"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                LSIA (Lembaga Studi Islam & Bahasa Arab)
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">Idad Lughawy</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONLINE
            </span>
          </div>
          <p className="text-gray-400">March 2020 - April 2021</p>
        </div>

        {/* NESABO */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link
              href="https://nukilan-salaf.vercel.app"
              className="hover:underline"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                SMKN 1 Bojonggede
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">
              Website, Software, Hardware, Design, Editing, Animation 2D/3D
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              OFFLINE
            </span>
          </div>
          <p className="text-gray-400">Sept 2016 - Oct 2018</p>
        </div>
      </div>
    </section>
  );
};
