import Link from "next/link";
import React from "react";

export const ExperienceSection = () => {
  return (
    <section className="max-w-2xl mx-auto w-full px-10 sm:px-0">
      <div className="flex items-center text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 gap-2">
        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
        <h2 className="text-2xl font-bold  text-white">EXPERIENCES</h2>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Ithbi */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link href="https://ithbi.id/" className="hover:underline">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                PT. Ath-Thibbul Badil Indonesia
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">
              UI/UX, Full Stack Development
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              REMOTE
            </span>
          </div>
          <p className="text-gray-400">Oct - Dec 2024</p>
        </div>

        {/* Wiratman */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link href="https://wiratman.co.id/" className="hover:underline">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                PT. Wiratman
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">
              Backend Development
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              REMOTE
            </span>
          </div>
          <p className="text-gray-400">November 2024</p>
        </div>

        {/* Almalia */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link className="hover:underline" href="https://almaliacredco.com">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                PT. Almalia Halal Finansia
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">
              Designer, Editor & Setter
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONSITE
            </span>
          </div>
          <p className="text-gray-400">Sept 2023 - Feb 2024</p>
        </div>

        {/* Nukilan Salaf */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <Link
              href="https://nukilan-salaf.vercel.app"
              className="hover:underline"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Nukilan Salaf
              </h3>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">Founder</p>
            <span className="inline-block px-3 py-1 text-sm bg-neutral-800 rounded-md mt-2">
              ONSITE
            </span>
          </div>
          <p className="text-gray-400">May 2017 - Current</p>
        </div>

        {/* Bisa ditambahkan pengalaman lainnya */}
      </div>
    </section>
  );
};
