<script setup lang="ts">

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Nuxt 3</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink :active-class="'active'" class="nav-link" aria-current="page" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink :active-class="'active'" class="nav-link" to="/about">About</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink :active-class="'active'" class="nav-link" to="/blog">Blog</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink :active-class="'active'" class="nav-link" to="/form">Test form</NuxtLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark ">

                            <li>
                                <NuxtLink :active-class="'active'" class="nav-link" to="/custom/article1">Custom Article
                                    1
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :active-class="'active'" class="nav-link" to="/custom/article2">Custom Article
                                    2
                                </NuxtLink>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <NuxtLink :active-class="'active'" class="nav-link" to="/custom/article3">Custom Article
                                    3
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="d-flex">
                    <input class="form-control  me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
        </div>
    </nav>
</template>



<style scoped>
</style>