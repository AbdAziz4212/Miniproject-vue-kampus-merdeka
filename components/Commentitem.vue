<template>
  <v-card class="rounded-xl mx-auto pa-5 outlined" elevation="3">
    <v-card-text>
      <v-rating
        :value="comment.star"
        color="amber"
        dense
        half-increments
        readonly
        size="26"
      ></v-rating>
    </v-card-text>
    <div>
      {{ comment.comment }}
    </div>
    <v-card-actions class="mt-3">
      <v-list-item>
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            size="60"
            lazy-src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            :src="comment.user.avatar"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ comment.user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ comment.user.job }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>
