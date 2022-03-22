<template>
  <div>
    <div style="display: flex">
      <img
        v-for="image in home.images"
        :key="image"
        alt="home image"
        :src="image"
        width="200"
        height="150"
      />
    </div>
    <div>
      {{ home.title }} <br />
      ${{ home.pricePerNight }} / night <br />
      <img
        src="/images/marker.svg"
        width="20"
        height="20"
        alt="location icon"
      />
      {{ home.location.address }} {{ home.location.city }}
      {{ home.location.state }} {{ home.location.country }} <br />
      <img src="/images/star.svg" width="20" height="20" alt="" />{{
        home.reviewValue
      }}
      <br />
      {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds,
      {{ home.bathrooms }} bath <br />
    </div>
    <div style="width: 800px; height: 800px" ref="map"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title,
    };
  },
  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.home._geoloc.lat,
      this.home._geoloc.lng
    );
  },
  async asyncData({ params, $dataApi}) {
    const home = await $dataApi.getHome(params.id);
    return {
      home,
    }
  },
};
</script>