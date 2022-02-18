<template>
    <h2 class="title">Collections</h2>
    <el-menu>
        <el-sub-menu index="1">
            <template #title>
                <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1" @click="push('/one')">Go to one</el-menu-item>
            <el-menu-item index="1-2" @click="push('/two')">Go to two</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2" @click="push('/three')">Go to three</el-menu-item>
        <el-menu-item index="3" @click="push('/four')">Go to four</el-menu-item>
    </el-menu>
</template>

<script lang="ts">
export default {
    methods: {
        push(path: string) {
            return this.$router.push(path);
        }
    }
}
</script>

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