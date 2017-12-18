<template>
  <div>
    <div>
        <ul id="images">
            <li v-for="(d, k) in imgList" :key="k"><img :src="require(`../assets/${d}.jpg`)" :alt="d"></li>
        </ul>
    </div>
  </div>
</template>
<script>
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
            const renderEl = document.querySelector('#images');
            let viewer = new Viewer(renderEl, options);
        }
    }
}
</script>
<style>
    @import '../../node_modules/viewerjs/dist/viewer.min'
</style>


