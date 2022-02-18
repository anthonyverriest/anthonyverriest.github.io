<template>
    <el-container style="height:100vh; width: 100%;" class="center">
        <div class="quote">
            <q>If you only do what you can do, you will never be more than you are now</q>
        </div>

        <div style="width: 30px;"></div>

        <el-aside style="height: 60vh;">
            <el-scrollbar>
                <el-timeline>
                    <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :timestamp="activity.timestamp"
                    >{{ activity.content }}</el-timeline-item>
                </el-timeline>
            </el-scrollbar>
        </el-aside>
    </el-container>
</template>

<style scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.quote {
    display: flex;
    justify-content: right;
    align-items: center;
    /*height: 100%;*/
}
</style>

<script lang="ts" setup>
const activities = [
    {
        content: 'Added Machiavelli',
        timestamp: '2022-02-22',
    },
    {
        content: 'Creation of website',
        timestamp: '2022-02-22',
    }

]
</script>