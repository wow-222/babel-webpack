import {TabHome,TabPosts,TabArchive} from "./page/TabPage";
(()=>{
  Vue.component('tab-home', TabHome);
  Vue.component('tab-posts', TabPosts);
  Vue.component('tab-archive', TabArchive);
  new Vue({
    el: '#contable',
    data:{
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    },
    template: `<div>
    <ul class="tab-bar">
      <li 
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
        >{{tab}}
      </li>
    </ul>
    <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>`,
    computed: {
      currentTabComponent: function () {
        return 'tab-' + this.currentTab.toLowerCase()
      }
    }
  })
})()
