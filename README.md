# Pandora CODE Testing

## Backend

### Setup Instructions

1. Change API directory.
    ```bash
    cd pandora-be
    ```

2. Install dependencies.
    ```bash
    npm install
    # or
    yarn
    ```

3. Modify environment values.
    - Create a `.env` file in the API directory (`/project folder/pandora-be/.env`) based on `.env.example`.
    - Update the database configuration in the `.env` file with your database credentials.

### Database Setup

1. Create the database according to the configuration specified in the `.env` file.

2. Modify the `.env` file with the database credentials.

### Run Server in Development Mode

1. Watch & Build.
    ```bash
    yarn run watch
    # or
    npm run watch
    ```
    (Navigate to the project folder `/project folder/pandora-be`)

2. Run server.
    ```bash
    yarn run dev
    # or
    npm run dev
    ```

3. Tables are automatically synchronized into the database in development mode.**Don't need to import  database**

### Run Server in Production Mode

1. Watch & Build.
    ```bash
    yarn run watch
    # or
    npm run watch
    ```
    (Navigate to the project folder `/project folder/pandora-be`)

2. Run server.
    ```bash
    yarn run prod
    # or
    npm run prod
    ```

## Frontend

### Setup Instructions

1. Change Client directory.
    ```bash
    cd pandora-fe
    ```

2. Install dependencies.
    ```bash
    npm install
    # or
    yarn
    ```

3. Modify API base URL.
    - The default configuration for the API base URL is located in `/pandora-fe/src/Config/index.ts`.
    - To change the API URL, open `index.ts` and update the `BASE_URL` variable.
    ```typescript
    export const AppConfig = {
      BASE_URL: "http://127.0.0.1:8000/api",
    };
    ```

### Run App

```bash
yarn run dev
# or
npm run dev
