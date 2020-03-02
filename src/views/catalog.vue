<template>
  <div id="catalog">
    <div>
      <ul>
        <li v-for="item in catalog" :key="item.date">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'catalog',
  data() {
    return {
      catalog: [
        {
          title: 'text',
          data: '34242'
        }
      ]
    };
  },
  created: function() {
    this.$http({
      url: 'http://localhost:8080/catalog/title',
      method: 'get'
    })
      .then(res => {
        console.log('获取用户信息', res);
        res = JSON.parse(res);
        this.catalog = res;
      })
      .catch(err => {
        // console.log(err);
        throw err;
      });
  }
};
</script>
<style scoped>
#catalog {
  position: absolute;
  left: 570px;
  right: 100px;
  padding: 20px 100px;
  box-shadow: 1px 1px 8px #ddd;
}
</style>
