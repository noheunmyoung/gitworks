<template>
  <div>
    <navbar-default />

    <section class="main-content columns"> 
      <aside class="column is-2 section"> 
        <p class="menu-label is-hidden-touch"> General </p> 
        <ul class="menu-list"> 
          <li v-for="(item, key) of items" :key="key"> 
            <nuxt-link :to="item.to" exact-active-class="is-active"> 
              <b-icon :icon="item.icon" /> {{ item.title }} 
            </nuxt-link> 
          </li> 
        </ul> 
      </aside> 
      <div class="container column is-10"> 
        <nuxt /> 
      </div> 
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NavbarDefault from '../components/layout/NavbarDefault.vue' 

@Component({ 
  components: { 
    NavbarDefault 
  } 
}) 

export default class DefaultLayout extends Vue { 
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
