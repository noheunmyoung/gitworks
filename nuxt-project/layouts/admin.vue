<template>
  <div>
    <navbar-admin />
      
      
    <b-tabs v-model="activeTab">
      <template v-for="tab in tabs">
          <b-tab-item
              v-if="tab.displayed"
              :key="tab.id"
              :value="tab.id"
              :label="tab.label">
              {{ tab.content }}
          </b-tab-item>
      </template>
    </b-tabs>
    
    <section class="main-content columns"> 
      <div class="container column is-10 w-full"> 
        <nuxt />
      </div> 
    </section> 
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NavbarAdmin from '../components/layout/NavbarAdmin.vue' 

@Component({ 
  components: { 
    NavbarAdmin 
  } 
}) 
 
export default class adminLayout extends Vue {  

 
  
  activeTab: string = 'menu1'
  multiline: boolean = true

  get baseTabs() {
      return [
        {
            id: 'menu1',
            label: 'menu1',
            content: 'Pictures: Lorem ipsum dolor sit amet.',
            displayed: true,
        },
        {
            id: 'menu2',
            label: 'menu2',
            content: 'Music: Lorem ipsum dolor sit amet.',
            displayed: true,
        },
        {
            id: 'menu3',
            label: 'menu3',
            content: 'Videos: Lorem ipsum dolor sit amet.',
            displayed: true,
        } 
      ]
    }

    get tabs() {
        const tabs = [...this.baseTabs] 
        return tabs
    } 
}
</script>

<style lang="scss" scoped> 
/* buefy, vuesax 등에서 제공하는 컴포넌트 자체의 디자인적 요소 변경을 위해 /deep/ 사용 */ 
// /deep/ .b-tabs .tab-content { 
// padding: 0rem; 
// } 
</style> 