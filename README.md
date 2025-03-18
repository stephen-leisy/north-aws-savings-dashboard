## Running Locally

To get the project running locally, follow these steps:

1. **Install pnpm** (if you don't have it installed already):

   - You can install pnpm globally by running the following command:
     ```bash
     npm install -g pnpm
     ```

2. **Install Dependencies**:

   - After installing pnpm, navigate to the project folder and install the dependencies:
     ```bash
     pnpm install
     ```

3. **Create a `.env` file**:

   - In the root of the project, create a `.env` file and add the following line:
     ```
     API_TOKEN={your_secret_token_here}
     ```
   - Make sure to replace `{your_secret_token_here}` with your actual API token.

4. **Run the Development Server**:
   - Once everything is set up, start the development server by running:
     ```bash
     pnpm run dev
     ```
   - This will start the app locally, usually accessible at `http://localhost:3000`.

Now the project should be up and running locally!

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
