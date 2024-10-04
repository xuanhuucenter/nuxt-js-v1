<template>
  <div v-if="article" class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
    <!-- Ngày đăng bài -->
    <p class="text-center font-bold my-5 text-indigo-500">
      {{ formatDate(article.date) }}
    </p>

    <!-- Tiêu đề bài viết -->
    <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
      {{ article.title }}
    </h1>

    <!-- Tác giả -->
    <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      <nuxt-img
        :src="author.author_image"
        loading="lazy"
        alt=""
        class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
      />
      <div>
        <div class="text-slate-900 dark:text-slate-200">
          {{ author.name }}
        </div>
        <a
          target="_blank"
          :href="`https://twitter.com/${author.socials.twitter}`"
          class="text-sky-500 hover:text-sky-600 dark:text-sky-400"
        >
          @{{ author.socials.twitter }}
        </a>
      </div>
    </div>

    <!-- Hình ảnh bài viết -->
    <img
      class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm"
      :src="article.image"
      alt="Article Image"
    />

    <!-- Nội dung bài viết -->
    <ContentRenderer class="prose min-w-full p-10 mx-auto" :value="article">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </div>

  <!-- Thông báo nếu không tìm thấy bài viết -->
  <div v-else>
    <p>Content not found</p>
  </div>
</template>

<script setup>
// Import dữ liệu tác giả
import author from '@/data/author.js';
import { ref } from 'vue';
const route = useRoute();
const article = ref(null);

// Lấy dữ liệu từ queryContent
const { data } = await useAsyncData('article', async () => {
  // Kiểm tra bài viết trong cả hai thư mục articles và review-san
  let fetchedArticle = await queryContent('/articles')
    .where({ slug: route.params.slug })
    .findOne();

  // Nếu không tìm thấy trong articles, tìm trong review-san
  if (!fetchedArticle) {
    fetchedArticle = await queryContent('/review-san')
      .where({ slug: route.params.slug })
      .findOne();
  }

  console.log('Fetched Article:', fetchedArticle); // In dữ liệu bài viết ra console để kiểm tra
  return fetchedArticle;
});

// Gán dữ liệu lấy được vào biến reactive article
article.value = data.value;

// Hàm format ngày
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en', options);
};

// Cập nhật SEO Metadata
useSeoMeta({
  title: article.value?.title ?? 'No Title',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: article.value?.description ?? 'No Description',
    },
  ],
});
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
