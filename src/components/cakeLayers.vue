<template>
    <div class="cakeLayers">
        <div class="cakeLayers__layer" v-for="(layer,i) in layers" v-bind:class="'layer-'+layer.type"
             v-bind:style="{height:layer.height*10+'px'}"
             v-on:click="changeHeight(i,1)" v-on:contextmenu.prevent="changeHeight(i,-1)">
        </div>
    </div>
</template>

<script>
    export default {
        name: "cakeLayers",
        methods: {
            changeHeight(layer, num) {
                this.$store.dispatch('changeHeight', {layer: layer, num: num})
            }
        },
        computed: {
            layers() {
                return this.$store.getters.getLayers;
            }
        }
    }
</script>

<style scoped>
    .cakeLayers {
        margin-top: 70px;
    }

    .cakeLayers__layer {
        width: 500px;
        transition: 0.5s;
        border-radius: 5px;
    }

    .layer-chocolate {
        background: url("../assets/chocolate.png");
    }

    .layer-whiteBiscuit {
        background: url("../assets/white-biscuit.png");
    }

    .layer-darkBiscuit {
        background: url("../assets/dark-biscuit.png");
    }

    .layer-cookie {
        background: url("../assets/cookie.png");
    }

    @media screen and (max-width: 1199px) {
        .cakeLayers {
            margin: 10px 0 30px 0;
        }

        .cakeLayers__layer {
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 576px) {
        .cakeLayers__layer {
            width: 100%;
        }
    }
</style>