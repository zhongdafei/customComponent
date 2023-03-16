<template>
  <div :class="{ inputBox: true, 'is-disabled': disabled, border }">
    <div class="contextBox">
      <div class="context">
        <input
          type="text"
          readonly="readonly"
          @click.capture="isShowOptions"
          :placeholder="placeholder"
          :value="mainValue"
        />
      </div>
      <div class="icon">
        <span
          v-show="showClear"
          @click="handleClear"
          class="iconfont icon-close-circle"
        ></span>
        <span
          v-show="!showClear && showOptions"
          class="iconfont icon-chevron-up"
        ></span>
        <span
          v-show="!showClear && !showOptions"
          class="iconfont icon-chevron-down"
        ></span>
      </div>
    </div>
    <div ref="optionsBox" class="optionsBox" v-show="showOptions">
      <div class="triangle"></div>
      <ul v-if="options.length > 0">
        <li
          :class="{
            option: true,
            selected: mainValue == op[defaultProp.label],
          }"
          v-for="op in options"
          :key="op[defaultProp.value]"
          @click="handleClick(op)"
        >
          {{ op[defaultProp.label] }}
        </li>
      </ul>
      <ul v-else>
        <li class="empty">暂无内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-select",
  components: {},
  computed: {
    showClear() {
      return this.clearable && this.mainValue;
    },
  },
  props: {
    placeholder: { type: String, default: "请选择" },
    options: { type: Array },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    value: { type: [String, Number, Object] },
    defaultProp: {
      type: Object,
      default: () => {
        return {
          label: "label",
          value: "value",
        };
      },
    },
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        if (
          newVal !== null &&
          newVal !== undefined &&
          newVal !== "" &&
          this.options.length > 0
        ) {
          this.mainValue = this.options.find((item) => {
            return item[this.defaultProp.value] == newVal;
          })[this.defaultProp.label];
        } else {
          this.mainValue = newVal;
        }
      },
      immediate: true,
    },
    showOptions: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal, 1);
        if (newVal) {
          // 打开了,需要监听关闭
          setTimeout(() => {
            document.addEventListener("click", this.checkClick);
          }, 0);
        } else {
          // 关闭了
          document.removeEventListener("click", this.checkClick);
        }
      },
    },
  },
  data() {
    return {
      mainValue: "",
      showOptions: false,
    };
  },
  methods: {
    // 监听空白区的点击事件
    checkClick(event) {
      let dom = this.$refs.optionsBox;
      if (!dom.contains(event.target)) {
        // 不在菜单范围，隐藏即可
        if (this.showOptions) {
          this.showOptions = false;
          document.removeEventListener("click", this.checkClick);
        }
      }
    },
    // 清空
    handleClear() {
      this.mainValue = "";
      this.$emit("input", this.mainValue);
      this.$emit("change", {});
    },
    isShowOptions() {
      if (this.disabled) return;
      this.showOptions = !this.showOptions;
    },
    handleClick(row) {
      if (this.disabled) return;
      this.mainValue = row[this.defaultProp.label];
      this.$emit("input", row[this.defaultProp.value]);
      this.$emit("change", row);
    },
    closeOptions() {
      this.showOptions && (this.showOptions = false);
    },
  },
  mounted() {},
  unmounted() {
    document.removeEventListener("click", this.checkClick);
  },
};
</script>

<style scoped lang="scss">
.inputBox {
  min-width: 200px;
  min-height: 30px;
  line-height: 30px;
  position: relative;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0 6px;
  box-sizing: border-box;
  &:hover {
    border-color: #aaa;
  }
  &.border {
    border: 1rpx solid #ccc;
  }

  &.is-disabled {
    background-color: #f5f7fa;
    input {
      background-color: #f5f7fa;
      width: 100%;
    }
  }
  .contextBox {
    overflow: hidden;
    .context {
      display: inline-block;
      width: 90%;
      float: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
      cursor: pointer;
      input {
        height: 40px;
        border: none;
        cursor: pointer;
        &:focus-visible {
          outline: none;
        }
      }
    }
    .icon {
      float: right;
      width: 10%;
      line-height: 40px;
    }
  }
}
.optionsBox {
  max-height: 350px;
  width: 90%;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 50%;
  border-radius: 6px;
  transform: translateX(-50%);
  filter: drop-shadow(0 0 6px #ddd);

  .triangle {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    /*我们一般根据方向来写三角形，这样容易记忆；箭头指向的反方向的颜色设置为你想要的，然后箭头方向不要写，另外两个方向的颜色设置为transperent透明*/
    position: absolute;
    top: -10px;
    left: 20%;
    margin-left: -10px;
  }
  ul {
    overflow: auto;
    padding: 4px 0;
    margin: 0;

    li {
      list-style: none;
      white-space: nowrap;
      line-height: 28px;
      padding: 0 6px;
      text-align: left;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
      &.selected {
        color: rgb(244, 70, 99);
      }
    }
    .empty {
      text-align: center;
    }
  }
}
</style>
