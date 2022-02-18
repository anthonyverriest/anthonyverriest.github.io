<template>
    <el-container class="layout-container-demo">
        <el-aside style="min-height: 100vh; border-right: 1.5px solid #eee">
            <Sidebar />
        </el-aside>

        <el-container>
            <el-main class="view">
                <router-view></router-view>
            </el-main>

            <el-aside></el-aside>
        </el-container>
    </el-container>
</template>
    
<script lang="ts" setup>
import Sidebar from "./Sidebar.vue";

</script>


<style scoped>
.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: #fff !important;
    box-sizing: border-box;
}

.view {
    /*padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 20vh;
    padding-right: 20vh;*/
    padding: 0;
}
</style>
