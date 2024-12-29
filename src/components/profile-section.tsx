import { Github, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TechStack } from "./tech-stack";
import { TypedHeading } from "./typed-heading";

export const ProfileSection = () => {
  return (
    <div className="max-w-2xl mx-auto text-start px-10">
      {/* Profile */}
      <div className="mb-8 flex gap-4 sm:gap-6 flex-col sm:flex-row items-center sm:items-center text-center sm:text-left">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src="/fotoprofil.jpg"
            alt="Profile Picture"
            className="rounded-full object-cover"
            fill
            priority
            sizes="(max-width: 96px) 100vw, 96px"
          />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">
            Rizky Alam Firmansyah
          </h1>
          <div className="flex items-center justify-center sm:justify-start text-gray-400 text-base sm:text-lg">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Open to Opportunities
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mb-8">
        <TypedHeading />
        <p className="text-gray-400 leading-relaxed mb-4">
          &quot;I am a full-stack developer passionate about creating modern web
          applications. My journey started in June 2023 at Devscale Indonesia
          bootcamp, where I quickly learned to build real-world projects. I
          specialize in React and Next.js, focusing on creating user-friendly
          websites with clean and efficient code.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I&apos;m always eager to learn new technologies and stay updated with
          the latest trends. Beyond web development, I&apos;m also interested in
          AI Engineering. My goal is to combine these skills to create
          innovative solutions that can make a positive impact in both software
          development and artificial intelligence.&quot;
        </p>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-3 mb-12 justify-start">
        <Link
          href="mailto:sketsacartoon@gmail.com"
          className="inline-flex items-center gap-2 bg-neutral-800 text-white px-4 sm:px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors text-sm sm:text-base"
        >
          <Mail size={18} />
          Email
        </Link>
        <Link
          href="https://github.com/rzkyalmf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-800 text-white px-4 sm:px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors text-sm sm:text-base"
        >
          <Github size={18} />
          Github
        </Link>
        <Link
          href="https://instagram.com/rzkyalmf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-800 text-white px-4 sm:px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors text-sm sm:text-base"
        >
          <Instagram size={18} />
          Instagram
        </Link>
      </div>

      <TechStack />
    </div>
  );
};
