import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cakeLayers: [],
        typeLayers: {
            chocolate: {
                price: 70,
                label: 'Шоколадный слой'
            },
            whiteBiscuit: {
                price: 60,
                label: 'Светлый бисквит'
            },
            darkBiscuit: {
                price: 65,
                label: 'Темный бисквит'
            },
            cookie: {
                price: 50,
                label: 'Печенье'
            }
        },
        defaultType: 'whiteBiscuit',
        defaultHeight: 3,
    },
    getters: {
        getLayers(state) {
            return state.cakeLayers;
        },
        getLayersType(state) {
            return state.typeLayers;
        }
    },
    actions: {
        addLayers(context) {
            context.commit('addLayers')
        },
        deleteLayer(context, i) {
            context.commit('deleteLayer', i)
        },
        changeHeight(context, payload) {
            context.commit('changeHeight', payload)
        },
        check(context, payload) {
            context.commit('check', payload)
        }
    },
    mutations: {
        addLayers(state) {
            state.cakeLayers.push({
                type: state.defaultType,
                height: state.defaultHeight
            })
        },
        deleteLayer(state, i) {
            state.cakeLayers.splice(i, 1);
        },
        changeHeight(state, payload) {
            state.cakeLayers[payload.layer].height += payload.num;
            if (state.cakeLayers[payload.layer].height < 3) {
                state.cakeLayers[payload.layer].height = 3
            } else if (state.cakeLayers[payload.layer].height > 20) {
                state.cakeLayers[payload.layer].height = 20
            }
        },
        check(state, payload) {
            state.cakeLayers[payload.i].height = payload.height
        }
    }
})