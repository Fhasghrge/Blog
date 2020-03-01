<template>
  <div id="bManage">
    <router-link to="/manage" tag="div">
      <canvas id="canvas" width="95" height="95" ref="cvs"></canvas>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'bManage',
  mounted() {
    /** @type {HTMLCanvasElement} */
    let canvas = this.$refs.cvs;
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(98, 98);
    ctx.lineTo(98, 0);
    ctx.fillStyle = '#DFDED8';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();

    ctx.fillStyle = '#000';
    ctx.font = '18px serif';
    ctx.textAlign = 'center';
    ctx.translate(19, -22);
    ctx.rotate((45 * Math.PI) / 180);
    // ctx.translate(-35 -15);
    ctx.fillText('Background', 70, 25);
    ctx.closePath();
  }
};
</script>
<style scoped>
#bManage {
  position: absolute;
  right: 0;
  /* border: 1px solid red; */
}
#bManage :hover {
  transform: scale(1.03,1.03)
}
</style>
