<template>
  <div>
    <v-file-input
      clearable
      show-size
      v-model="file"
      label="Import File"
      prepend-icon="mdi-cloud-upload"
      @change="onFileChange"
    ></v-file-input>
  </div>
</template>

<script>
import Papa from "papaparse";
import globalMixins from "~/mixins/global";

export default {
  mixins: [globalMixins],
  data() {
    return {
      file: null,
    };
  },
  methods: {
    onFileChange(e) {
      if (this.file)
        this.showAlertWarningWithFunction("Upload this file?", {
          icon: "question",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          onConfirm: () => {
            this.importData();
          },
          onCancel: () => {
            this.showAlertWarning(`Cancelled`);
            this.file = null;
          },
        });
    },

    async importData() {

      this.loadingTrue();

      const reader = new FileReader();
      reader.onload = async (e) => {
        const csvData = e.target.result;
        const parsedData = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        });
        let response = "";
        try {
          for (let data of parsedData.data) {
            const formData = {
              data: {
                concentration: data["concentration"] || null,
                dateCollected: data["dateCollected"] || null,
                file: data["file"] || null,
              },
            };
            response = await this.$store.dispatch("timeSeries/addData", formData);
            console.log(formData);
          }
          this.showAlertSuccess(`Import completed. ${response.message}`);
        } catch (err) {
          this.showAlertWarning(`Error importing: ${err}`);
        } finally {
          this.file = null;
        }
      };
      reader.onerror = (error) => {
        this.showAlertWarning(`Error reading file: ${error}`);
      };
      reader.readAsText(this.file);
    },
  },
};
</script>
