<template>
  <div  ref="reference" class="popover-container">
    <slot  name="reference"></slot>
    <div class="main_body"  ref="popper" v-show="show">
      <h1>{{title}}</h1>
       <!-- style="width:200px;" -->
      <div v-if="content" :style="contentStyle" class="content">{{content}}</div>
    </div>
  </div>
</template>

<script>
import {on} from '../../utils/dom'
export default {
  name: '',
  components: {
   
  },
  computed:{
     contentStyle(){
     let style = {}
      style.width = this.width + 'px'
      return style
    }
  },
  props:{
    title:{type:String},
    content:{type:String}, 
    placement:{type:String}, 
    width:{type:String},
    trigger:{type:String},
  },
  data() {
    return {
      show:false
    }
  },
  methods: { 
  },
  mounted() { 
    let reference = this.$refs.reference   
    if(this.trigger == 'click'){
      on(reference,this.trigger,()=>{
        this.show = !this.show
      })
    }else if(this.trigger == 'hover'){
      on(reference,'mouseenter',()=>{
        this.show = true
      })
      on(reference,'mouseleave',()=>{
        this.show = false
      })
      
    }else if(this.trigger == 'focus'){
      on(reference,'mousedown',()=>{
        this.show = true
      })
      on(reference,'mouseup',()=>{
        this.show = false
      })
      
    }
  }
}
</script>

<style scoped lang="scss">
.popover-container{
  }
.main_body{
  padding: 15px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  h1{
    text-align: left;
    padding: 0px 0 10px;
  }
  .content{ 
    text-align: left;
    font-size: 15px;
  }
}
</style>