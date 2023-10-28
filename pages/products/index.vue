<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="item in products">
        <ProductCard :product="item"></ProductCard>
      </div>
    </div>
  </div>
</template>
  
<script setup>

definePageMeta({
  layout: 'products'
});

const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
  title: 'Nuxt Products'
});

</script>