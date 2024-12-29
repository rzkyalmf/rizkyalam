import Link from "next/link";
import React from "react";

export const EducationSection = () => {
  return (
    <section className="max-w-2xl mx-auto w-full">
      <div className="flex items-center text-gray-400 text-lg mb-8 gap-2">
        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
        <h2 className="text-2xl font-bold  text-white">EDUCATION</h2>
      </div>
      <div className="space-y-8">
        {/* Bootcamp */}
        <div className="flex justify-between items-start">
          <div>
            <Link href="https://www.devscale.id/" className="hover:underline">
              <h3 className="text-white text-xl font-bold">
                RAG 101 Workshop - Devscale Indonesia
              </h3>
            </Link>
            <p className="text-gray-400"> AI/LLMs Development</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONLINE
            </span>
          </div>
          <p className="text-gray-400">28 - 29 Dec 2023</p>
        </div>

        {/* Bootcamp */}
        <div className="flex justify-between items-start">
          <div>
            <Link
              href="https://www.devscale.id/programs/fullstack-javascript-bootcamp"
              className="hover:underline"
            >
              <h3 className="text-white text-xl font-bold">
                Fullstack Javascript Advance Bootcamp
              </h3>
            </Link>
            <p className="text-gray-400">Full-Stack Development</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONLINE
            </span>
          </div>
          <p className="text-gray-400">Nov 2023 - Dec 2023</p>
        </div>

        {/* Bootcamp */}
        <div className="flex justify-between items-start">
          <div>
            <Link
              href="https://www.devscale.id/programs/fullstack-javascript-bootcamp"
              className="hover:underline"
            >
              <h3 className="text-white text-xl font-bold">
                Full-Stack JavaScript Bootcamp
              </h3>
            </Link>
            <p className="text-gray-400">Full-Stack Development</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONLINE
            </span>
          </div>
          <p className="text-gray-400">June 2023 - July 2023</p>
        </div>

        {/* LSIA */}
        <div className="flex justify-between items-start">
          <div>
            <Link
              href="https://nukilan-salaf.vercel.app"
              className="hover:underline"
            >
              <h3 className="text-white text-xl font-bold">
                LSIA (Lembaga Studi Islam & Bahasa Arab)
              </h3>
            </Link>
            <p className="text-gray-400">Idad Lughawy</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONLINE
            </span>
          </div>
          <p className="text-gray-400">March 2020 - April 2021</p>
        </div>

        {/* NESABO */}
        <div className="flex justify-between items-start">
          <div>
            <Link
              href="https://nukilan-salaf.vercel.app"
              className="hover:underline"
            >
              <h3 className="text-white text-xl font-bold">
                SMKN 1 Bojonggede
              </h3>
            </Link>
            <p className="text-gray-400">
              Multimedia (Web Development,Software,Hardware,Design,Editing,3D)
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
