
<!-- 1. full 레이아웃 내의 페이지는 컨텐츠가 정중앙에 위치하도록 함 --> 
<template>
  <!-- tailwind css의 클래스인 h-screen를 적용하여, 브라우저 최대 height까지 영역이 되도록 함 --> 
  <div class="columns is-centered is-vcentered h-screen"> 
    <nuxt /> 
  </div> 
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator' 

@Component({ 
  components: {} 
}) 

export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped></style> 