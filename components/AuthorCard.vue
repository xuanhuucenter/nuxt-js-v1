<template>
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <nuxt-img
        :src="author.author_image"
        loading="lazy"
        alt="me"
        class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full"
      />
      <div class="mb-2 mx-7 mt-4 justify-center items-center text-center">
        <!-- Tên, chức vụ và địa điểm gộp chung vào một khối -->
        <h1
          class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100"
        >
          {{ author.name }}
        </h1>
        <div class="md:text-lg text-gray-600 dark:text-blue-100">
          {{ author.position }}
        </div>
        <div class="text-gray-600 flex justify-center items-center dark:text-blue-100">
          <p>{{ author.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import author from "@/data/author.js";
</script>
