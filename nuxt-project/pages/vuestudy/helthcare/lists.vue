<template>
  <div class="list-wrap">
    <!-- 기본리스트 -->
     <ul class="basic-list">
       <li v-for="(item, i) in basicLists" :key="i" :class="item.class">
         {{item.text}} 
       </li>
     </ul>
      <!-- 다중기본리스트 -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  components: {},
  layout: 'nohead', 
}) 
export default class extends Vue { 
  basicLists: any = [{text: '목록1', class:'on'}, {text: '목록2', class:''}]
  
}
</script>

<style lang="scss" scoped>  
</style>