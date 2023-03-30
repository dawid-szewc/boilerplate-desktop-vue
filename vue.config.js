const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        // opcje budowania dla Electron Builder
      },
    },
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
