#!/bin/bash

# Create a .env file with the following content
echo 'SANITY_STUDIO_PROJECT_ID="<replace-with-your-project-id>" #REQUIRED' > .env
echo 'SANITY_STUDIO_DATASET="<replace-with-your-dataset>" #REQUIRED - DEFAULT - `production`' >> .env
echo 'SANITY_STUDIO_TOKEN="" #REQUIRED -  Generate from `Sanity Project > API > Tokens`' >> .env

# Replace the placeholders with your project id, dataset, and token
echo 'All done! You can now run `pnpm run dev` to start the Application. Or you can run the `pnpx sanity dev` command to start the Sanity Studio.'