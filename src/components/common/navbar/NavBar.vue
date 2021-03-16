<template>
    <div class="parent">
        <div class="nav-bar">
            <div class="logo">
                <slot name="logo"></slot>
            </div>
            <div class="list">
                <slot name="list"></slot>
            </div>
            <div class="search">
                <slot name="search"></slot>
            </div>
            <div class="user">
                <slot name="user"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style scoped>
    .parent {
        height: 80px;
    }

    .nav-bar {
        position: fixed;
        top: 0px;
        z-index: 999;
        height: 80px;
        width: 100%;
        background-color: rgb(250, 248, 248);
        box-shadow: 0 1px 3px 1px var(--color-shadow);
    }

    .logo {
        float: left;
        width: 15%;
    }

    .list {
        float: left;
        width: 30%;
    }

    .search {
        float: left;
        width: 40%
    }

    .user {
        float: left;
        width: 15%;
    }
</style>