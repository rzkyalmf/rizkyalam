// components/TechStack.tsx
import Image from "next/image";

const technologies = [
  { name: "babel", src: "/logo/babel.svg" },
  { name: "cloudflare", src: "/logo/cloudflare.svg" },
  { name: "css3", src: "/logo/css3.svg" },
  { name: "docker", src: "/logo/docker.svg" },
  { name: "nextjs", src: "/logo/nextjs2.svg" },
  { name: "html5", src: "/logo/html5.svg" },
  { name: "nodejs", src: "/logo/nodejs.svg" },
  { name: "npm", src: "/logo/npm2.svg" },
  { name: "postgresql", src: "/logo/postgresql.svg" },
  { name: "react", src: "/logo/reactjs.svg" },
  { name: "reactquery", src: "/logo/reactquery.svg" },
  { name: "redis", src: "/logo/redis.svg" },
  { name: "redux", src: "/logo/redux.svg" },
  { name: "storybook", src: "/logo/storybook.svg" },
  { name: "supabase", src: "/logo/supabase.svg" },
  { name: "typescript", src: "/logo/typescript.svg" },
  { name: "vitejs", src: "/logo/vitejs.svg" },
  { name: "vitest", src: "/logo/vitest.svg" },
  { name: "vscode", src: "/logo/vscode.svg" },
  { name: "webpack", src: "/logo/webpack.svg" },
  { name: "zod", src: "/logo/zod.svg" },
];

export const TechStack = () => {
  return (
    <div className="mt-8">
      <div className="w-full max-w-2xl mx-auto">
        <section className="grid grid-cols-6 lg:grid-cols-12 gap-6">
          {technologies.map((tech) => (
            <Image
              key={tech.name}
              alt={tech.name}
              src={tech.src}
              width={32}
              height={32}
              loading="lazy"
              className="hover:scale-125 transition-transform duration-200"
            />
          ))}
        </section>
      </div>
    </div>
  );
};
