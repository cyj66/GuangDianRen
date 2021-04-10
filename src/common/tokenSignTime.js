//设置个定时器，让token在24小时之后过期
export function tokenSignTime() {
    setTimeout(function () {
        //清空登录信息
        localStorage.removeItem("userName");
        localStorage.removeItem("token");
        localStorage.removeItem("signTime");
        //弹出框提醒，页面跳转
        alert("登录已过期，请重新登录");
        location.href = '/';
    }, 24 * 3600 * 1000);
}