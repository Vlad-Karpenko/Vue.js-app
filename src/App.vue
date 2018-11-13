<template>
    <div class="app">
        <my-header></my-header>
        <div class="container">
            <btn-add-layer></btn-add-layer>
            <total-price></total-price>
            <order-btn></order-btn>
            <main>
                <div class="row">
                    <div class="col-md-12 col-xl-7">
                        <cake-layers></cake-layers>
                    </div>
                    <div class="col-md-12 col-xl-5">
                        <cake-control></cake-control>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import myHeader from './components/myHeader'
    import btnAddLayer from './components/btn-addLayer'
    import cakeLayers from './components/cakeLayers'
    import cakeControl from './components/cakeControl'
    import totalPrice from './components/totalPrice'
    import orderBtn from './components/order'

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            myHeader, btnAddLayer, cakeLayers, cakeControl, totalPrice, orderBtn
        }
    }
</script>

<style scoped>
    .app {
        padding: 20px;
        background: linear-gradient(45deg, #EECFBA, #C5DDE8);
        min-height: 100vh;
    }
</style>
