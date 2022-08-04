<script setup lang="ts">
const emit = defineEmits<{
    (e: 'create', post: { name: string, firstName: string, lastName: string, age: number, companyName: string, aboutYou: string }): void
}>();

const state = reactive({
    name: '',
    firstName: '',
    lastName: '',
    age: 0,
    companyName: '',
    aboutYou: '',
    message: ''
});

const createPost = () => {
    emit('create', {
        name: state.name,
        firstName: state.firstName,
        lastName: state.lastName,
        age: state.age,
        companyName: state.companyName,
        aboutYou: state.aboutYou
    })
    state.name = '';
    state.firstName = '';
    state.lastName = '';
    state.age = 0;
    state.companyName = '';
    state.aboutYou = '';
}
</script>

<template>
    <form class="form" @submit.prevent="createPost">
        <h1>Create post</h1>
        <MyInput required v-model="state.name" type="text" placeholder="Name" />
        <MyInput required v-model="state.firstName" type="text" placeholder="First Name" />
        <MyInput required v-model="state.lastName" type="text" placeholder="Last Name" />
        <MyInput required v-model="state.age" type="number" placeholder="Age" />
        <MyTextarea required v-model="state.aboutYou" type="text" placeholder="About You" />

        <button type="submit">Create</button>

    </form>
</template>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;

    &>* {
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>