<script setup lang="ts">
const page = useState('page', () => 1);
const { data, pending } = await useLazyAsyncData<any[]>(() => $fetch('https://jsonplaceholder.typicode.com/posts', {
    params: {
        _page: page.value,
        _limit: 10,
    },
}))
const posts = useState<any[]>('posts', () => data.value || []);
const totalPages = useState('totalPages', () => 0)



const getMorePosts = async () => {
    page.value++;
    await $fetch<any[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _page: page.value,
            _limit: 10,
        },
        async onResponse({ response }) {
            totalPages.value = Math.ceil(+response.headers.get('X-Total-Count')! / 10);
            posts.value.push(...response._data);
        },
    })
}

</script>

<template>
    <div>
        <div v-if="pending" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="grid">
            <BlogCard v-for="post of (posts.length ? posts : data)" :key="(post.id as number)" :id="(post.id as number)"
                :title="(post.title as string).slice(0, 20)" :description="(post.body as string).slice(0, 40)" />
        </div>
        <div v-if="totalPages !== page" style="display: flex; padding-bottom: 20px;">
            <button @click="getMorePosts" class="btn btn-primary mx-auto" type="button">Load more</button>
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