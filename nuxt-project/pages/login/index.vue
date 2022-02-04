<template> 
<div class="card"> 
    <header class="card-header"> 
        <h1 class="card-header-title has-text-primary has-text-weight-medium is-size-0 is-size-2-mobile" > 로그인 </h1> 
    </header> 
    <div class="card-content" style="background:#DFE3FF;"> 
        <p class="has-text-black">로그인 페이지입니다</p> 
        <section> 
            <b-field> 
                <b-input placeholder="아이디" rounded></b-input> 
            </b-field> 
            <b-field> 
                <b-input placeholder="비밀번호" rounded></b-input> 
            </b-field> <div class="flex justify-end"> 
            <b-button type="is-primary" rounded>로그인</b-button> 
            </div> 
        </section> 
    </div> 
</div> 
</template> 

<script lang="ts"> 
import { Vue, Component } from 'nuxt-property-decorator'
 // import { userStore } from '@/store' 
 
 @Component({ 
     components: {}, 
     layout: 'full' 
}) 

export default class Login extends Vue {}
 
</script> 

<style lang="scss" scoped></style> 
 