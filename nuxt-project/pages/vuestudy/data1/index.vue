<template>
  <div class="main-content">   
    <div class="conts">
      <!-- 인덱스 찾아서 클래스 넣기 -->
      <ul class="test-list">
        <li v-for="item in items"> 
          {{ item.title }}
        </li> 
      </ul>

       <!-- 인덱스 찾아서 클래스 넣기 -->
      <ul class="test-list2">
        <li v-for="item in items"> 
          {{ item.title }}
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
  
  items:any[] = [
    {title:'어서오세요 열심히 합시다'},
    {title:'네네네네'}
  ] 

  //1. 인덱스 찾아서 클래스 넣기 
	// get item() : string  {
  //   return this.title.split('\n')
  // } 
  selected:any = null
  choose(index:string) {
    this.selected = index
  } 
 

 
   //2.스크롤시 상단 픽스 하기

  // laptopPrice: number = 1400
  // quantity: number = 0
  // calculateTotal(): number {
  //   return this.laptopPrice * this.quantity
      //alert("handleScroll")
  // } 
 
  limitPosition: number = 58
  //lastPosition: number = 0 
  scrolled: boolean = false 

  handleScroll() { 
    // if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
    //   this.scrolled = true;  //move up 
    // }
    // if (this.lastPosition > window.scrollY) {
    //   this.scrolled = false;  // move down 
    // } 
    this.scrolled = window.scrollY > this.limitPosition;  
  }

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }  
  destroyed() { 
    window.removeEventListener('scroll', this.handleScroll);
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
  } 
 
</style>