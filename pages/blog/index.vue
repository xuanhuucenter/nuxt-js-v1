<template>
  <div>
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center">
      <h1 class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200">
        Blog
      </h1>
      <p class="text-lg text-slate-700 dark:text-slate-400">
        Nơi tổng hợp các kiến thức về trading và đầu tư
      </p>
    </header>

    <!-- Danh sách bài viết -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
      <div 
        v-for="article in articles" 
        :key="article.title" 
        class="bg-gray-900 text-white p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
      >
        <!-- Hình ảnh đại diện bài viết -->
        <nuxt-link :to="`/${article.slug}`" class="block">
          <div class="relative overflow-hidden rounded-lg">
            <img :src="article.image" alt="Thumbnail" class="object-cover w-full h-48" />
            <!-- Ngày tháng hiển thị trên hình ảnh -->
            <div class="absolute top-2 left-2 bg-red-600 text-white font-bold py-1 px-3 rounded">
              <span class="text-lg">{{ formatDate(article.date) }}</span>
            </div>
          </div>
        </nuxt-link>

        <!-- Tiêu đề và mô tả -->
        <div class="mt-4">
          <nuxt-link :to="`/${article.slug}`" class="block hover:text-green-400">
            <h2 class="text-xl font-semibold">{{ article.title }}</h2>
          </nuxt-link>
          <p class="mt-2">{{ article.description }}</p>
        </div>

        <!-- Meta và số bình luận -->
        <div class="mt-4 text-sm text-gray-400">
          <span>1 COMMENT</span>
        </div>
      </div>
    </div>

    <!-- Load thêm bài viết khi cuộn xuống -->
    <infinite-loading @infinite="loadMoreArticles" :identifier="page">
      <template #no-more>
        <p class="text-center text-gray-400 mt-6">Không còn bài viết nào nữa</p>
      </template>
    </infinite-loading>
  </div>
</template>

<script setup>
import siteMetaInfo from "~/data/sitemetainfo.js";
import { ref } from "vue";
import { useInfiniteScroll } from "@vueuse/core";

// Đặt danh sách bài viết vào reactive data
const articles = ref([]);
const page = ref(1);

// Lấy tất cả bài viết từ content/articles và lọc bằng JavaScript để loại bỏ bài viết có tag "review"
const loadArticles = async () => {
  const allArticles = await queryContent("/articles")
    .only(["title", "description", "image", "slug", "date", "tags"])
    .sort({ date: 1 })
    .skip((page.value - 1) * 6)  // Mỗi trang lấy 6 bài viết
    .limit(6)
    .find();

  // Lọc bài viết không có tag "review"
  const filteredArticles = allArticles.filter(article => !article.tags.includes('review'));
  
  articles.value.push(...filteredArticles);
};

const loadMoreArticles = async ($state) => {
  await loadArticles();
  if (articles.value.length < page.value * 6) {
    $state.complete(); // Dừng cuộn nếu hết bài
  } else {
    $state.loaded();
    page.value++;
  }
};

loadArticles(); // Load bài viết lần đầu khi trang được mở

// Cấu hình SEO cho trang blog
useSeoMeta({
  title: `${siteMetaInfo.title} | Blog`,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Tổng hợp các bài viết từ content/articles",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});

// Định dạng ngày tháng
const formatDate = (date) => {
  const options = { day: 'numeric', month: 'short' };
  return new Date(date).toLocaleDateString("en", options);
};

</script>

<style scoped>
/* Hiển thị ảnh 16:9 cho giao diện di động */
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}

/* Tùy chỉnh hiển thị bài viết trên di động */
@media (max-width: 640px) {
  .block {
    display: block;
    width: 100%;
  }
}
</style>
