import {ComponentA} from "./components/module1";
import {getData} from "./common/api";


(()=>{
  new Vue({
    el: '#contable',
    data:{
      currentPage: 1,
    },
    mounted(){
      console.log(this.currentPage);
    },
    template: `<div @click="demo">88888
                <component-a></component-a>
              </div>`,
    methods:{
      demo(){
        console.log(8987987)
      }
    },
    components: {
      'component-a': ComponentA
    }
  })

  
})()
