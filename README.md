# ✨ My Portfolio Website ✨

This project is a personal portfolio website built with Next.js, designed to showcase my skills, experience, and recent projects. It provides a clean and engaging user experience with interactive elements and a modern design. The website is structured to be easily maintainable and extendable, allowing for future updates and additions.

🚀 **Key Features**

*   **Hero Section:** Engaging introduction with animated text and spotlight effects.
*   **Grid Layout:** Visually appealing grid showcasing key skills and areas of expertise.
*   **Recent Projects:** Display of recent projects with 3D pin effects and links to external resources.
*   **Experience Section:** Highlights work experience with interactive button effects.
*   **Floating Navigation:** A navigation bar that stays fixed on the screen as the user scrolls.
*   **Theme Switching:** Dark/light mode support with persisted user preference.
*   **Responsive Design:** Optimized for various screen sizes and devices.

🛠️ **Tech Stack**

*   **Frontend:**
    *   Next.js
    *   React
    *   Tailwind CSS
    *   clsx
    *   tailwind-merge
    *   react-icons
*   **Styling:**
    *   Global CSS
    *   Tailwind CSS utility classes
*   **Fonts:**
    *   Inter (Google Fonts)
*   **UI Libraries/Components:**
    *   Custom UI components (Spotlight, TextGenerateEffect, MagicButton, 3D Pin, Moving Borders)
*   **Other:**
    *   TypeScript

📦 **Getting Started**

### Prerequisites

*   Node.js (version 18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

📂 **Project Structure**

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout for the application
│   ├── page.tsx            # Main homepage component
│   └── provider.tsx        # Theme Provider
├── components/
│   ├── Hero.tsx            # Hero section component
│   ├── Grid.tsx            # Grid layout component
│   ├── Footer.tsx          # Footer component
│   ├── Clients.tsx         # Clients section component
│   ├── Approach.tsx        # Approach section component
│   ├── Experience.tsx      # Experience section component
│   ├── RecentProjects.tsx  # Recent projects component
│   ├── ui/               # Custom UI components
│   │   ├── Spotlight.tsx   # Spotlight effect component
│   │   ├── TextGenerateEffect.tsx # Animated text component
│   │   ├── MagicButton.tsx # Magic Button component
│   │   ├── 3d-pin-client.tsx # 3D Pin effect component
│   │   └── MovingBorders.tsx # Moving border button component
│   └── FloatingNavbar.tsx  # Floating navigation bar component
├── data/
│   └── index.ts            # Static data for the application
├── lib/
│   └── utils.ts            # Utility functions
├── next.config.mjs       # Next.js configuration file
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

📸 **Screenshots**

*(Add screenshots of your portfolio website here to showcase its visual appeal and functionality.)*

🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear and concise messages.
4.  Submit a pull request.

📝 **License**

This project is licensed under the [MIT License](LICENSE).

📬 **Contact**

If you have any questions or suggestions, feel free to contact me at [your_email@example.com](mailto:your_email@example.com).

💖 **Thanks**

Thank you for checking out my portfolio website! I hope you find it informative and visually appealing.

This README was written by [readme.ai](https://readme-generator-phi.vercel.app/), your go-to AI README generator.

