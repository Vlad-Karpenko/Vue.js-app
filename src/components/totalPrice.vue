<template>
    <div class="totalPrice" v-show="layers.length>0">
        <div class="totalPrice__amount">Price: <span class="totalPrice__amount_bold">{{price}} UAH</span></div>
    </div>
</template>

<script>
    export default {
        name: "totalPrice",
        computed: {
            layers() {
                return this.$store.getters.getLayers;
            },
            titleLayers() {
                return this.$store.getters.getLayersType;
            },
            price() {
                let sum = 0;
                let test = this.titleLayers;
                this.layers.forEach(function (layer) {
                    sum += layer.height * test[layer.type].price;
                });
                return sum
            }
        }
    }
</script>

<style scoped>
    .totalPrice {
        margin-bottom: 20px;
        text-align: center;

    }

    .totalPrice__amount {
        font-size: 18px;
        font-style: italic;
        display: inline-block;
        letter-spacing: 1px;
    }

    .totalPrice__amount_bold {
        font-weight: bolder;
    }
</style>