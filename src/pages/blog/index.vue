<script setup lang="ts">

const page = useState('page', () => 1)


const { data, pending, refresh } = await useFetch<any[]>('https://jsonplaceholder.typicode.com/posts', {
    params: {
        _page: page.value,
        _limit: 10,
    },
});

// watch(page, () => {
//     refresh();
// })

</script>

<template>
    <div>
        <!-- <button @click="page++">{{ page }}</button> -->
        <div v-if="pending" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="grid">
            <BlogCard v-for="post of data" :key="(post.id as number)" :id="(post.id as number)"
                :title="(post.title as string).slice(0, 20)" :description="(post.body as string).slice(0, 40)" />
        </div>



    </div>

</template>


<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}
</style>