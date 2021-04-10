<template>
  <div class="login">
    <div class="logo"></div>
    <form action="/register" method="post">
      <ul>
        <li>
          <label for="Username">创建用户名：</label>
          <!-- autocomplete="off"清除历史记录 -->
          <input type="text" id="Username" name="User_Name" @input="getUsernameValueAndJudge()"
            @focus="showUsernameTag()" @blur="getUsernameValueAndJudge()" autocomplete="off">
        </li>

        <li>
          <p v-if="usernameSuccess" class="username-success">输入格式符合要求</p>
          <p v-else-if="usernameError" class="username-error">输入格式不符要求</p>
          <p v-else>请输入长度为5-20位的数字或字母</p>
        </li>

        <li>
          <label for="Password">输入密码：</label>
          <input type="password" id="Password" name="Pass_Word" @input="getPasswordValueAndJudge()"
            @focus="showPasswordTag()" @blur="getPasswordValueAndJudge()" autocomplete="off">
        </li>

        <li>
          <p v-if="passwordSuccess" class="password-success">输入格式符合要求</p>
          <p v-else-if="passwordError" class="password-error">输入格式不符要求</p>
          <p v-else>请输入长度为5-20位的数字或字母</p>
        </li>

        <li>
          <label for="Password2">确认密码：</label>
          <input type="password" id="Password2" name="Pass_Word2" @input="judgeIsSame()" @focus="showInputAgainTag()"
            @blur="judgeIsSame()" autocomplete="off">
        </li>

        <li>
          <p v-if="isSame" class="password-success">密码确认一致</p>
          <p v-else-if="isNotSame" class="password-error">密码确认不一致</p>
          <p v-else>请再次输入密码</p>
        </li>
        <li>
          <input type="button" value="注册" :disabled="isDisabled" @click="registerSubmit()">
        </li>
        <p>已有账号?去<router-link to="/login"><span>登录</span></router-link>
        </p>
      </ul>
    </form>
  </div>
</template>

<script>
  import {
    postUserRegister,
    getUserData
  } from 'network/userRequest.js'
  import {
    userLoginRegister
  } from 'common/mixin.js'
  export default {
    mixins: [userLoginRegister],
    data() {
      return {
        passwordValue2: '',
        isSame: false,
        isNotSame: false,
      }
    },
    methods: {
      judgeIsSame() {
        this.passwordValue2 = document.querySelector('#Password2').value
        if (this.passwordValue === this.passwordValue2) {
          this.isSame = true
          this.isNotSame = false
        } else if (this.passwordValue !== this.passwordValue2) {
          this.isSame = false
          this.isNotSame = true
        }
      },
      showInputAgainTag() {
        this.isSame = false
        this.isNotSame = false
      },
      registerSubmit() {
        getUserData().then(userList => {
          //console.log(userList)   
          if (!userList.some(value => value.username === this.usernameValue)) {
            this.$toast.show("注册成功!", 2000)
            postUserRegister(this.usernameValue, this.passwordValue).then(res => this.$router.push('/login'))
          } else {
            this.$toast.show("用户已存在!", 2000)
          }
        })
      }
    },
    computed: {
      isDisabled() {
        if (this.usernameSuccess && this.passwordSuccess && this.isSame === true)
          return false
        else {
          return true
        }
      }
    }
  }
</script>

<style scoped>
  .login {
    margin: 100px auto;
    width: 400px;
    height: 380px;
    border: 5px solid var(--color-school);
    box-shadow: 5px 5px 5px 2px var(--color-shadow);
  }

  .logo {
    height: 100px;
    background: url(~assets/img/logo/logo2.png) no-repeat 100px 15px;
    background-size: 200px 80px;
    margin-bottom: 30px
  }

  li:nth-child(2n+1) {
    margin-top: 10px;
    text-align: center;
  }

  li:nth-child(2n) {
    margin-top: 5px;
    text-align: center;
    color: gray;
    font-size: 13px
  }

  li label {
    display: inline-block;
    width: 100px;
    text-align: right;
    font-weight: 700;
  }

  li input {
    width: 200px;
    height: 30px;
    border: 1px solid var(--color-school);
    padding: 0 5px;
  }

  .username-success,
  .password-success {
    color: green;
  }

  .username-error,
  .password-error {
    color: red;
  }

  input[type="button"] {
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    font-weight: 700;
    background-color: var(--color-school);
  }

  input[type="button"]:hover {
    font-size: 18px
  }

  p {
    margin-top: 5px;
    text-align: center;
  }

  p span {
    color: var(--color-school);
    font-weight: 700;
  }
</style>