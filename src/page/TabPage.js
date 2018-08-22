import {ComponentA} from "./ComponentA";
import {ComponentB} from "./ComponentB";

export const TabHome = {
    data(){
        return{
            navName: '',
            demoList: [1,2,3,4,5],
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
    methods:{
        onClick(){
            this.navName = event.target.innerHTML
        },
        back(){
          this.navName = '';
        }
    },
    components:{
        ComponentA,
        ComponentB
    }
}

export const TabPosts = {
    template: `
    <div class="container">
      <span>TabPosts</span>
    </div>`
}

export const TabArchive = {
    template: `
    <div class="container">
      <span>TabArchive</span>
    </div>`
}