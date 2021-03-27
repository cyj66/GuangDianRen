<template>
    <div class="login">
        <div class="logo"></div>
        <form action="/user/login" method="post">
            <ul>
                <li class="username">
                    <label for="Username">用户名：</label>
                    <input type="text" id="Username" name="User_Name" 
                    @input="getUsernameValueAndJudge()"
                        @focus="showUsernameTag()"
                        autocomplete="off">
                </li>

                <li class="username-tag">
                    <p v-if="usernameSuccess" class="username-success">输入符合要求</p>
                    <p v-else-if="usernameError" class="username-error">输入不符要求</p>
                    <p v-else>请输入长度为5-20位的数字或字母</p>
                </li>

                <li class="password">
                    <label for="Password">密码：</label>
                    <input type="password" id="Password" name="Pass_Word" 
                    @input="getPasswordValueAndJudge()"
                        @focus="showPasswordTag()"
                        autocomplete="off">
                </li>

                <li class="password-tag">
                    <p v-if="passwordSuccess" class="password-success">输入符合要求</p>
                    <p v-else-if="passwordError" class="password-error">输入不符要求</p>
                    <p v-else>请输入正确的密码</p>
                </li>
            </ul>
            <div class="login-bottom">
                <input type="submit" value="登录">
                <div class="remember"><input type="checkbox">记住我</div>
                <p>没有账号?去<router-link to="/register"><span>注册</span></router-link>
                </p>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
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
                if (this.reg.test(this.usernameValue)) this.usernameSuccess = true
                else if (!this.reg.test(this.usernameValue)) this.usernameError = true
            },
            showUsernameTag() {
                this.usernameSuccess = false
                this.usernameError = false
            },
            getPasswordValueAndJudge() {
                this.passwordValue = document.querySelector('#Password').value
                if (this.reg.test(this.passwordValue)) this.passwordSuccess = true
                else if (!this.reg.test(this.passwordValue)) this.passwordError = true
            },
            showPasswordTag() {
                this.passwordSuccess = false
                this.passwordError = false
            }
        },
    }
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
        margin-bottom: 30px
    }

    li:nth-child(2n+1) {
        margin-top: 10px;
        margin-left: 40px;
    }

    li:nth-child(2n) {
        margin-top: 5px;
        text-align: center;
        font-size: 13px;
        color: gray
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
    input[type="submit"] {
        margin-bottom: 10px;
        width: 150px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: white;
        font-weight: 700;
        background-color: var(--color-school);
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

    .remember {
        font-size: 15px;
    }

    .remember input {
        vertical-align: middle;
    }
</style>