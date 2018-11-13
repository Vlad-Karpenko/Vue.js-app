<template>
    <div class="btn-add-layer">
        <button class="btn btn-success" v-on:click="addLayer">Add layer to your cake</button>
    </div>
</template>

<script>
    export default {
        name: "btn-addLayer",
        methods: {
            addLayer() {
                this.$store.dispatch('addLayers')
            }
        }
    }
</script>

<style scoped>
    .btn-add-layer {
        margin-bottom: 30px;
        text-align: center;
    }
</style>