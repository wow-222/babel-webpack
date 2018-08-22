export const Header = {
    template: 
    `<div class="header">
      <div @click="hide"><</div>
      <span>CommonNav</span>
    </div>`,
    methods:{
      hide() {
        this.$emit('back')
      }
    }
}

