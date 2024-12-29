import Link from "next/link";
import React from "react";

export const ExperienceSection = () => {
  return (
    <section className="max-w-2xl mx-auto w-full">
      <div className="flex items-center text-gray-400 text-lg mb-8 gap-2">
        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
        <h2 className="text-2xl font-bold  text-white">EXPERIENCES</h2>
      </div>

      <div className="space-y-8">
        {/* Nukilan Salaf */}
        <div className="flex justify-between items-start">
          <div>
            <Link
              href="https://nukilan-salaf.vercel.app"
              className="hover:underline"
            >
              <h3 className="text-white text-xl font-bold">Nukilan Salaf</h3>
            </Link>
            <p className="text-gray-400">Founder</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONSITE
            </span>
          </div>
          <p className="text-gray-400">May 2017 - Current</p>
        </div>

        {/* KBA */}
        <div className="flex justify-between items-start">
          <div>
            <Link
              className="hover:underline"
              href="http://www.kampungbahasaarab.com"
            >
              <h3 className="text-white text-xl font-bold">
                Yayasan Kampung Bahasa Arab
              </h3>
            </Link>
            <p className="text-gray-400">Designer & Editor</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONSITE
            </span>
          </div>
          <p className="text-gray-400">Feb 2019 - Jan 2020</p>
        </div>

        {/* Al-Shofwa */}
        <div className="flex justify-between items-start">
          <div>
            <Link className="hover:underline" href="https://alsofwa.com">
              <h3 className="text-white text-xl font-bold">
                Yayasan Al-Shofwa
              </h3>
            </Link>
            <p className="text-gray-400">Designer & Setter</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONSITE
            </span>
          </div>
          <p className="text-gray-400">May 2021 - Oct 2021</p>
        </div>

        {/* Almalia */}
        <div className="flex justify-between items-start">
          <div>
            <Link className="hover:underline" href="https://almaliacredco.com">
              <h3 className="text-white text-xl font-bold">
                PT. Almalia Halal Finansia
              </h3>
            </Link>
            <p className="text-gray-400">Designer, Editor & Setter</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONSITE
            </span>
          </div>
          <p className="text-gray-400">Sept 2023 - Feb 2024</p>
        </div>

        {/* Wiratman */}
        <div className="flex justify-between items-start">
          <div>
            <Link href="https://wiratman.co.id/" className="hover:underline">
              <h3 className="text-white text-xl font-bold">PT. Wiratman</h3>
            </Link>
            <p className="text-gray-400">Backend Development</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              REMOTE
            </span>
          </div>
          <p className="text-gray-400">November 2024</p>
        </div>

        {/* Ithbi */}
        <div className="flex justify-between items-start">
          <div>
            <Link href="https://ithbi.id/" className="hover:underline">
              <h3 className="text-white text-xl font-bold">
                PT. Ath-Thibbul Badil Indonesia
              </h3>
            </Link>
            <p className="text-gray-400">UI/UX, Full Stack Development</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              REMOTE
            </span>
          </div>
          <p className="text-gray-400">Oct - Dec 2024</p>
        </div>

        {/* Bisa ditambahkan pengalaman lainnya */}
      </div>
    </section>
  );
};
