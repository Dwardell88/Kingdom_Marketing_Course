import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// Nitro (the server build/deploy target) is only needed for `vite build`, not
// `vite dev` — import it lazily so dev startup doesn't pay for it.
export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
  ];

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    // "node-server" runs anywhere Node does (a VM, Docker, Railway, Render, Fly.io).
    // Swap the preset if you deploy to Vercel ("vercel"), Netlify ("netlify"),
    // or Cloudflare Workers ("cloudflare-module") instead.
    plugins.push(nitro({ preset: "node-server" }));
  }

  plugins.push(viteReact());

  return {
    resolve: { alias: { "@": `${process.cwd()}/src` } },
    plugins,
  };
});
