<template>
  <div id="backManage">
    <h1>新建一个博客</h1>
    <form action="/blogs/new" method="post">
      <div class="form-group">
        <label for="title">标题:</label>
        <input
          type="text"
          id="title"
          class="form-input"
          name="title"
          required
          minlength="2"
          maxlength="25"
        />
      </div>
      <div class="form-group">
        <label for="author">作者:</label>
        <input type="text" id="author" class="form-input" name="author" min="1" max="150" />
      </div>
      <div>
        <label for="main">文章:</label>
        <textarea name="main" id="main"></textarea>
      </div>
      <div id="btn">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "backManage"
};
</script>
<style scoped>
#backManage {
  /* border: 1px solid red; */
  position: absolute;
  left: 570px;
  right: 100px;
  padding: 20px 100px;
  box-shadow: 1px 1px 8px #ddd;
}
h1 {
  text-align: center;
  font-family: STKaiti;
}
label {
  border: 1px solid rgb(175, 162, 162, 0.4);
  border-radius: 8px;
  display: inline-block;
  font-size: 1.3em;
  margin-right: 1vw;
  box-shadow: 1px 1px 9px #ddd;
  width: 2.6em;
}
input {
  height: 2em;
}
form {
  /* border: 1px solid red; */
  padding: 11px 12px ;
  box-shadow: 1px 1px 9px #DDD
}
.form-group {
  margin-bottom: 2vh;
  display: flex;
}
form > div {
  margin-bottom: 2vh;
}
.form-input {
  border: none;
  border-bottom: 1px solid #ddd;
}
button {
  border:none;
  display: inline-block;
  width: 6em;
  height: 2em;
  font-size:1.2em;
  border-radius: 1em;
}
#btn {
  text-align: center;
}
textarea {
  width: 100%;
  height: 400px;
  margin-top: 1vh
}
</style>
