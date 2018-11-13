<template>
    <div class="cakeControl" v-show="layers.length>0">
        <table class="cakeControl__table table">
            <thead>
            <tr>
                <th class="table__number table__th" scope="col">№</th>
                <th class="table__title table__th" scope="col">Title</th>
                <th class="table__height table__th" scope="col">Height of layer</th>
                <th class="table__deleteLayer table__th" scope="col">Delete layer</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(layer,i) in layers">
                <td class="table__td">{{i+1}}</td>
                <td class="table__td">
                    <select class="form-control form-control_focus" v-model="layer.type">
                        <option v-bind:value="key" v-for="(title,key) in titleLayers">{{title.label}}</option>
                    </select>
                </td>
                <td class="table__td">
                    <input type="number" min="3" max="20" class="form-control form-control_center form-control_focus"
                           v-model.number="layer.height" v-on:keyup="check(i,layer.height)">
                </td>
                <td class="table__td " v-on:click="deleteLayer(i)">
                    <div class="btn-danger btn-deleteLayer">X</div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "cakeControl",
        computed: {
            layers() {
                return this.$store.getters.getLayers;
            },
            titleLayers() {
                return this.$store.getters.getLayersType;
            }
        },
        methods: {
            deleteLayer(i) {
                this.$store.dispatch('deleteLayer', i);
            },
            check(i, height) {
                if (height < 3) {
                    this.$store.dispatch('check', {i: i, height: 3})
                } else if (height > 20) {
                    this.$store.dispatch('check', {i: i, height: 20})
                }
            }
        }
    }
</script>

<style scoped>
    .table__th {
        border-bottom: 1px solid #dee2e6;
        border-top: none;
        text-align: center;
        font-weight: bolder;
    }

    .table__td {
        border: none;
        vertical-align: middle;
        text-align: center;
    }

    .table__title {
        width: 220px;
    }

    .form-control_center {
        text-align: center;
    }

    .form-control_focus:focus {
        border: 1px cadetblue solid;
        box-shadow: none;
        outline: none;
    }

    .btn-deleteLayer {
        color: white;
        border-radius: 10px;
        display: inline-block;
        padding: 8px 15px;
        cursor: pointer;
    }

</style>