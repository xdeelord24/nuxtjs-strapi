<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <import-data />
      <data-table />
    </v-col>
  </v-row>
</template>

<script>
import globalMixins from "~/mixins/global";
export default {
  mixins: [globalMixins],
  name: "importPage",
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>
