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
  },
};
