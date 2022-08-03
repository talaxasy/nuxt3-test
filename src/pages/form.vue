<script setup lang="ts">

const displayAlert = (payload: any) => {
    alert(JSON.stringify(payload, null, 2));
}

</script>

<template>
    <div>
        <h1>Test form</h1>
        <test-form1 @create="displayAlert" />
    </div>
</template>

<style scoped lang="scss">
</style>