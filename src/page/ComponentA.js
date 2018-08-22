import {Header} from "../components/Header"
export const ComponentA = {
    data() {
      return {}
    },
    props: {
      name: {
        type: String
      }
    },
    template: `<transition name="slide">
    <div class="nav-wrapper">
      <Header @back=back></Header>
      <span>{{name}}</span>
    </div>
    </transition>`,
    methods:{
      back() {
        this.$emit('back')
      }
    },
    components:{
      Header
    },
    mounted(){
      console.log("组件一进来了")
    }
}

