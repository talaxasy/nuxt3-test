<script setup lang="ts">
const route = useRoute();

const { data, pending, error } = await useFetch<any>(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, { key: route.params.id.toString() });


</script>

<template>
    <div>
        <div v-if="pending">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else-if="error">
            such blog not found
        </div>
        <div v-else>
            <div>
                <h1>{{ data.title }}</h1>
                <p>{{ data.body }}</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>