<script setup lang="ts">

defineProps<{
    title: string,
    description: string,
    id: number;
}>()

</script>

<template>
    <div class="card" style="width: 100%;">
        <img src="https://img2.goodfon.ru/original/800x480/0/51/lake-nature-river-7467.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                {{ description }}
            </p>
            <NuxtLink :to="`/blog/${id}`" class="btn btn-primary">See</NuxtLink>
        </div>
    </div>
</template>


<style scoped>
</style>