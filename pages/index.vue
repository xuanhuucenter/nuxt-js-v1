<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="md:w-1/3 p-2 md:flex md:justify-center">
        <AuthorCard />
      </div>
      <div class="md:w-2/3 px-8">
        <AuthorIntro></AuthorIntro>
        <Expertise></Expertise>
        <TimeLine></TimeLine>

        <!-- Danh sách bài viết -->
        <div class="mt-10">
          <h2 class="text-3xl font-bold mb-6 dark:text-white">Latest Articles</h2>
          <div v-for="article in articles" :key="article.slug" class="mb-8">
            <nuxt-link :to="`/${article.slug}`">
              <h3 class="text-xl font-semibold hover:text-blue-500 dark:text-white">
                {{ article.title }}
              </h3>
            </nuxt-link>
            <p class="text-gray-500 dark:text-gray-400">
              {{ article.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AuthorCard from "@/components/AuthorCard.vue";
import AuthorIntro from "@/components/AuthorIntro.vue";
import Expertise from "@/components/Expertise.vue";
import TimeLine from "@/components/TimeLine.vue";
import siteMetaInfo from "@/data/sitemetainfo";

// Lấy danh sách bài viết từ content
const { data: articles } = await useAsyncData('articles', () =>
  queryContent("/articles")
    .only(["title", "description", "slug"])
    .sort({ date: -1 }) // Sắp xếp theo ngày mới nhất
    .find()
);

// Cấu hình SEO cho trang chủ
useSeoMeta({
  title: siteMetaInfo.title,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: siteMetaInfo.description,
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style></style>
