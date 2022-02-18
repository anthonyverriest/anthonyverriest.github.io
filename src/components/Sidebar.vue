<template>
    <h2 class="title">Collections</h2>
    <el-menu :default-active="$route.path" :router="true">
        <el-sub-menu index="1">
            <template #title>
                <span>Navigator One</span>
            </template>
            <el-menu-item index="/machiavelli">Machiavelli</el-menu-item>
            <el-menu-item index="/two">Go to two</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">Go to three</el-menu-item>
        <el-menu-item index="3">Go to four</el-menu-item>
    </el-menu>
</template>


<script lang="ts" setup>

</script>

<style scoped>
.el-menu {
    border-right: none !important;
}
.title {
    padding-left: 20px;
}
</style>