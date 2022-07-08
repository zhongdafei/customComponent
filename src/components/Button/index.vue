<template>
  <div @click="handleClick" class="xf-button" :class="buttonClass">
    <slot v-if="!icon"></slot>
    <span v-if="icon" :class="['iconfont', icon]"></span>
  </div>
</template>

<script>
export default {
  name: "XfButton",
  components: {},
  props: {
    type: { type: String }, // default: 'nothing'  primary, success, info, warning, danger
    plain: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    icon: { type: String },
  },
  computed: {
    buttonClass() {
      let params = [];
      //背景色
      this.type && params.push("xf-button-" + this.type);
      this.plain && params.push("is-plain");
      this.round && params.push("xf-button-round");
      this.icon && params.push("is-circle");
      this.disabled && params.push("is-disabled");
      return params;
    },
    buttonStyle() {
      let params = {};
      //背景色
      let tempType = {
        primary: { real: "#409eff", empty: "#ecf5ff", emptyLine: "#b3d8ff" },
        success: { real: "#67c23a", empty: "#f0f9eb", emptyLine: "#c2e7b0" },
        info: { real: "#909399", empty: "#f4f4f5", emptyLine: "#d3d4d6" },
        warning: { real: "#e6a23c", empty: "#fdf6ec", emptyLine: "#f5dab1" },
        danger: { real: "#f56c6c", empty: "#fef0f0", emptyLine: "#fbc4c4" },
      };
      if (this.type) {
        params.color = "#fff";
        params.backgroundColor = tempType[this.type].real;
      }
      if (this.plain) {
        params.color = tempType[this.type]?.real || "#606266";
        params.background = tempType[this.type]?.empty || "#fff";
        params.borderColor = tempType[this.type]?.emptyLine || "#dcdfe6";
      }
      if (this.round) {
        params.borderRadius = "20px";
        params.padding = "12px 20px"; //不生效
      }
      return params;
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      if (this.disabled) return false;
      this.$emit('click')
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.xf-button {
  border: 1px solid #dcdfe6;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.xf-button-primary {
  color: #fff;
  background-color: #409eff;
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
  }
  &.is-plain {
    color: #409eff;
    background-color: #ecf5ff;
    border-color: #b3d8ff;
    &:hover {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
}
.xf-button-success {
  color: #fff;
  background-color: #67c23a;
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
  }
  &.is-plain {
    color: #67c23a;
    background-color: #f0f9eb;
    border-color: #c2e7b0;
    &:hover {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
}
.xf-button-info {
  color: #fff;
  background-color: #909399;
  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
  }
  &.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
}
.xf-button-warning {
  color: #fff;
  background-color: #e6a23c;
  &:hover {
    background: #f78989;
    border-color: #f78989;
  }
  &.is-plain {
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #f5dab1;
    &:hover {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
}
.xf-button-danger {
  color: #fff;
  background-color: #f56c6c;
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
  }
  &.is-plain {
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fbc4c4;
    &:hover {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
}
.xf-button-round {
  border-radius: 20px;
  padding: 12px 23px; //不生效
}
.is-circle {
  border-radius: 100px;
  padding: 12px; //不生效
}
.is-disabled {
  border-radius: 100px;
  padding: 12px; //不生效
  &.xf-button {
    border: 1px solid #dcdfe6;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.xf-button-primary {
    color: #fff;
    background-color: #409eff;
    &.is-plain {
      color: #409eff;
      background-color: #ecf5ff;
      border-color: #b3d8ff;
    }
  }
  &.xf-button-success {
    color: #fff;
    background-color: #67c23a;
    &.is-plain {
      color: #67c23a;
      background-color: #f0f9eb;
      border-color: #c2e7b0;
    }
  }
  &.xf-button-info {
    color: #fff;
    background-color: #909399;
    &.is-plain {
      color: #909399;
      background-color: #f4f4f5;
      border-color: #d3d4d6;
    }
  }
  &.xf-button-warning {
    color: #fff;
    background-color: #e6a23c;
    &.is-plain {
      color: #e6a23c;
      background-color: #fdf6ec;
      border-color: #f5dab1;
    }
  }
  &.xf-button-danger {
    color: #fff;
    background-color: #f56c6c;
    &.is-plain {
      color: #f56c6c;
      background-color: #fef0f0;
      border-color: #fbc4c4;
    }
  }
}
</style>