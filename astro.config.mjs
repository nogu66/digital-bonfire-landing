import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://digital-bonfire.app/",
  integrations: [tailwind(), icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
