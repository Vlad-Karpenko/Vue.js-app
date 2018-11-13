<template>
    <header class="header">
        <div class="container">
            <div class="header__title title">
                <span class="title__text">{{title}}</span>
            </div>
            <div class="header__slogan">{{slogan}}</div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "myHeader",
        data() {
            return {
                title: 'best pastry shop',
                slogan: 'build your cake'
            }
        }
    }
</script>

<style scoped>
    .header {
        padding-bottom: 30px;
    }

    .header__title {
        margin: 10px auto 20px;
        text-transform: uppercase;
        font-size: 24px;
        color: #ff5244;
        font-weight: bolder;
        font-style: italic;
        text-align: center;
    }

    .header__slogan {
        text-align: center;
        font-style: italic;
        font-size: 18px;
        text-transform: capitalize;
        letter-spacing: 2px;
    }
</style>