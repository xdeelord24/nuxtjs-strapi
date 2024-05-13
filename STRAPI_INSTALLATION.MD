#### Requirements:
- vue-format (vscode)
- npm/yarn

##### Install Strapi
`$ yarn create strapi-app <project-name> --quickstart`

The strapi application will automatically install its dependencies and requirements

<i>
Note: Don't install strapi application under a directory with a space on its name.

    ❌ FOLDER NAME/strapi
    ✅ FOLDER_NAME/strapi
</i>

##### Configurate .env file
Copy the `.env.example` file and rename it as `.env`
Edit the file with the parameter named `toBeModied`
```
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=tobemodified
```
The default database is Sqlite with a directory of `.tmp/data.db`
##### Run the strapi app as development
`$ yarn develop`
##### Run the strapi app as production
```
$ yarn build
$ yarn start
```