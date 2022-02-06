<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        title="스터디1"
        icon="github"
      > 
       <router-link v-bind:to="'/vuestudy/data1'">스터디1</router-link>
      </card>

      <card
        title="스터디2"
        icon="cellphone-link"
      > 
        <router-link v-bind:to="'/vuestudy/data2'">스터디2</router-link>
      </card>

      <card
        title="스터디3"
        icon="alert-decagram"
      >  
        <router-link v-bind:to="'/vuestudy/data3'">스터디3</router-link>
      </card>

      <card
        title="스터디4"
        icon="arrange-bring-to-front"
      > 
          <router-link v-bind:to="'/vuestudy/data4'">스터디4</router-link>
      </card>
    </div>
    <div class="columns is-mobile">
      <card
        title="스터디5"
        icon="github"
      > 
       <router-link v-bind:to="'/vuestudy/data5'">스터디5</router-link>
      </card>

      <card
        title="스터디6"
        icon="cellphone-link"
      > 
        <router-link v-bind:to="'/vuestudy/data6'">스터디6</router-link>
      </card>

      <card
        title="스터디7"
        icon="alert-decagram"
      >  
        <router-link v-bind:to="'/vuestudy/data7'">스터디7</router-link>
      </card>

      <card
        title="스터디8"
        icon="arrange-bring-to-front"
      > 
          <router-link v-bind:to="'/vuestudy/data8'">스터디88</router-link>
      </card>
    </div>
  </section>
</template>

<script>
import Card from '../components/UI/Card.vue'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>

<style lang="scss" scoped></style> 
