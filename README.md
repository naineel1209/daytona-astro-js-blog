# Sample AstroJS + Sanity CMS Blog (feat. Daytona)

A minimalistic blog built using AstroJS and Sanity CMS for content management, showcasing how incredibly developer-friendly it is to create a blog. With added benefits of Daytona (our fav. Development Environment Manager [🔗](https://www.daytona.io/))

---

## 👀 Features

- Ease of use with AstroJS and Sanity CMS
- Highly modular schema for blogs
- Proper utilization of various Astro components
- Real-time content updates via Sanity
- "Share with your friends" button for easy sharing
- View count tracking for each blog post
- Tags categorization for better content organization
- Proper Markdown UI rendering, including support for code blocks and inline code spans
- Save and share your most important code snippets with the world

## 🚀 Getting Started
### Prerequisites
- Beginner level familiarity with AstroJS & Sanity
- **Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).
- Tons Of Enthusiasm!

### Steps

1. Create a workspace:
  This command will create a workspace for the repository you are working on:
  ```bash
  daytona create <REPO_URL>
  ```
2. Setting up environment variables for Sanity.io:
  The above command will set up all the required dependencies using `pnpm` and create a `.env` file:
  ```sh
  SANITY_STUDIO_PROJECT_ID="<PROJECT_ID>" #REQUIRED
  SANITY_STUDIO_DATASET="production" #REQUIRED
SANITY_STUDIO_TOKEN=""  #REQUIRED IF AND ONLY IF THE DATASET IS PRIVATE - MORE INFO: https://stackoverflow.com/a/78758073/14276268
  ```
3. Start the Astro Server:
  This command will start the Astro development server:
  ```bash
  pnpm run dev
  ```
4. Start the Sanity CMS:
  In another terminal window, run the following command to start the Sanity Development Studio, where you can edit all the content visible to users:
  ```bash
  pnpm run sanity-dev
  ```
5. Hold your horses for a few second!!!

🎉 You're all set to explore the power of AstroJS, Sanity CMS, and Daytona!
