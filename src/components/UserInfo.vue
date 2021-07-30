<template>
  <v-row justify="center">
    <v-dialog v-model="visible" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="昵称*" required prepend-icon="mdi-emoticon-lol-outline"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="签名" prepend-icon="mdi-emoticon-kiss-outline"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-file-input accept="image/*" label="头像" prepend-icon="mdi-emoticon-devil-outline"></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="$emit('close')">
            关闭
          </v-btn>
          <v-btn color="blue darken-1" text @click="$emit('close')">
            保存
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: { visible: Boolean },
  data: () => ({}),
};
</script>
<style>
</style>