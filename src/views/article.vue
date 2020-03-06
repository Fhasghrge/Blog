<template>
  <div id="article">
    <header>
      <div id="title">测试</div>
      <div id="info">
        <div id="author">Author: 张爽</div>
        <div id="date">Date-Time: 2020.3.1</div>
      </div>
    </header>
    <main>
      <VueShowdown :markdown="md" />
    </main>
  </div>
</template>
<script>
export default {
  name: 'article',
  data() {
    return {
      md: '# Hello World!'
    };
  }
};
</script>
<style lang="less" scoped>
#article {
  padding: 20px 100px;
  box-shadow: 1px 1px 8px #ddd;
  flex: 8;
  header {
    padding: 2px 0;
    border-radius: 17px;
    box-shadow: 1px 1px 8px #ddd;
    #title {
      text-align: center;
      font-size: 2.4em;
      font-family: STKaiti;
    }
    #info {
      display: flex;
      justify-content: center;
      margin: 20px;
      div {
        margin: 0 40px;
      }
    }
  }
  main {
    margin-top: 3vh;
  }
  @media only screen and (max-width: 615px) {
    & {
      padding: 10px 20px;
    }
    header > #info {
      margin: 10px;
      div {
        margin: 0 10px;
      }
    }
  }
}
</style>
