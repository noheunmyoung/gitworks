<template>
  <div> 
    <ul class="tab-lebel1">
      <li v-for="(item, i) in tablist" :key="i">
        <button type="button" @click="currentView = choose(item)" :class="{'active':item == selected }">{{ item.menu}} </button> 
         <component :is="item.menuCont + (i + 1)"></component>
      </li>
    </ul>
    
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator' 
import compp1 from '@/components/comp-sample/compp1.vue'
import compp2 from '@/components/comp-sample/compp2.vue'
import compp3 from '@/components/comp-sample/compp3.vue'
import compp4 from '@/components/comp-sample/compp4.vue'
@Component({
  components: {
    compp1,
    compp2,
    compp3,
    compp4,
  },
  layout: 'nohead', 
}) 
export default class extends Vue { 
  
  tablist:any[] = [
    {menu:'메뉴1', menuCont:'aaa'},
    {menu:'메뉴2', menuCont:'bbb'},
    {menu:'메뉴3', menuCont:'ccc'},
    {menu:'메뉴4', menuCont:'ddd'},
  ]  
}
</script>

<style lang="scss"> 
  * {
    color: #000;
  }
  .tab-lebel1 {
    
  }
  
 
</style>