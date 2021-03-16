export const collectMixin={
    data() {
        return{
        isOrange: false
        }
      },
      methods: {
        iClick() {
          this.isOrange = !this.isOrange
        }
      }
}