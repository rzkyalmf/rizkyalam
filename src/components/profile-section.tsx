import { Github, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TechStack } from "./tech-stack";
import { TypedHeading } from "./typed-heading";

export const ProfileSection = () => {
  return (
    <div className="max-w-2xl mx-auto text-start">
      {/* Profile */}
      <div className="mb-8 flex gap-6 flex-row items-center">
        <div className="relative w-24 h-24">
          <Image
            src="/fotoprofil.jpg"
            alt="Profile Picture"
            className="rounded-full object-cover" // Tambahkan object-cover
            fill
            priority
            sizes="(max-width: 96px) 100vw, 96px"
          />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">Rizky Alam Firmansyah</h1>
          <div className="flex items-center text-gray-400 text-lg">
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
          development and artificial intelligence.`&quot;`
        </p>
      </div>

      {/* Social Links */}

      <div className="space-x-3 mb-12">
        <Link
          href="mailto:sketsacartoon@gmail.com"
          className="inline-flex items-center gap-2 bg-neutral-800 text-white px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors"
        >
          <Mail size={20} />
          Email
        </Link>
        <Link
          href="https://github.com/rzkyalmf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-800 text-white px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors"
        >
          <Github size={20} />
          Github
        </Link>
        <Link
          href="https://instagram.com/rzkyalmf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-800 text-white px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors"
        >
          <Instagram size={20} />
          Instagram
        </Link>
      </div>

      <TechStack />
    </div>
  );
};