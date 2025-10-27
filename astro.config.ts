// @ts-check
import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://hi.ttio.cc",
	integrations: [
		unocss({ injectReset: true }),
		svelte(),
		icon(),
	]
});
