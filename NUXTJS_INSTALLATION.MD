#### Requirements:
- vue-format (vscode)
- npm/yarn
- add vue-sweetalert2 (for plugins)
- add @nuxtjs/axios (for modules)
- add @nuxtjs/auth-next (for modules)

##### Install Nuxtjs
```yarn create nuxt-app <project-name>```

Nuxtjs Configuration
```
create-nuxt-app v5.0.0
✨  Generating Nuxt.js project in front-nuxt
? Project name: frontend-template
? Programming language: JavaScript
? Package manager: Yarn
? UI framework: Vuetify.js
? Template engine: HTML
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
```

##### Install vue-sweetalert2 on plugins
```
yarn add vue-sweetalert2
```
- add plugins on nuxt.config.js as 
    ```
        plugins: [{ src: "~/plugins/sweetalert2.js", ssr: false }],
    ```

##### Install @nuxtjs/axios on modules
```
yarn add @nuxtjs/axios
```
- add plugins on nuxt.config.js as 
    ```
        modules: ["@nuxtjs/axios"],
    ```
