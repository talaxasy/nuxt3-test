<script setup lang="ts">

defineProps<{
    title: string,
    description: string,
}>()

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img src="https://img2.goodfon.ru/original/800x480/0/51/lake-nature-river-7467.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                {{ description }}
            </p>
            <a href="#" class="btn btn-primary">See</a>
        </div>
    </div>
</template>


<style scoped>
</style>