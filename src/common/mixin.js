export const collectMixin={
    data() {
        return{
        isOrangered: false
        }
      },
      methods: {
        iClick() {
          this.isOrangered = !this.isOrangered
        }
      }
}

export const keepScrollPosition={
    data(){
      return {
        scrollY:0
      }
    },
    activated(){
      window.scroll(0,this.scrollY)
    },
    deactivated(){
      this.scrollY=window.pageYOffset;
    }
}