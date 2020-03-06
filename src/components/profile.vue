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
          <router-link to="/catalog" tag="li">
            <img src="../assets/img/WEBqianduan.svg" alt="web" />
            <span>Web</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dd" tag="li">
            <img src="../assets/img/shujujiegou.svg" alt="web" />
            <span>D-Structure</span>
          </router-link>
        </li>
        <li>
          <router-link to="/ff" tag="li">
            <img src="../assets/img/wangluo.svg" alt="web" />
            <span>C-Network</span>
          </router-link>
        </li>
        <li>
          <router-link to="/fsdf" tag="li">
            <img src="../assets/img/jisuanji.svg" alt="web" />
            <span>C-Organization</span>
          </router-link>
        </li>
        <li>
          <router-link to="/fsdf" tag="li">
            <img src="../assets/img/Linux.svg" alt="web" />
            <span> Lunix</span>
          </router-link>
        </li>
        <li>
          <router-link to="/fsfsf" tag="li">
            <img src="../assets/img/shujuku.svg" alt="web" />
            <span>SQL</span>
          </router-link>
        </li>
        <li>
          <router-link to="/fsdfef" tag="li">
            <img src="../assets/img/shuxue.svg" alt="web" />
            <span>Math</span>
          </router-link>
        </li>
        <li>
          <router-link to="/fefw" tag="li">
            <img src="../assets/img/qita.svg" alt="web" />
            <span>Others</span>
          </router-link>
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
<style lang="less" scoped>
#profile {
  min-width: 162px;
  height: 100vh;
  box-shadow: 0 1px 9px rgb(122, 104, 104);
  padding-right: 8px;
  padding-left: 8px;
  flex: 2;
  display: flex;
  flex-direction: column;
  header {
    padding: 4vh 0 0;
    box-sizing: border-box;
    flex: 1;
    #avatar {
      /* border: 1px solid red; */
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      box-shadow: 1px 1px 10px rgb(131, 108, 108);
      img {
        width: 80px;
      }
    }
    #username {
      text-align: center;
      font-size: 1.2rem;
      padding-top: 2vh;
    }
    #avatar :hover {
      transform: scale(1.4, 1.4);
      transition-duration: 800ms;
    }
  }
  nav {
    flex: 5;
    // background-color: pink;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      & > li {
        font-size: 1.4rem;
        line-height: 3rem;
        list-style: none;
        box-shadow: 1px -1px 8px #ddd;
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid rgb(218, 216, 216);
        @media only screen and (max-width: 1268px) {
          li {
            background-color: #ecf0f1;
            text-align: center;
            font-size: 1.2rem;
            img {
              display: none;
            }
          }
        }
        img {
          height: 1.5rem;
          display: inline-block;
          vertical-align: middle;
        }
        li {
          display: flex;
          align-items: center;
          padding: 0 0 0 0.8vw;
          span {
            // display: none;
            text-indent: 8px;
          }
        }
      }
      li :hover {
        background: linear-gradient(to right, white, pink);
      }
    }
  }
  footer {
    flex: 1;
    text-align: center;
    img {
      width: 40px;
      display: inline-block;
      padding: 30px;
    }
  }
  footer :hover {
    filter: contrast(200%);
    transform: scale(1.1, 1.1);
    transition-duration: 300ms;
  }
}
</style>
