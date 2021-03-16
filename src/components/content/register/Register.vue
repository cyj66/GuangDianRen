<template>
    <div class="login">
        <div class="logo"></div>
        <form action="/register" method="post">
            <ul>
                <li class="nickname">
                    <label for="nkn">创建账号：</label><input type="text" id="nkn">
                </li>

                <li class="success">
                    <i class="success-icon"></i>输入符合要求
                </li>

                <li class="password">
                    <label for="pwd">登录密码：</label><input type="password" id="pwd">
                </li>

                <li class="error">
                    <i class="error-icon"></i>输入不符合要求
                </li>

                <li class="password">
                    <label for="pwd2">确认密码：</label><input type="password" id="pwd2">
                </li>

                <li class="error">
                    <i class="error-icon"></i>输入不符合要求
                </li>
                <li>
                    <input type="submit" value="注册">
                </li>
                <p>已有账号?去<a href="/login">登录</a></p>
            </ul>
        </form>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .login {
        margin: 100px auto;
        width: 400px;
        height: 380px;
        border: 5px solid var(--color-school);
        box-shadow:5px 5px 5px 2px var(--color-shadow);
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
        visibility: hidden;
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

    .error-icon,
    .success-icon {
        display: inline-block;
        width: 15px;
        height: 15px;
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

    .error {
        font-size: 12px;
        color: red;
    }

    .success {
        font-size: 12px;
        color: green;
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

    input[type="submit"]:hover {
        font-size: 18px;
    }
    p {
        margin-top: 5px;
        text-align: center;
    }

    p a {
        color: var(--color-school);
        font-weight: 700;
    }
</style>