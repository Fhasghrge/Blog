<template>
  <div id="profile">
    <header>
      <div id="avatar">
        <img src="../assets/img/avatar.jpg" alt="avatar" />
      </div>
      <div id="username">Shuang</div>
    </header>
    <nav>
      <ul>
        <li>
          <router-link to="/ff" tag="li">
            <img src="../assets/img/WEBqianduan.svg" alt="web" />
            Web</router-link
          >
        </li>
        <li>
          <router-link to="/dd" tag="li">
            <img src="../assets/img/shujujiegou.svg" alt="web" />
            D-Structure</router-link
          >
        </li>
        <li>
          <router-link to="/ff" tag="li">
            <img src="../assets/img/wangluo.svg" alt="web" />
            C-Network</router-link
          >
        </li>
        <li>
          <router-link to="/fsdf" tag="li">
            <img src="../assets/img/jisuanji.svg" alt="web" />
            C-Organization</router-link
          >
        </li>
        <li>
          <router-link to="/fsdf" tag="li">
            <img src="../assets/img/Linux.svg" alt="web" />
            Lunix</router-link
          >
        </li>
        <li>
          <router-link to="/fsfsf" tag="li">
            <img src="../assets/img/shujuku.svg" alt="web" />
            SQL</router-link
          >
        </li>
        <li>
          <router-link to="/fsdfef" tag="li">
            <img src="../assets/img/shuxue.svg" alt="web" />
            Math</router-link
          >
        </li>
        <li>
          <router-link to="/fefw" tag="li">
            <img src="../assets/img/qita.svg" alt="web" />
            Others</router-link
          >
        </li>
      </ul>
    </nav>
    <footer>
      <div>
        <a href="https://github.com/Fhasghrge">
          <img src="../assets/img/github.svg" alt="Fhasghrge" />
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'profile'
  // 侧标导航栏以及简短的个人信息
};
</script>
<style scoped>
#profile {
  /* border:1px solid red; */
  width: 250px;
  height: 100vh;
  box-shadow: 0 1px 9px rgb(122, 104, 104);
  padding-right: 8px;
  padding-left: 8px;
  position: relative;
}
#avatar {
  /* border: 1px solid red; */
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 1px 1px 10px rgb(131, 108, 108);
}
#avatar :hover {
  transform: scale(1.4, 1.4);
  transition-duration: 800ms
}
#avatar img {
  width: 80px;
}
#username {
  text-align: center;
  font-size: 1.2em;
  padding-top: 2vh;
}
header {
  padding: 4vh 0 0;
}
ul > li {
  font-size: 1.4em;
  margin-top: 1em;
  line-height: 2em;
  list-style: none;
  box-shadow: 1px -1px 8px #DDD;
  /* padding: 0 3px; */
  border-radius: 12px;
  border:1px solid rgb(218, 216, 216)
  /* ！ 如何把图标和文字对齐？？ */
}
ul > li :hover {
  background-color: #DDD;
}
li > img {
  height: 1.5em;
  display: inline-block;
  vertical-align: middle
}
footer {
  position: absolute;
  bottom: 1vh;
  left: 50%;
  transform: translateX(-50%);
}
footer :hover {
  filter: contrast(200%);
  transform: scale(1.1, 1.1);
  transition-duration: 300ms;
}
footer img {
  width: 40px;
}
</style>
