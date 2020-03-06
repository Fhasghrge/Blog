<template>
  <div id="article">
    <header>
      <div id="title">测试</div>
      <div id="info">
        <div id="author">Author: 张爽</div>
        <div id="date">Date-Time: 2020.3.1</div>
      </div>
    </header>
    <div id="main">
      <VueShowdown :markdown="md"/>
    </div>
  </div>  
</template>
<script>
export default {
  name: "article",
  data() {
    return {
      md: '# Hello World!'
    }
  }
};
</script>
<style scoped>
#article {
  padding: 20px 100px;
  box-shadow: 1px 1px 8px #DDD;
  flex: 8;
}
#title {
  text-align: center;
  font-size: 2.4em;
  font-family: STKaiti
}
#info{ 
  display: flex;
  justify-content: center;
  margin: 20px
}
#info div {
  margin: 0 40px
}
header {
  /* border: 1px solid red; */
  padding: 2px 0;
  border-radius: 17px;
  box-shadow: 1px 1px 8px #DDD
}
#main {
  margin-top: 3vh
}

</style>
