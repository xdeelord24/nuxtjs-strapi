<template>
    <v-data-table
      :headers="headers"
      :items="timeSeriesData"
      class="elevation-1"
    ></v-data-table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Concentration', value: 'attributes.concentration' },
        { text: 'Date Collected', value: 'attributes.dateCollected' },
        { text: 'Created At', value: 'attributes.createdAt' },
        { text: 'Updated At', value: 'attributes.updatedAt' },
        { text: 'Published At', value: 'attributes.publishedAt' }
      ],
    };
  },
  computed: {
    ...mapState({
      timeSeriesData: state => state.timeSeries.data.data,
      timeSeriesMeta: state => state.timeSeries.data.meta
    })
  },
  mounted() {
    this.$store.dispatch('timeSeries/fetchData');
  }
};
</script>

