import {
  ComponentA
} from "./page/ComponentA";
import {
  ComponentB
} from "./page/ComponentB";
import store from './store';
(() => {
  new Vue({
    el: '#contable',
    store,
    data() {
      return {
        demoList: [1, 2, 3, 4, 5],
      }
    },
    created() {
      window.addEventListener("resize", this.setRem());
    },
    computed: {
      navName() {
        return this.$store.getters.navname
      }
    },
    template: `
  <div class="container">
      <ul class="nav-bar">
           <li v-for="value of demoList" @click="onClick">nav{{value}}</li>
      </ul>
      <component-a v-if="navName === 'nav1'" @back=back :name=navName></component-a>
      <component-b v-else-if="navName === 'nav2'" @back=back :name=navName></component-b>
  </div>`,
    methods: {
      onClick() {
        this.$store.dispatch({
          type: 'setNavName',
          name: event.target.innerHTML
        })
      },
      back() {
        this.navName = '';
      },
      setRem() {
        var html = document.getElementsByTagName("html")[0];
        var width = html.getBoundingClientRect().width;
        html.style.fontSize = width / 18.75 + "px";
      }
    },
    components: {
      ComponentA,
      ComponentB
    }
  })
})()
