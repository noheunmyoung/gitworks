<template>
  <div class="main-content"> 
    <div class="tit">테스트<br>테스트</div>
    <header :class="{'headroom--unpinned': scrolled}" v-on:scroll="handleScroll" class="headroom header">Header</header> 
    
    <div class="conts">
      <!-- 인덱스 찾아서 클래스 넣기 -->
      <ul class="test-list">
        <li v-for="item in items"> 
          <button type="button" @click="currentView = choose(item)" :class="{'active':item == selected }">{{ item.title }}</button>
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
    color: #fff;
  }
  .main-content {
    background: #000;
    height: 100rem; 
    .tit {
      height:58px;
      background: red; 
    }
    .header {
      width: 100%;
      height:104px;
      background: green; 
      z-index: 1; 
      position: relative;
      top:auto;
    } 
  }
   
   
  .headroom--unpinned { 
    position: fixed;
    top:0; 
    & + .conts { 
      padding-top:120px;  
    }
    .conts { 
      padding-top:20px; 
      color: #fff; 
    }
  } 
 
   .test-list {
     li {
        button { 
          background: none;
          color: #fff;
        } 
        &.active  {  
          color: red;
        }
     }
   }
  
 
</style>