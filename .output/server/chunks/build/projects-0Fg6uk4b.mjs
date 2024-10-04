import { mergeProps, unref, useSSRContext, resolveComponent, openBlock, createElementBlock, createElementVNode } from 'vue';
import { G as GithubNewIcon } from './github_new-CQZgvRQp.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { s as siteMetaInfo } from './sitemetainfo-CkMTxMac.mjs';
import { u as useSeoMeta } from './index-FAGJVMC8.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './vue.8fc199ce-DcOLk55n.mjs';

const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  class: "i1439988683__text-primary-color i1439988683__dark:text-primary-color-dark i1439988683__h-10 i1439988683__w-10",
  viewBox: "0 0 24 24"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }, null, -1)
  ]));
}
const FolderIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  class: "i1726459624__text-gray-700 i1726459624__dark:text-gray-200 i1726459624__hover:text-primary-color i1726459624__dark:hover:text-primary-color-dark i1726459624__h-5 i1726459624__w-5",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" }, null, -1)
  ]));
}
const ExternalIcon = { render };
const _sfc_main$1 = {
  props: ["title", "description", "href", "github", "tech1", "tech2", "tech3"],
  components: { FolderIcon, ExternalIcon, GithubIcon: GithubNewIcon },
  setup(props) {
    return {
      projectTitle: props.title,
      projectDescription: props.description,
      projectHref: props.href,
      projectGithub: props.github,
      projectTech1: props.tech1,
      projectTech2: props.tech2,
      ProjectTech3: props.tech3
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderIcon = resolveComponent("FolderIcon");
  const _component_ExternalIcon = resolveComponent("ExternalIcon");
  const _component_GithubIcon = resolveComponent("GithubIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "p-4 md:w-1/2 md",
    style: { "max-width": "544px" }
  }, _attrs))}><div class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"><div class="p-6"><div class="flex flex-row justify-between items-center"><div class="my-2">`);
  _push(ssrRenderComponent(_component_FolderIcon, { class: "w-10 h-10 text-indigo-800" }, null, _parent));
  _push(`</div><div class="flex flex-row justify-between"><div class="mx-1"><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", $setup.projectHref)}><span class="sr-only"></span>`);
  _push(ssrRenderComponent(_component_ExternalIcon, { class: "w-6 h-6 text-black" }, null, _parent));
  _push(`</a></div><div class="mx-1"><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", $setup.projectGithub)}><span class="sr-only">github</span>`);
  _push(ssrRenderComponent(_component_GithubIcon, { class: "w-6 h-6 text-black" }, null, _parent));
  _push(`</a></div></div></div><h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">${ssrInterpolate($setup.projectTitle)}</h2><p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">${ssrInterpolate($setup.projectDescription)}</p><div class="flex flex-row justify-between"><div class="text-gray-400 text-sm font-extralight">${ssrInterpolate($setup.projectTech1)} \u2022 ${ssrInterpolate($setup.projectTech2)} \u2022 ${ssrInterpolate($setup.ProjectTech3)}</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const projectsData = [
  {
    title: "Tailwind Designer Portfolio",
    description: `Current version. Improved the blog a lot, rebuilt with tailwind`,
    imgSrc: "",
    href: "#",
    github: "#",
    tech1: "Next",
    tech2: "Markdown",
    tech3: "TailwindCSS"
  },
  {
    title: "Tailwind Landing Page",
    description: `Again, some improvements. Moved from Gastby to Next, started to blog`,
    imgSrc: "",
    href: "",
    github: "#",
    tech1: "Next",
    tech2: "Markdown",
    tech3: "SCSS"
  },
  {
    title: "Web3 - Solana",
    description: `Current version. Improved the blog a lot, rebuilt with tailwind`,
    imgSrc: "",
    href: "#",
    github: "#",
    tech1: "Next",
    tech2: "Markdown",
    tech3: "TailwindCSS"
  },
  {
    title: "Polygon Scanner API",
    description: `Again, some improvements. Moved from Gastby to Next, started to blog`,
    imgSrc: "",
    href: "",
    github: "#",
    tech1: "Next",
    tech2: "Markdown",
    tech3: "SCSS"
  },
  {
    title: "Personal website 2.0",
    description: `Second version of my personal website. Little improvements, showing projects and more.`,
    imgSrc: "",
    href: "",
    github: "#",
    tech1: "Gatsby",
    tech2: "graphQL",
    tech3: "CSS"
  },
  {
    title: "Tailwind NuxtJs Blog Starter",
    description: `First version of my personal website. Nothing spectacular, just to buy domain and try things.`,
    imgSrc: "",
    href: "",
    github: "https://github.com/mdrathik/tailwind-nuxt-blog-starter",
    tech1: "Gatsby",
    tech2: "Heroku",
    tech3: "Bootstrap"
  }
];
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `${siteMetaInfo.title} | Projects`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Some of Projects developed by Solaiman"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_project_card = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0" }, _attrs))}><div class="pt-6 pb-8 space-y-2 md:space-y-5"><h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"> Projects </h1><p class="text-lg leading-7 text-gray-500 dark:text-gray-400"> Some of the projects I&#39;ve build or been a part of. </p></div><main class="relative mb-auto"><div class=""><div class="container py-12"><div class="flex flex-wrap -m-4"><!--[-->`);
      ssrRenderList(unref(projectsData), (item) => {
        _push(ssrRenderComponent(_component_project_card, {
          key: item.title,
          title: item.title,
          description: item.description,
          href: item.href,
          github: item.github,
          tech1: item.tech1,
          tech2: item.tech2,
          tech3: item.tech3
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-0Fg6uk4b.mjs.map
