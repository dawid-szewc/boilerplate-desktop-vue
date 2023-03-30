<template>
  <v-container class="container pa-2" style="height: calc(100vh - 64px)">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="pa-2 ma-2" variant="tonal" title="Card title" subtitle="Subtitle 1" :text="lorem">
          
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2 ma-2" variant="tonal" title="Card title" subtitle="Subtitle 2" :text="lorem2">
          
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2 ma-2" variant="tonal" title="Card title" subtitle="Subtitle 3" :text="lorem2">
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',
  data: () => ({
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan ante eu ante tristique, vel dignissim ex rhoncus. Nam id massa nec ipsum condimentum dignissim at id lacus. Nam tempor semper posuere. Vivamus eu neque nulla. Quisque turpis mauris, pellentesque eget orci vestibulum, sollicitudin dictum mauris. Sed ante tellus, tincidunt eget ante eu, elementum iaculis ex. Proin blandit ante a dictum dignissim. Nullam tempus neque sed orci dapibus pretium. Etiam bibendum tellus id ornare pulvinar. Ut consectetur consequat nunc. In diam eros, eleifend nec ultrices a, vulputate at quam.",
    lorem2: "Donec ut convallis felis. Integer lacinia, est non finibus bibendum, est mi vehicula ligula, ac semper ex nulla non urna. Integer a vehicula augue. Vestibulum lacinia elementum nisi in lobortis. Sed non gravida orci. Suspendisse potenti. Nam porttitor ligula sit amet finibus blandit. Pellentesque tincidunt condimentum ipsum."
  })
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .v-row {
    flex-grow: 1;
  }

  .v-col {
    flex-grow: 1;
  }
  .v-card {
    height: 95%;
  }
</style>