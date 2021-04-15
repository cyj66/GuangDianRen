<template>
  <div class="login">
    <div class="logo"></div>
    <form>
      <ul>
        <li class="username">
          <label for="Username">用户名：</label>
          <input
            type="text"
            id="Username"
            name="User_Name"
            @input="getUsernameValueAndJudge()"
            @focus="showUsernameTag()"
            @blur="getUsernameValueAndJudge()"
            autocomplete="off"
          />
        </li>

        <li class="username-tag">
          <p v-if="usernameSuccess" class="username-success">
            输入格式符合要求
          </p>
          <p v-else-if="usernameError" class="username-error">
            输入格式不符要求
          </p>
          <p v-else>请输入长度为5-20位的数字或字母</p>
        </li>

        <li class="password">
          <label for="Password">密码：</label>
          <input
            type="password"
            id="Password"
            name="Pass_Word"
            @input="getPasswordValueAndJudge()"
            @focus="showPasswordTag()"
            @blur="getPasswordValueAndJudge()"
            autocomplete="off"
          />
        </li>

        <li class="password-tag">
          <p v-if="passwordSuccess" class="password-success">
            输入格式符合要求
          </p>
          <p v-else-if="passwordError" class="password-error">
            输入格式不符要求
          </p>
          <p v-else>请输入正确的密码</p>
        </li>
      </ul>
      <div class="login-bottom">
        <input
          type="button"
          value="登录"
          @click="loginSubmit()"
          :disabled="isDisabled"
        />
        <p>
          没有账号?去<router-link to="/register"><span>注册</span></router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { postUserLogin, getUserData } from "network/userRequest.js";

import { getAnswerData, getAnswerLikeData } from "network/answerRequest.js";
import { getTopicData, getTopicLikeData } from "network/topicRequest.js";

import { tokenSignTime } from "common/tokenSignTime.js";
import { userLoginRegister } from "common/mixin.js";

export default {
  mixins: [userLoginRegister],
  data() {
    return {
      userToken: "",
      messageCount: 0,
    };
  },

  methods: {
    ...mapMutations(["changeLogin", "changeMessageCount"]),
    removeToken() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("signTime");
    },
    loginSubmit() {
      getUserData().then((userList) => {
        if (
          userList.some(
            (value) =>
              value.username === this.usernameValue &&
              value.password === this.passwordValue
          )
        ) {
          postUserLogin(this.usernameValue, this.passwordValue).then((res) => {
            //返回{token:xxxxx} console.log(res)
            //token加在请求头中才有权限请求到后台的数据，但此处是在响应拦截器中获取token
            this.$toast.show("登录成功!", 2000);

            this.userToken = res.token;
            // 将用户信息保存到vuex中
            this.changeLogin({
              token: this.userToken,
              username: this.usernameValue,
              signTime: new Date().getTime(),
            });
            this.getLikeMyTopicList();
            this.getLikeMyAnswerList();
            this.getAnswerMyTopicList();
            setTimeout(() => {
              this.changeMessageCount(this.messageCount);
              console.log(this.$store.state.messageCount);
              this.$router.push("/home");
              tokenSignTime();
            }, 1000);
          });
        } else if (
          !userList.some((value) => value.username === this.usernameValue)
        ) {
          this.$toast.show("用户不存在!", 2000);
          this.removeToken();
        } else {
          this.$toast.show("密码错误!", 2000);
          this.removeToken();
        }
      });
    },

    //获取消息数量
    getLikeMyTopicList() {
      getTopicData().then((res1) => {
        getTopicLikeData().then((res2) => {
          for (let i = 0; i < res1.length; i++) {
            if (res1[i].username === this.$store.state.username) {
              for (let j = 0; j < res2.length; j++) {
                if (res2[j].topicId === res1[i].topicId) {
                  if (res2[j].date > Number(this.$store.state.signTime))
                    this.messageCount++;
                }
              }
            }
          }
        });
      });
    },
    getLikeMyAnswerList() {
      getAnswerData().then((res1) => {
        getAnswerLikeData().then((res2) => {
          for (let i = 0; i < res1.length; i++) {
            if (res1[i].username === this.$store.state.username) {
              for (let j = 0; j < res2.length; j++) {
                if (res2[j].answerId === res1[i].answerId) {
                  if (res2[j].date > Number(this.$store.state.signTime))
                    this.messageCount++;
                }
              }
            }
          }
        });
      });
    },
    getAnswerMyTopicList() {
      getTopicData().then((res1) => {
        getAnswerData().then((res2) => {
          for (let item1 of res1) {
            if (item1.username === this.$store.state.username) {
              for (let item2 of res2) {
                if (item1.topicId === item2.topicId) {
                  if (item2.date > Number(this.$store.state.signTime))
                    this.messageCount++;
                }
              }
            }
          }
        });
      });
    },
  },
  computed: {
    isDisabled() {
      if (this.usernameSuccess && this.passwordSuccess === true) return false;
      else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.login {
  margin: 100px auto;
  width: 400px;
  height: 350px;
  border: 5px solid var(--color-school);
  box-shadow: 5px 5px 5px 2px var(--color-shadow);
}

.logo {
  height: 100px;
  background: url(~assets/img/logo/logo2.png) no-repeat 100px 15px;
  background-size: 200px 80px;
  margin-bottom: 30px;
}

li:nth-child(2n + 1) {
  margin-top: 10px;
  margin-left: 40px;
}

li:nth-child(2n) {
  margin-top: 5px;
  text-align: center;
  font-size: 13px;
  color: gray;
}

.username-success,
.password-success {
  color: green;
}

.username-error,
.password-error {
  color: red;
}

li label {
  display: inline-block;
  width: 80px;
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
  margin-bottom: 10px;
  width: 150px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  font-weight: 700;
  background-color: var(--color-school);
}

input[type="button"]:hover {
  font-size: 18px;
}

p {
  margin-top: 5px;
  text-align: center;
}

p span {
  color: var(--color-school);
  font-weight: 700;
}

.login-bottom {
  margin-top: 10px;
  text-align: center;
}
</style>