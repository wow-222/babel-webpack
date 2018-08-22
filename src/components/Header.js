export const Header = {
  props: {
    name: {
      type: String
    }
  },
    template: 
    `<div class="header">
      <div @click="hide"><</div>
      <span>{{name}}</span>
    </div>`,
    methods:{
      hide() {
        this.$emit('back')
      }
    }
}

