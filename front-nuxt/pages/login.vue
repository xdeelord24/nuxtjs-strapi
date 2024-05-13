<template>
<v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
            <StrapiLogo />
            <NuxtLogo />
            <VuetifyLogo />
        </v-card>
        <v-card>
            <v-card-title class="headline"> Login </v-card-title>
            <v-card-text>
                <v-text-field label="Username" v-model="username" />
                <v-text-field label="Password" type="password" v-model="password" />
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="primary" nuxt @click="performLogin"> Login </v-btn>
                <v-btn color="primary" nuxt @click="performLogout"> Logout </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
import globalMixins from "~/mixins/global";
export default {
    mixins: [globalMixins],
    name: "LoginPage",
    data: () => ({
        username: "",
        password: "",
    }),
    mounted() {},
    methods: {
        async performLogin() {
            this.loadingTrue();
            try {
                // Perform the login
                const res = await this.$auth.loginWith("local", {
                    data: {
                        identifier: this.username,
                        password: this.password,
                    },
                });
                this.showAlertSuccess("Success");
                this.loadingFalse();
            } catch (error) {
                this.showAlertWarning(`${error}`);
            }
        },
    },
};
</script>
