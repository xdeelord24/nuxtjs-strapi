<template>
<v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
            <StrapiLogo />
            <NuxtLogo />
            <VuetifyLogo />
        </v-card>
        <v-card>
            <v-card-title class="headline">
                Welcome to the Vuetify + Nuxt.js template
            </v-card-title>
            <v-card-text>
                <p>
                    Vuetify is a progressive Material Design component framework for
                    Vue.js. It aims to provide developers with the tools they need to create
                    beautiful, high-quality applications effortlessly.
                </p>
                <p>
                    Explore more about Vuetify in the
                    <a href="https://vuetifyjs.com" target="_blank" rel="noopener noreferrer">
                        official documentation</a>.
                </p>
                <p>
                    Join our vibrant community on
                    <a href="https://chat.vuetifyjs.com/" target="_blank" rel="noopener noreferrer" title="chat">
                        Discord</a> if you have any questions.
                </p>
                <p>
                    Encounter a bug? Help us improve by reporting it on our
                    <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" rel="noopener noreferrer" title="contribute">
                        GitHub issue board</a>.
                </p>
                <p>
                    Your contributions and feedback are what help us make Vuetify better. Thank you for choosing Vuetify!
                </p>
                <div class="text-xs-right">
                    <em><small>&mdash; John Leider</small></em>
                </div>
                <hr class="my-3" />
                <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
                    Learn more about Nuxt</a>
                <br />
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer">
                    Contribute to Nuxt on GitHub</a>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="primary" nuxt to="/inspire">Get Started</v-btn>
                <v-btn color="primary" nuxt to="/newPage">This is new page</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    name: "IndexPage",
    // layout: "template"
};
</script>
