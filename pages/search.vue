<template>
    <div>{{ lat }} / {{ lng }} / {{ label }} <br>
    <HomeRow v-for="home in homes" :key="home.objectID" :home="home"/>
    </div>
    
</template>

<script>
export default { 
      async beforeRouteUpdate(to, from, next){
      const data = await this.$dataApi.getHomeByLocation(to.query.lat, to.query.lng, to.query.start, to.query.end)
      this.homes = data.json.hits
      this.label = to.query.label
      this.lat = to.query.lat
      this.lng = to.query.lng
      next()  
  },
  async asyncData({ query, $dataApi }){
    const data = await $dataApi.getHomeByLocation(query.lat, query.lng, query.start, query.end)
    return {
      homes: data.json.hits,
      label: query.label,
      lat: query.lat,
      lng: query.lng,
    }
  }
}
</script>