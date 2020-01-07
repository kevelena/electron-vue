<template>
  <div class="container-full">
    <span>to</span>
    <router-link to="/">主页</router-link>
    <button @click="SetAdd" class="w-25">testState++</button>
    <span>testState : {{ testState }}</span>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "to",
  computed: {
    ...mapState("test", ["testState"])
  },
  methods: {
    ...mapMutations("test", ["SetAdd"])
  }
};
</script>
