<template>
    <el-container class="layout-container-demo">
        <el-aside style="min-height: 100vh; border-right: 1px solid #eee">
            <el-scrollbar>
                <Sidebar />
            </el-scrollbar>
        </el-aside>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
    
<script lang="ts" setup>
import Sidebar from "./Sidebar.vue";

</script>


<style scoped>
.layout-container-demo .el-header {
    /*position: relative;*/
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
    /*width: 240px;*/
    color: var(--el-text-color-primary);
    background: #fff !important;

    box-sizing: border-box;
}
.layout-container-demo .el-menu {
    border-right: none;
}
.layout-container-demo .el-main {
    padding: 0;
}
.layout-container-demo .toolbar {
    /*position: absolute;
    display: inline-flex;
    align-items: center;

    right: 20px;
    transform: translateY(-50%);*/
}
</style>
