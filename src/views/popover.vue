<template>
  <div class="app-container">
    <popover
      title="标题"
      ref="popover"
      placement="right"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容"
    >
      <xf-button slot="reference">hover 激活</xf-button>
    </popover>
    <br />
    <popover
      title="标题"
      ref="popover"
      placement="right"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容"
    >
      <xf-button slot="reference">click 激活</xf-button>
    </popover>
    <br />
    <popover
      title="标题"
      ref="popover"
      placement="right"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容"
    >
      <!-- <xf-button slot="reference">focus 激活</xf-button> -->
    </popover> 
    <xf-button v-popover:popover>focus 激活</xf-button>
  </div>
</template>

<script>
import popover from "../components/Popover/index.vue";
export default {
  name: "",
  components: { popover },
  data() {
    return {};
  },
  directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      console.log(el);
      // el.focus()
    }
  }
},
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
</style>