<template>
    <div>
      <div class="nav">
        <div class="black_1"></div>
        <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
        <ul class="header">
          <li><router-link to="/login">用户</router-link></li>
          <li><router-link to="/about">简介</router-link></li>
          <li><router-link to="/">首页</router-link></li>
          <div style="clear: both"></div>
        </ul>
      </div>
<!--      <el-carousel :interval="4000" type="card" height="200px">-->
<!--        <el-carousel-item v-for="item in 6" :key="item">-->
<!--          <h3 class="medium">{{ item }}</h3>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
      <ul class="list" id="list">
        <router-link to="/list"><li class="museum"><div class="b_bk"><div class="heng"></div><div class="shu"></div><p>博物馆</p></div></li></router-link>
        <li class="history"><div class="b_bk"><div class="heng"></div><div class="shu"></div><p>历史遗迹</p></div></li>
        <li class="build"><div class="b_bk"><div class="heng"></div><div class="shu"></div><p>建筑物</p></div></li>
        <li class="pro"><div class="b_bk"><div class="heng"></div><div class="shu"></div><p>非遗项目</p></div></li>
        <li class="relg"><div class="b_bk"><div class="heng"></div><div class="shu"></div><p>宗教类</p></div></li>
        <li class="old"><div class="b_bk"><div class="heng"></div><div class="shu"></div><p>古落古镇</p></div></li>
      </ul>
      <div style="clear: both"></div>
      <div class="st_bottom">
        <div class="st_search"><input class="sear_t" type="text"><div class="sear_b"></div></div>
        <span>{{mes}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "scenicType",
        data(){
            return{
                leiXing:[],
                mes:"  遗址，从历史、审美、人种学或人类学角度看具有突出的普遍价值的人类工程或自然与人联合工程以及考古地址等地方。遗址是指人类活动的遗迹，属于考古学概念。遗址的特点表现为不完整的残存物，具有一定的区域范围，很多史前遗址、远古遗址多深埋地表以下。如宝鸡北首岭遗址（距今7100_+140年）、西安半坡遗址（距今6000多年），烽火台等。"
            };
        },
        mounted(){
        },
        methods:{
            fadeIn(nam,speed){
                speed/=10;
                var element=document.getElementById(nam);
                if(element.style.opacity !==1){
                    var num = 0;
                    var st = setInterval(function(){
                        num++;
                        element.style.opacity = num/10;
                        if(num>=10)  {  clearInterval(st);  }
                    },speed);
                }
            }
        }
    }
</script>

<style scoped>
  .header a{
    display: inline-block;
    text-decoration: none;
    float: right;
    color: #636363;
  }
  .header li{
    list-style: none;
    color: black;
    margin-left: 20px;
    width: 3vw;
    height: auto;
    padding: 10px;
    font-size: 16px;
    float: right;
  }
  .header{
    padding: 10px 10px 0 0;
    margin-right: 2vw;
  }
  .logo{
    float: left;
    width: 4vw;
    height: 4vw;
    z-index: 10;
    margin-top: 10px;
    margin-left: 25px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item{
    width: 38vw;
    height: 40vh;
  }
  .list{
    margin-top: 0vh;
  }
  .list li{
    width: 12vw;
    height: 56vh;
    background-color: #ccc;
    float: left;
    margin-left: 4vw;
    list-style: none;
    cursor: pointer;
  }
  .list li:hover{
    transform: translate(-3px,-3px);
    transition-duration: 600ms;
    box-shadow: 5px 3px 10px rgba(100,100,100,1);
  }
  .b_bk{
    width: 4vw;
    height: auto;
    position: relative;
    margin-left: 4vw;
    margin-top: 18vh;
    background-color: rgba(0,0,0,0.33);
    text-align: center;
  }
  p{
    font-size: 2.8rem;
    color: white;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    padding: 15px 6px;
  }
  .heng{
    width: 2vw;
    height: 2px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
  }
  .shu{
    width: 2px;
    height: 2vw;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
  }
  .museum,.build,.relg{
    margin-top: 6vh;
  }
  .st_bottom{
    margin-top: 8vh;
  }
  .st_search{
    float: left;
    margin-left: 14vw;
  }
  span{
    float: left;
    width: 40vw;
    text-align: left;
    font-size: 14px;
    margin-left: 20vw;
    color: #636363;
  }
  .relg{
    background: url("../assets/psbe.jpg") no-repeat;
    background-position: 40% 5%;
    background-size: 330%;
  }
  .build{
    background: url("../assets/build.jpeg") no-repeat;
    background-position: 40% 50%;
    background-size: 300%;
  }
  .museum{
    background: url("../assets/museum.jpeg") no-repeat;
    background-position: 40% 50%;
    background-size: 350%;
  }
  .history{
    background: url("../assets/qin.jpeg") no-repeat;
    background-position: 48% 60%;
    background-size: 700%;
  }
  .pro{
    background: url("../assets/pro.jpeg") no-repeat;
    background-position: 36% 50%;
    background-size: 400%;
  }
  .old{
    background: url("../assets/village.jpeg") no-repeat;
    background-position: 36% 50%;
    background-size: 400%;
  }
  .header li:hover{
    font-weight: bold;
  }
  .st_search{
    border: #a0a0a0 2px solid;
    padding: 2px;
    margin-top: 2vh;
  }
  .sear_t{
    width: 12vw;
    border: none;
    height: 4vh;
    float: left;
    outline:none;
  }
  .sear_b{
    width: 4vh;
    background: url("../assets/st_s.png") no-repeat;
    background-size: 100% 100%;
    height: 4vh;
    float: left;
    cursor: pointer;
  }
  .museum{
    /*使用动画：动画名称 动画完成时间 速度曲线 开始时间 播放次数 是否下次反向播放 是否正在运行或暂停*/
    animation: jump 1s ease-in  1 alternate;
  }
  .history{
    animation: jump 1s ease-in  1 alternate;
    animation-delay:0.2s;
  }
  .build{
    animation: jump 1s ease-in  1 alternate;
    animation-delay:0.4s;
  }
  .pro{
    animation: jump 1s ease-in  1 alternate;
    animation-delay:0.6s;
  }
  .relg{
    animation: jump 1s ease-in  1 alternate;
    animation-delay:0.8s;
  }
  .old{
    animation: jump 1s ease-in  1 alternate;
    animation-delay:1s;
  }
  /*创建动画*/
  @keyframes jump {
    0%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(-20px);
    }
    100%{
      transform: translateY(0px);
    }
  }
</style>
