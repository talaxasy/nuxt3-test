<template>
    <div>
        <div class="navbar">
            <NuxtLink to="/">Home (NuxtLink)</NuxtLink>
            <NuxtLink to="/about">About (NuxtLink)</NuxtLink>
            <button @click="$router.push('/')">Home (button)</button>
            <button @click="$router.push('/about')">About (button)</button>
        </div>
        <slot />
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    gap: 20px;
}
</style>