<template>
  <li
    :class="{ option: true, selected: $parent.value == label }"
    @click="handleClick(label)"
  >
    {{ label }}
  </li>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    label: { type: String },
    value: { type: [String, Number, Object] },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(label) {
      // console.log(label,this);
      // this.$emit("changeValue", label);
      this.$parent.value = label
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
</style>