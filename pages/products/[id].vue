<template>
  <div>
    <Head>
      <Title>Nuxt | Product {{ product.title }}</Title>
      <Meta name="descroption" :content="product"></Meta>
    </Head>
    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>
  
<script setup>

const { id } = useRoute().params;

const url = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(url, { key: id});

if(!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not Found', fatal: true})
}

definePageMeta({
  layout: 'products'
});


</script>