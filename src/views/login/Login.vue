<template>
    <div class="login">
        <div class="logo"></div>
        <form action="/user/login" method="post">
            <ul>
                <li class="username">
                    <label for="Username">用户名：</label>
         <!-- autocomplete="off"让input表单输入框不记录输入过信息 -->

                    <input type="text" id="Username" name="User_Name" 
                    @blur="getUsernameValueAndJudge()"
                        @focus="showUsernameTag()"
                        autocomplete="off">
                </li>

                <li class="username-tag">
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

                <li class="password">
                    <label for="Password">密码：</label>
                    <input type="password" id="Password" name="Pass_Word" 
                    @blur="getPasswordValueAndJudge()"
                        @focus="showPasswordTag()"
                        autocomplete="off">
                </li>

                <li class="password-tag">
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
            </ul>
            <div class="login-bottom">
                <input type="submit" value="登录" :disabled="disabledSubmit()">
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

            }
        },

        methods: {
           
            disabledSubmit(){
                
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