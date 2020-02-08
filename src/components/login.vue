<template>
<div class="main_log">
  <div class="center_log">
    <router-link to="/"><img src="../assets/log.jpg" alt="" class="bk_log"></router-link>
<!--    <img src="../assets/log.jpg" alt="" class="bk_log">-->
    <ul :model="userinfo">
      <li>账&emsp;号<input type="text" class="put" v-model="userinfo.username"></li>
      <li>密&emsp;码<input type="password" class="put" v-model="userinfo.password"></li>
<!--      <li><el-radio v-model="userinfo.role" label="1" value="">老师</el-radio>-->
<!--      <el-radio v-model="userinfo.role" label="2" value="">学生</el-radio></li>-->
      <li><button type="submit" class="go_go_go" @click="submit">登&emsp;录</button></li>
<!--      <router-link to="/add">登录成功</router-link>-->
    </ul>
  </div>
</div>
</template>

<script>
  // import {mutations} from 'vuex'
  import {request} from '../net/request'
  export default {
    name: "login",
    data () {
      return {
        radio: '1',
        userinfo: {
          username: '',
          password: '',
          role: ''
        }
      }
    },
    methods: {
      submit () {
        let _this = this
        if(!_this.userinfo.username&&!_this.userinfo.password) {
          alert("用户名或密码不能为空！");
        } else {
          request({
            url: '/auth/login',
            params: {
              username: _this.userinfo.username,
              password: _this.userinfo.password,
              rememberMe: 1
            }
          }).then(res => {
            if (res.data.substring(0,1) === '{') {
              // console.log(res)
              // console.log(res.data)
              // console.log(res.data.substring(7,res.data.length-1))
              // console.log(JSON.stringify(res.data))
              // localStorage.setItem("token", JSON.stringify(res.data.substring(7,res.data.length-1)))
              localStorage.setItem("token", res.data.substring(7,res.data.length-1))
              _this.$router.push('/add')
            }else {
              alert('用户或密码错误！')
            }
          }).catch(e => {
            console.log(e)
          })
        }
      }
    }
  }
</script>

<style scoped>
  *{
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .main_log{
    background-color: #f1f1f1;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
  }
  .center_log{
    width: 40vw;
    height: 80vh;
    margin-left: 30vw;
    margin-top: 10vh;
    position: relative;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
  }
  .bk_log{
    width: 100%;
    height: 50%;
  }
  li{
    line-height: 3em;
    font-size: 14px;
    margin-top: 1.6vh;
  }
  .put{
    width: 40%;
    padding: 1em;
    line-height: 1em;
    background-color: #f3f2f2;
    border-radius: 8px;
    margin-left: 10px;
  }
  .go_go_go{
    font-size: 20px;
    width: 12em;
    line-height: 1em;
    background-color: #42b983;
    color: white;
    padding: 0.6em 0;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
