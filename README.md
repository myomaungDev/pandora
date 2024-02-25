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

### Run App

```bash
yarn run dev
# or
npm run dev
