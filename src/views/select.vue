<template>
  <div>
    <!-- v-model="value" -->
    <z-select
      :options="data" 
      clearable
      v-model="mainValue"
      placeholder="请选择"
      @change="handleChange"
    >
    </z-select>
    <z-select
      :options="data1" 
      clearable
      v-model="mainValue2"
      placeholder="请选择"
      @change="handleChange1"
    >
    </z-select>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  watch: {
    mainValue(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
  data() {
    return {
      data: [
        { label: "篮球", id: 1, value: 1 },
        { label: "足球", id: 2, value: 2 },
        { label: "羽毛球", id: 3, value: 3 },
      ],
      data1: [],
      mainValue: "3",
      mainValue2: "",
    };
  },
  methods: {
    handleChange(row) {
      this.data1 = [
        { label: "篮球", id: 1,value: 1},
        { label: "足球", id: 2,value: 2},
      ];
      this.mainValue2 = "";
    },
    handleChange1(row) {
      console.log(row);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
</style>
