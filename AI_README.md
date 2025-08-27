# Shaurya Jaiswal Portfolio Website

This repository contains the source code for a single‑page portfolio website built using **Next.js**, **React**, **Tailwind CSS** and **Framer Motion**. The website showcases Shaurya Jaiswal’s skills, experience and featured projects. Although written in JavaScript, the architecture draws inspiration from the MVVM/MVI paradigms familiar to Android developers by separating view logic from state and business logic using custom hooks.

## Project Structure

```
shaurya‑portfolio/
├── components/            # Reusable UI components
│   ├── About.js           # About section
│   ├── Contact.js         # Contact form
│   ├── Experience.js      # Professional experience timeline
│   ├── Hero.js            # Landing hero section
│   ├── Layout.js          # Page layout wrapper with navigation and footer
│   ├── Projects.js        # Featured apps/projects
│   └── Skills.js          # Technical skills grid
├── pages/
│   ├── _app.js            # Global stylesheet imports
│   ├── api/
│   │   └── contact.js     # Serverless API for form submissions
│   └── index.js           # Main page assembling all sections and SEO
├── public/
│   └── images/            # Static assets (hero background and profile placeholder)
├── styles/
│   └── globals.css        # Tailwind and global styles
├── utils/
│   └── useContactForm.js  # Custom hook managing contact form state (view model)
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration for Tailwind
├── package.json           # Dependencies and scripts
└── AI_README.md           # Overview and explanation of the codebase
```

### Components

- **Layout.js**: Serves as the outer wrapper for the website. It defines a responsive navigation bar linking to each section using anchor tags, a sticky header and a global footer. On small screens the navigation collapses into a hamburger menu controlled by local state.

- **Hero.js**: The landing section features a full‑viewport hero with a background image and introduction text. It uses `next/image` for optimized image loading and `framer-motion` to animate the entrance of the text and call‑to‑action button.

- **About.js**: Summarises the developer’s 8‑year journey in mobile development, highlighting the transition from Java to Kotlin/Compose and the importance of collaboration and performance. The component splits the narrative into two paragraphs and animates them into view as the user scrolls.

- **Skills.js**: Displays a grid of technologies (Kotlin, Android, Jetpack Compose, etc.) with light hover effects. Each item is wrapped in a `motion.div` to fade in sequentially when scrolled into view.

- **Projects.js**: Presents a selection of flagship applications that Shaurya has contributed to (PhonePe, Paytm and Slice). Each project card includes a brief description and a link to the respective website.

- **Experience.js**: Renders a timeline of professional roles. An array of experience objects defines the role, company, time period and bullet points. The component maps over this array to create a card for each entry. This approach decouples data from presentation and mirrors the **view model** concept from MVVM/MVI: data lives in a constant while the UI simply renders it.

- **Contact.js**: Provides a simple contact form with inputs for name, email and message. It leverages a custom hook (`useContactForm`) to manage form state, submission and feedback. Upon submission, the form calls a serverless API route and displays a success or error message to the user.

### Pages

- **_app.js**: The root component that imports the global CSS file and renders the current page component. This file is a standard requirement in Next.js to apply global styles.

- **index.js**: The entry point of the site. It assembles all sections (Hero, About, Skills, Projects, Experience and Contact) within the `Layout` component. SEO meta tags and Open Graph tags are defined using Next.js’s `Head` component to improve discoverability and social sharing.

- **api/contact.js**: A serverless function that handles POST requests from the contact form. In this demonstration it logs the submitted data and returns a success response. In a production environment this could be extended to send emails or store submissions in a database.

### Utilities

- **useContactForm.js**: Encapsulates the logic of the contact form. It holds state for form fields and submission status, provides change and submit handlers and resets the form after successful submission. Extracting this logic into a hook separates business logic from presentation and reflects the separation of concerns advocated by MVVM.

### Styling and Animations

Tailwind CSS is configured via `tailwind.config.js` and loaded in `globals.css`. A small palette of custom colours (the `primary` colour scale) and the `Inter` font are defined. Tailwind’s utility classes provide a consistent, responsive layout across all sections.

Framer Motion powers the subtle entrance animations for headings, paragraphs, cards and the hero section. Each component defines `initial`, `whileInView` and `transition` properties to animate content once as it enters the viewport.

### SEO Optimisation

Meta tags are provided in `index.js` using the `Head` component. These include:

- A descriptive title and description for search engines.
- Robots directive to allow indexing.
- Open Graph tags (title, description, image, type and URL) for improved link previews on social platforms.

### Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Extending the Contact Form

Currently the contact form simply logs submissions on the server and returns a success message. To send actual emails or persist data you could integrate an external service (e.g. AWS SES, SendGrid, or a database) in `pages/api/contact.js`. The form logic in `useContactForm` would remain unchanged, demonstrating how decoupling state management from UI allows for easy backend modifications.

### Architecture Inspiration from MVVM/MVI

While React and Next.js are inherently component‑driven, this codebase adopts a few principles from Android’s MVVM/MVI patterns:

- **Separation of concerns**: UI components in `components/` deal exclusively with presentation. Form logic resides in `utils/useContactForm.js`, and data for the experience timeline lives in a constant within `Experience.js`.
- **Observable state**: The custom hook manages state and exposes handlers, similar to how a ViewModel exposes LiveData in Android.
- **Unidirectional data flow**: Data flows from state (hook) into the view. User interactions trigger handler functions which update state and, in turn, update the UI.

This structure ensures the code remains modular, easy to maintain and familiar to developers with a background in Android architecture.