<template>
  <div>
    <div style="display: flex">
        <img v-for="image in home.images" :key="image" alt="home image" :src="image" width="200" height="150">
    </div>
    <div>
        {{ home.title }} <br>
        ${{ home.pricePerNight }} / night <br>
        <img src="/images/marker.svg" width="20"
        height="20" alt="location icon"> {{ home.location.address }} {{ home.location.city }} {{ home.location.state}} {{ home.location.country}} <br>
        <img src="/images/star.svg" width="20" height="20" alt="">{{ home.reviewValue }} <br>
        {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath <br>

        </div>
  </div>
</template>

<script>
import homes from "~/data/home.json";
export default {
    head(){
        return {
            title: this.home.title
        }
    },
  data() {
    return {
      home: {},
    };
  },
  created() {
    const home = homes.find((home) => home.objectID == this.$route.params.id);
    this.home = home;
  },
};
</script>