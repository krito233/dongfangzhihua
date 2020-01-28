<template>
  <div>
    <div class="nav">
      <div class="black_1"></div>
      <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
      <ul class="header">
        <li><router-link to="/login">用户</router-link></li>
        <li><a href="">简介</a></li>
        <li><router-link to="/">首页</router-link></li>
        <div style="clear: both"></div>
      </ul>
    </div>
    <div class="block">
      <div class="mes"><div class="mes_line"></div>
        <img src="../assets/submit_2.png" alt="" class="submit">
        <input type="text" value="请输入搜索内容"><div class="but">全部</div><div class="but">景区</div><div class="but">功略</div><div style="clear: both"></div><span class="con">{{mes2}}</span></div>
      <el-carousel height="20vw">
        <el-carousel-item v-for="item in pic_lis" :key="item">
<!--          <h3 class="small" :style="{background:url('item')}"></h3>-->
          <img :src="item" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
        class="lis"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <router-link to="/con"><li v-for="i in count" class="list-item">
          <img class="ls_pic" :src="ls_pic">
          <div class="ls_content">{{ls_mes}}</div>
        </li></router-link>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
    <div class="ls_right"></div>
  </div>

</template>

<script>
    export default {
        name: "list",
        data () {
            return {
                count: 10,
                loading: false,
                pic_lis:[
                    require('../assets/museum.jpeg'),
                    require('../assets/qin.jpeg'),
                    require('../assets/shufa.jpg')
            ],
                ls_mes:"&emsp;&emsp;遗址，从历史、审美、人种学或人类学角度看具有突出的普遍价值的人类工程或自然与人联合工程以及考古地址等地方。遗址是指人类活动的遗迹，属于考古学",
                ls_pic:"require('../assets/museum.jpeg')",
                mes2:"&emsp;&emsp;遗址，从历史、审美、人种学或人类学角度看具有突出的普遍价值的人类工程或自然与人联合工程以及考古地址等地方。遗址是指人类活动的遗迹，属于考古学遗址，从历史、审美、人种学或人类学角度看具有突出的普遍价值的人类工程或自然与人联合工程以及考古地址等地方。遗址是指人类活动的遗遗址，从历史、审美、人种学或人类学角度看具有突出的普遍价值的人类工程或自然与人联合工程以及考古地址等地方。遗址是指人类活动的遗遗址，从历史、审美、人种学或人类学角度看具有突出的普遍价值的人类工程或自然与人联合工程以及考古地址等地方。遗址是指人类活动的遗"
            }
        },
        computed: {
            noMore () {
                return this.count >= 20
            },
            disabled () {
                return this.loading || this.noMore
            }
        },
        methods: {
            load() {
                this.loading = true
                setTimeout(() => {
                    this.count += 2
                    this.loading = false
                }, 2000)
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
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__arrow{
    display: none;
  }
  .block{
    width: 80vw;
    overflow: hidden;
    margin-left: 10vw;
    position: relative;
  }
  .el-carousel__container{
    width: 80vw;
    height: 20vw;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .lis li{
    width: 50vw;
    height: 15vw;
    margin-left: 10vw;
    margin-top: 5vh;
    background-color: pink;
    list-style: none;
  }
  .infinite-list-wrapper{
    float: left;
  }
  .mes{
    width: 30vw;
    height: 20vw;
    background-color: rgba(255,255,255,0.5);
    position: absolute;
    right: 0vw;
    z-index: 100;
  }
  .mes_line{
    background: rgba(65,70,73,0.8);
    width: 100%;
    height: 8px;
    border-radius: 5px;
  }
  .ls_right{
    width: 28vw;
    height: 40vw;
    float: left;
    margin-top: 5vh;
    margin-left: 2vw;
    background-color: blueviolet;
  }
  .ls_pic{
    width: 40%;
    height: 100%;
    background-color: yellowgreen;
    float: left;
  }
  .ls_content{
    float: left;
    padding: 2vh 2vw;
    width: 50%;
  }
  input{
    outline: none;
    float: left;
    border: none;
    border-bottom: #636363 1px solid;
    margin-top: 2vh;
    margin-left: 1vw;
    width: 14vw;
    background: none;
  }
  .submit{
    margin-top: 2vh;
    margin-left: 1vw;
    width: 20px;
    float: left;
    cursor: pointer;
  }
  .con{
    width: 80%;
    margin-left: 1vw;
    margin-top: 3vh;
  }
  .but{
    background: rgba(65,70,73,1);
    float: left;
    color: white;
    margin-top: 2vh;
    margin-left: 8px;
    margin-bottom: 4vh;
    padding: 2px 8px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
