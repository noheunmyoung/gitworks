<template>
  <div class="main-content">   
    <div class="conts">
      <!-- 목록 -->

      <ul class="test-list">
        <li v-for="(item, index) in lists" :key="index" :class="classObject"> 
          {{ item.text1 }}
        </li> 
      </ul>
      <br><br>

       <!--  목록 안에 목록 -->
      <ul class="test-list2">
        <li v-for="(item, index) in lists" :key="index"> 
          <p v-bind:class="errorTextColor">{{ item.text1 }}</p>
          <ul class="list-in-list">
            <li v-for="(initem, j) in item.inLists" :key="j"> 
              {{ initem.text2 }}
            </li> 
          </ul>
        </li> 
      </ul>

      <br><br>
      
       <!--  목록 안에 목록 -->
      <ul class="test-list2">
        <li v-for="(item, index) in lists" :key="index"> 
          <p v-bind:class="errorTextColor">{{ item.text1 }}</p>
          <ul class="list-in-list">
            <li v-for="(initem, j) in item.inLists" :key="j"> 
              {{ initem.text2 }}
            </li> 
          </ul>
        </li> 
      </ul>
    </div>  
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  components: {},
  layout: 'nohead', 
}) 
export default class extends Vue { 
   
  lists:any[] = [ 
    {text1:'목록1'},
    {text1:'목록2'},
    {
      text1:'목록3',
      inLists: [
        {text2:'목록안에 목록1'},
        {text2:'목록안에 목록2'}, 
      ]
    }
  ]  

  listType3: any = {
    name:'타이틀',
    opition: [],
    choiceOption: [
      {text1:'네네네', text2:'1111', text3:'222222'},
      {text1:'네네네', text2:'null', text3:'222222'},
    ]
  }

  isError : boolean = false
  get errorTextColor(): any {
    // if (this.isError) {
    //   return 'warning'
    // } else {
    //   return null
    // }

     return this.isError ? 'warning': null  
  }

  // classObject:any = {
  //   active: true,
  //   'text-danger': true
  // }


  isActive : boolean = true
  error : any = null
  get classObject (): any {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
 
</script>

<style lang="scss"> 
  * {
    box-sizing: border-box; 
  }
  .main-content {  
    .test-list {
      li {
        button { 
          background: none; 
        } 
        &.active  {  
          color: red;
        }
      }
    }

    .test-list2 {
      li {
        button { 
          background: none; 
        } 
        &.active  {  
          color: red;
        }
      }
    }

    .warning {
      color: red;
    }
  } 
 
</style>