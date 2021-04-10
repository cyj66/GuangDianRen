
export const keepScrollPosition = {
  data() {
    return {
      scrollY: 0
    }
  },
  activated() {
    window.scroll(0, this.scrollY)
  },
  deactivated() {
    this.scrollY = window.pageYOffset;
  }
}

export const userLoginRegister = {
  data() {
    return {
      usernameValue: '',
      usernameSuccess: false,
      usernameError: false,
      passwordValue: '',
      passwordSuccess: false,
      passwordError: false,
      reg: /^[0-9a-zA-Z]{5,20}$/
    }
  },
  methods: {
    getUsernameValueAndJudge() {
      this.usernameValue = document.querySelector('#Username').value
      if (this.reg.test(this.usernameValue)) {
        this.usernameSuccess = true
        this.usernameError = false
      } else if (!this.reg.test(this.usernameValue)){
        this.usernameSuccess = false
        this.usernameError = true
      }
    },
    showUsernameTag() {
      this.usernameSuccess = false
      this.usernameError = false
    },
    getPasswordValueAndJudge() {
      this.passwordValue = document.querySelector('#Password').value
      if (this.reg.test(this.passwordValue)) {
        this.passwordSuccess = true
        this.passwordError = false
      } else if (!this.reg.test(this.passwordValue)){
        this.passwordSuccess = false
        this.passwordError = true
      }
    },
    showPasswordTag() {
      this.passwordSuccess = false
      this.passwordError = false
    }
  }
}