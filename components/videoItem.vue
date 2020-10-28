<template>
	<div>
    <p>{{ArrayAllIdVideos}}</p>
  </div>
</template>

<script>
    export default {
      name: "videoItem",
      props: {
          video: {
            type: Array,
            default() {
              return []
            }
          }
      },
      computed: {
        ArrayAllIdVideos() {
          return this.video.snippet.resourceId.videoId
        }
      }
    }
</script>

<style scoped>

</style>
