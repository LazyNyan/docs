// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.nyako.cat/",
  integrations: [
    starlight({
      title: "nyako docs",
      logo: { src: "/public/favicon.png" },
      favicon: "/favicon.png",
      social: [
        {
          icon: "seti:audio",
          label: "Music Overlay",
          href: "https://music.nyako.cat",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/PNKh96vcyG",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/LazyNyan/docs",
        },
      ],
      sidebar: [
        {
          label: "Nyan's Music Overlay",
          items: [{ autogenerate: { directory: "music-overlay" } }],
        },
        {
          label: "Chat Playlist",
          items: [{ autogenerate: { directory: "chat-playlist" } }],
        },
      ],
    }),
  ],
});
