export default {
    namespaced:true,
    state: {
        testState:0,
    },
    mutations: {
        SetData(state,obj){
            state[obj.k] = obj.v;
        },
        SetTestState(state,n){
            state.testState = n;
        },
        SetAdd(state){
            state.testState++;
        }
    },
    actions:{
        testAction({commit,rootGetters},n){
            commit('SetTestState',n);
        }
    }
}
