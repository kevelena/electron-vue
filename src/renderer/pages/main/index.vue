<template>
  <div class="container-full">
    <span>{{ msg }}</span>
    <button @click="to()" class="w-25">to</button>
    <span>testState : {{ testState }}</span>
    <my-test></my-test>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: "index",
  data() {
    return {
      msg: "msg"
    };
  },
  computed:{
    ...mapState('test',['testState']),
  },
  methods:{
    to(){
      this.$router.push({path:'/to'})
    }
  }
};
</script>
<style>
</style>>
