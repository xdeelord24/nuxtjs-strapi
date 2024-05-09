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
