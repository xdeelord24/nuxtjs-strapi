// import moment from "moment";
// import CryptoJS from "crypto-js";
import UAParser from "ua-parser-js";

export default {
  name: "GlobalMixin",
  data() {
    return {
      // secretKey: "SECRETKEY",
      // config: {
      //   headers: {
      //     Authorization: `${this.$auth.$storage._state["_token.local"]}`,
      //   },
      // },
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  methods: {
    showAlertSuccess(data) {
      this.$swal({
        title: data.toString(),
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "Ok",
      });
    },
    showAlertWarning(data) {
      this.$swal({
        title: data,
        icon: "warning",
        timerProgressBar: true,
        confirmButtonText: "Ok",
        cancelButtonText: "Cancel",
      });
    },
    async showAlertWarningWithFunction(data, settings = {}) {
      try {
        const defaultSettings = {
          title: data,
          icon: "warning",
          html: "",
          timerProgressBar: true,
          confirmButtonText: "Ok",
          cancelButtonText: "Cancel",
          showCancelButton: true,
        };
        const finalSettings = Object.assign({}, defaultSettings, settings);
        const result = await this.$swal(finalSettings);
        if (result.isConfirmed && settings.onConfirm) {
          settings.onConfirm();
        } else if (result.isDismissed && settings.onCancel) {
          settings.onCancel();
        }
      } catch (e) {
        console.log(`Error showAlertWarningWithFunction: ${e}`);
      }
    },
    async performLogout() {
      this.loadingTrue();
      try {
        setTimeout(async () => {
          this.loadingFalse();
          await this.$auth.logout();
          this.$store.dispatch("user/resetState");
        }, 500);
      } catch (e) {}
    },
    loadingTrue() {
      // Show loading SweetAlert
      this.$swal.fire({
        title: "Loading",
        allowOutsideClick: false,
      });
      this.$swal.showLoading();
    },
    loadingFalse() {
      // close loading SweetAlert
      this.$swal.close();
    },
  },
};
