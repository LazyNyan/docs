// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'nyako.cat',
			social: [{ icon: 'seti:audio', label: 'Music Overlay', href: 'https://music.nyako.cat' }, { icon: 'discord', label: 'Discord', href: 'https://discord.gg/PNKh96vcyG' }, { icon: 'github', label: 'GitHub', href: 'https://github.com/LazyNyan/docs' }],
			sidebar: [
				{
					label: "Nyan's Music Overlay",
					autogenerate: { directory: 'music-overlay' },
				},
			],
		}),
	],
});
