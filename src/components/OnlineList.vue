<template>
  <v-card class="online-list">
    <v-list subheader>
      <v-subheader>Online List</v-subheader>
      <v-list-item v-for="chat in recent" :key="chat.title">
        <v-list-item-avatar>
          <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="chat.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
            mdi-message-outline
          </v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    recent: [
      {
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Jason Oner",
      },
      {
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Mike Carlson",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Cindy Baker",
      },
    ],
  }),
};
</script>
<style scoped>
.online-list {
  width: 30%;
  height: calc(100% - 112px);
  position: absolute;
  right: 0;
  top: 112px;
  padding-top: 48px;
}
.v-list {
  max-height: calc(100% - 112px + 48px);
  overflow-y: auto;
}
.v-subheader {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>