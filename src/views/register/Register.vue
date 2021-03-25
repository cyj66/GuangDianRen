<template>
    <div class="login">
        <div class="logo"></div>
        <form action="/register" method="post">
            <ul>
                <li>
                    <label for="Username">创建用户名：</label>
                    <input type="text" id="Username" name="User_Name" @input="getUsernameValueAndJudge()"
                        @focus="showUsernameTag()" autocomplete="off">
                </li>

                <li>
                    <p v-if="usernameSuccess" class="username-success">
                        <i class="success-icon"></i>
                        输入符合要求
                    </p>
                    <p v-else-if="usernameError" class="username-error">
                        <i class="error-icon"></i>
                        输入不符要求
                    </p>
                    <p v-else>请输入5-20位的数字或字母</p>
                </li>

                <li>
                    <label for="Password">输入密码：</label>
                    <input type="password" id="Password" name="Pass_Word" @input="getPasswordValueAndJudge()"
                        @focus="showPasswordTag()" autocomplete="off">
                </li>

                <li>
                    <p v-if="passwordSuccess" class="password-success">
                        <i class="success-icon"></i>
                        输入符合要求
                    </p>
                    <p v-else-if="passwordError" class="password-error">
                        <i class="error-icon"></i>
                        输入不符要求
                    </p>
                    <p v-else>请输入5-20位的数字或字母</p>
                </li>

                <li>
                    <label for="Password2">确认密码：</label>
                    <input type="password" id="Password2" name="Pass_Word2" @input="judgeIsSame()"
                        @focus="showIsSameTag()" autocomplete="off">
                </li>

                <li>
                    <p v-if="isSame" class="password-success">
                        <i class="success-icon"></i>
                        密码确认一致
                    </p>
                    <p v-else-if="isNotSame" class="password-error">
                        <i class="error-icon"></i>
                        密码确认不一致
                    </p>
                    <p v-else>请再次输入密码</p>
                </li>
                <li>
                    <input type="submit" value="注册" :disabled="isDisabled">
                </li>
                <p>已有账号?去<router-link to="/login"><span>登录</span></router-link>
                </p>
            </ul>
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
                passwordValue2: '',
                isSame: false,
                isNotSame: false,
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
            },
            judgeIsSame() {
                this.passwordValue2 = document.querySelector('#Password2').value
                if (this.passwordValue === this.passwordValue2) this.isSame = true
                else if (this.passwordValue !== this.passwordValue2) this.isNotSame = true
            },
            showIsSameTag() {
                this.isSame = false
                this.isNotSame = false
            }

        },
        computed: {
            isDisabled() {
                if (this.usernameSuccess && this.passwordSuccess && this.isSame === true) 
                return false
                else return true
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


    .error-icon,
    .success-icon {
        display: inline-block;
        width: 13px;
        height: 13px;
        /* 用在图片的css代码中，用于与文字对齐 */
        vertical-align: middle;
        margin: 0 5px;
    }

    .error-icon {
        background: url(~assets/img/form/error.png);
        background-size: contain;
    }

    .success-icon {
        background: url(~assets/img/form/success.png);
        background-size: contain;
    }

    input[type="submit"] {
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
</style>