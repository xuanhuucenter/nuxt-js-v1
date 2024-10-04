<template>
  <a
    v-if="showBuyMeACoffee"
    href="https://www.buymeacoffee.com/mdrathik"
    target="_blank"
  >
    <img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
      alt="Buy Me A Coffee"
      style="height: 60px !important; width: 217px !important"
    />
  </a>
</template>

<script>
export default {
  data() {
    return {
      showBuyMeACoffee: false, // Thay đổi giá trị này để ẩn hoặc hiển thị
    };
  },
};
</script>
