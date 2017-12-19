<template>
  <div>
    <div id="galley">
        <ul class="pictures clearfix">
            <li v-for="(d, k) in imgList" :key="k"><img :src="require(`../assets/${d}.jpg`)" :alt="d"></li>
        </ul>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
import Viewer from 'viewerjs'
export default {
    name: 'viewer',
    mounted() {
        this.render({})
    },
    data() {
        let imgList = ['Chrysanthemum', 'Desert', 'Hydrangeas', 'Jellyfish', 'Koala', 'Lighthouse', 'Penguins', 'Tulips'];
        return {
            imgList,
        }
    },
    methods: {
        render(options) {
            const renderEl = document.querySelector('#galley');
            let viewer = new Viewer(renderEl, options);
        }
    }
}
</script>
<style lang="scss">
    .pictures {
      margin: 0 auto;
      padding: 0;
      list-style: none;
      max-width: 30rem;
    }
    .pictures > li {
      float: left;
      width: 33.3%;
      height: 33.3%;
      margin: 0 -1px -1px 0;
      border: 1px solid transparent;
      overflow: hidden;
    }
    .pictures > li > img {
      display: block;
      width: 100%;
      cursor: -webkit-zoom-in;
      cursor: zoom-in;
    }
</style>


