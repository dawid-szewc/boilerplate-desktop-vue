<template>
  <v-layout>
    <v-navigation-drawer
        permanent
        location="left"
      >
        <template v-slot:prepend>
          <v-list-item
            class="mt-6"
            lines="two"
            prepend-avatar="https://i1.sndcdn.com/avatars-000577035078-ets7md-t500x500.jpg"
            title="Mrożon"
            subtitle="Logged in"
          ></v-list-item>
        </template>
        <template v-slot:append>
          <v-list-item>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="plain"
              size="small"
            ></v-btn>
          </v-list-item>
        </template>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-variant-outline" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account-outline" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-star-outline" title="Discover" value="page1"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Integration" value="page2"></v-list-item>
          <v-list-item prepend-icon="mdi-cog-outline" title="Board settings" value="page3"></v-list-item>
          <v-list-item prepend-icon="mdi-camera-outline" title="Live preview" value="page3"></v-list-item>
          <v-list-item prepend-icon="mdi-github" title="Updates" value="updates"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :elevation="0">
        <template v-slot:append>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
    <v-main style="height: 100vh;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>

export default {
  name: 'HelloWorld',
  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  })
}
</script>

<style>
.v-app-bar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  cursor: pointer;
}
</style>