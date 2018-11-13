<template>
    <div class="order" v-show="layers.length>0">
        <button type="button" class="btn btn-dark" v-on:click="addToBasket">Buy</button>
        <div class="order-alert" v-show="alert">
            <div class="alert alert-success" role="alert">
                Thank you for the order!
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {
                alert: false
            }
        },
        methods: {
            addToBasket() {
                this.alert = true;
                setTimeout(() => {
                    this.alert = false;
                    this.layers.splice(0, this.layers.length)
                }, 1000);

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
    .order {
        text-align: center;
    }

    .order-alert {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }

    .alert-success {
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -55%);
        padding: 40px;
        font-size: 20px;
    }
</style>