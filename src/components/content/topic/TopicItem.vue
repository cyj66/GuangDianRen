<template>
    <div class="topic-item">
        <h2>暨南大学的光电工程系究竟怎么样？暨南大学的光电工程系究竟怎么样？暨南大学的光电工程系究竟怎么样？暨南大学的光电工程系究竟怎么样？暨南大学的光电工程系究竟怎么样？</h2>
        <ul class="topic-icon" @click="onChangeIconColor($event)" @selectstart="preventSelect($event)">
            <li class="iconfont">&#xe675; 赞 69</li>
            <li class="iconfont">&#xe66f; 收 46</li>
            <li class="iconfont">&#xe66c; 答 6</li>
        </ul>
        <hr />
        <p class="iconfont topic-answer">
            暨南大学光电工程学科始于1984年设立的“光学”硕士学位点，2003年设立“光学工程”硕士学位点。2003年，暨南大学成立光电工程研究所，2005年7月，成立光电工程系。目前光电工程系是与光电工程研究所、电力电子研究所合并运行的教学科研单位。自创办以来，光电工程系坚持“质量是生命、创新是灵魂”的办学理念，为社会培养了一批又一批的优秀人才。
            暨南大学光电工程学科始于1984年设立的“光学”硕士学位点，2003年设立“光学工程”硕士学位点。2003年，暨南大学成立光电工程研究所，2005年7月，成立光电工程系。目前光电工程系是与光电工程研究所、电力电子研究所合并运行的教学科研单位。自创办以来，光电工程系坚持“质量是生命、创新是灵魂”的办学理念，为社会培养了一批又一批的优秀人才。
        </p>

    </div>
</template>

<script>
    export default {
        components: {},
        methods: {
            onChangeIconColor(e) {
                let lis = document.querySelectorAll('.topic-icon li')
                console.log(e.target)
                for (let i in lis) {
                    if (e.target === lis[i]) {
                        if (e.target.style.color === 'orangered') {
                            e.target.style.color = ''
                        } else {
                            e.target.style.color = 'orangered'
                        }
                    }
                }

            },
            preventSelect(e) {
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .topic-item {
        width: 100%;
        height: 150px;
        margin: 0 auto;
        margin-bottom: 2px;
        padding: 10px;
        border: 2px solid var(--color-school);
        background-color: rgb(250, 250, 250);
        border-radius: 30px
    }

    .topic-asker {
        display: flex;
        justify-content: flex-start;
    }

    .topic-asker li {
        height: 20px;
        line-height: 20px;
        margin-right: 5px
    }

    .topic-asker li a {
        font-size: 20px;
        line-height: 30px;
    }

    .topic-asker li i {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: #389;
        border-radius: 50%;

    }

    .topic-item h2 {
        padding-bottom: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .topic-item .topic-icon {
        display: flex;
        justify-content: space-around;
        margin-bottom: 5px;
    }

    .topic-item .topic-icon .iconfont {
        font-size: 18px;
        font-weight:700;
        color:var(--color-school);
        cursor: pointer;
    }

    .topic-item .topic-answer {
        margin-top: 10px;
        text-indent: 2em;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        color: #666
    }
</style>