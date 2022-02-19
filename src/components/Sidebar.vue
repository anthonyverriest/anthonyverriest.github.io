<template>
    <h2 class="title">Collections</h2>
    <el-menu :default-active="$route.path" :router="true">
        <el-sub-menu
            v-for="(collection, index) in collections"
            :index="index.toString()"
            :key="index"
        >
            <template #title>
                <span>{{ collection.title }}</span>
            </template>
            <el-menu-item
                v-for="(page, index) in collection.pages"
                :index="page"
            >{{ page.substring(1) }}</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>


<script lang="ts" setup>

import { Pages } from '../router/router';

const collections = [
    {
        title: 'Philosophy',
        pages: [Pages.Machiavelli]
    },
    {
        title: 'Writing',
        pages: [Pages.Copywriting]
    },
]
</script>

<style scoped>
.el-menu {
    border-right: none !important;
}
.title {
    padding-left: 20px;
}
</style>