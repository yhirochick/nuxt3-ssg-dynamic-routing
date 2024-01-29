import axios from "axios";

export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: false
    }
  },
  // https://github.com/nuxt/framework/issues/4919#issuecomment-1124349857
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      const res = await axios.get("https://temp03-colrevo.g.kuroco.app/rcms-api/1/news/list?cnt=100");
      if (nitroConfig.prerender?.routes === undefined) {
        return;
      }
      nitroConfig.prerender.routes = res.data.list.map((mount: any) => {
        return `/mountains/${mount.topics_id}`;
      });
    },
  },
});
