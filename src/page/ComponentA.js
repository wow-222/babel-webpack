import {Header} from "../components/Header"
export const ComponentA = {
    data() {
      return {
        list: ["文件夹","应用1"]
      }
    },
    props: {
      name: {
        type: String
      }
    },
    template: `<transition name="slide">
    <div class="nav-wrapper">
      <Header @back=back :name=name></Header>
      <span>文件夹</span>
      <span>应用1</span>
    </div>
    </transition>`,
    methods:{
      back() {
        this.$store.dispatch({
          type: 'setNavName',
          name: ''
        })
      }
    },
    components:{
      Header
    },
    mounted(){
      console.log("组件一进来了")
    }
}

