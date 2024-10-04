import { _ as __nuxt_component_0 } from './nuxt-link-RI3yC8vX.mjs';
import { ref, resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { s as siteMetaInfo } from './sitemetainfo-CkMTxMac.mjs';
import { q as queryContent } from './query-iIk03Za5.mjs';
import { u as useSeoMeta } from './index-FAGJVMC8.mjs';
import { _ as _export_sfc } from './server.mjs';
import './preview-B4lmiCwq.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import './vue.8fc199ce-DcOLk55n.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const articles = ref([]);
    const page = ref(1);
    const loadArticles = async () => {
      const allArticles = await queryContent("/articles").only(["title", "description", "image", "slug", "date", "tags"]).sort({ date: 1 }).skip((page.value - 1) * 6).limit(6).find();
      const filteredArticles = allArticles.filter((article) => !article.tags.includes("review"));
      articles.value.push(...filteredArticles);
    };
    const loadMoreArticles = async ($state) => {
      await loadArticles();
      if (articles.value.length < page.value * 6) {
        $state.complete();
      } else {
        $state.loaded();
        page.value++;
      }
    };
    loadArticles();
    useSeoMeta({
      title: `${siteMetaInfo.title} | Blog`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "T\u1ED5ng h\u1EE3p c\xE1c b\xE0i vi\u1EBFt t\u1EEB content/articles"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    });
    const formatDate = (date) => {
      const options = { day: "numeric", month: "short" };
      return new Date(date).toLocaleDateString("en", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_infinite_loading = resolveComponent("infinite-loading");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9c7b63cf><header class="pt-16 pb-9 sm:pb-16 sm:text-center" data-v-9c7b63cf><h1 class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200" data-v-9c7b63cf> Blog </h1><p class="text-lg text-slate-700 dark:text-slate-400" data-v-9c7b63cf> N\u01A1i t\u1ED5ng h\u1EE3p c\xE1c ki\u1EBFn th\u1EE9c v\u1EC1 trading v\xE0 \u0111\u1EA7u t\u01B0 </p></header><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-7xl" data-v-9c7b63cf><!--[-->`);
      ssrRenderList(articles.value, (article) => {
        _push(`<div class="bg-gray-900 text-white p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50" data-v-9c7b63cf>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/${article.slug}`,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative overflow-hidden rounded-lg" data-v-9c7b63cf${_scopeId}><img${ssrRenderAttr("src", article.image)} alt="Thumbnail" class="object-cover w-full h-48" data-v-9c7b63cf${_scopeId}><div class="absolute top-2 left-2 bg-red-600 text-white font-bold py-1 px-3 rounded" data-v-9c7b63cf${_scopeId}><span class="text-lg" data-v-9c7b63cf${_scopeId}>${ssrInterpolate(formatDate(article.date))}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "relative overflow-hidden rounded-lg" }, [
                  createVNode("img", {
                    src: article.image,
                    alt: "Thumbnail",
                    class: "object-cover w-full h-48"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "absolute top-2 left-2 bg-red-600 text-white font-bold py-1 px-3 rounded" }, [
                    createVNode("span", { class: "text-lg" }, toDisplayString(formatDate(article.date)), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="mt-4" data-v-9c7b63cf>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/${article.slug}`,
          class: "block hover:text-green-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-xl font-semibold" data-v-9c7b63cf${_scopeId}>${ssrInterpolate(article.title)}</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-xl font-semibold" }, toDisplayString(article.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="mt-2" data-v-9c7b63cf>${ssrInterpolate(article.description)}</p></div><div class="mt-4 text-sm text-gray-400" data-v-9c7b63cf><span data-v-9c7b63cf>1 COMMENT</span></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_infinite_loading, {
        onInfinite: loadMoreArticles,
        identifier: page.value
      }, {
        "no-more": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-center text-gray-400 mt-6" data-v-9c7b63cf${_scopeId}>Kh\xF4ng c\xF2n b\xE0i vi\u1EBFt n\xE0o n\u1EEFa</p>`);
          } else {
            return [
              createVNode("p", { class: "text-center text-gray-400 mt-6" }, "Kh\xF4ng c\xF2n b\xE0i vi\u1EBFt n\xE0o n\u1EEFa")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c7b63cf"]]);

export { index as default };
//# sourceMappingURL=index-RE5_Psbc.mjs.map
