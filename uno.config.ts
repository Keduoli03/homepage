import { defineConfig } from "unocss";

export default defineConfig({
	theme: {
		colors: {
			"primary": "var(--primary-color)",
			"secondary": "var(--secondary-color)",
			"weak": "var(--weak-color)",
			"background": "var(--background-color)",
			"selection": "var(--selection-color)",
		},
	}
});
