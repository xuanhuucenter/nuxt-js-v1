import { defineComponent, h, useSSRContext } from 'vue';

const _sfc_main = defineComponent({
  name: "DocumentDrivenNotFound",
  render() {
    return h("div", "Document not found");
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.13.2_@parcel+watcher@2.4.1_@types+no_6vlsok54ywflqzkygxtn4n7nii/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocumentDrivenNotFound-B4KnxAk4.mjs.map
