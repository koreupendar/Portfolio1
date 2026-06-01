# Portfolio Project

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. This project showcases professional web development skills and provides a clean, elegant platform to display personal information, skills, projects, and contact details.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI Components**: Built with shadcn/ui components for a polished, professional look
- **Smooth Animations**: Smooth scrolling and section transitions for enhanced user experience
- **Dark/Light Mode**: Built-in theme switching capability
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Dedicated section to display projects with descriptions and links
- **Skills Display**: Visual representation of technical skills
- **Education Timeline**: Educational background with timeline visualization
- **SEO Optimized**: Meta tags and Open Graph configuration for better search visibility

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Email Service**: EmailJS
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Testing**: Vitest, Playwright
- **Linting**: ESLint

## Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager
- Git (for version control)

## Installation

### Clone the Repository

```bash
git clone https://github.com/koreupendar/portfolio.git
cd portfolio
```

### Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Testing

Run unit tests with Vitest:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run end-to-end tests with Playwright:

```bash
npx playwright test
```

## Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/            # Images and static resources
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── test/             # Test files
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tailwind.config.ts    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Setup

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Add your credentials to the `.env` file

## Customization

### Personal Information

Update your personal information in the respective component files:

- **Hero Section**: `src/components/HeroSection.tsx`
- **About Section**: `src/components/AboutSection.tsx`
- **Skills Section**: `src/components/SkillsSection.tsx`
- **Projects Section**: `src/components/ProjectsSection.tsx`
- **Education Section**: `src/components/EducationSection.tsx`
- **Contact Section**: `src/components/ContactSection.tsx`

### Styling

Modify the color scheme and design tokens in:

- `tailwind.config.ts` - TailwindCSS configuration
- `src/index.css` - Global CSS variables and styles

### Profile Image

Replace the profile image at:
- `src/assets/profile.jpg`

## Deployment

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set the source to the `main` branch
3. Push changes to trigger deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Docker

Build and run using Docker:

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## Security Considerations

- **Environment Variables**: Never commit `.env` files or sensitive data to the repository
- **API Keys**: Store API keys and secrets in environment variables
- **Dependencies**: Regularly update dependencies to patch security vulnerabilities
- **Input Validation**: Validate all user inputs, especially in the contact form
- **HTTPS**: Always use HTTPS in production deployments

## Performance Optimization

- **Code Splitting**: React Router handles automatic code splitting
- **Image Optimization**: Use appropriate image formats and sizes
- **Lazy Loading**: Components are loaded on-demand
- **Build Optimization**: Vite automatically optimizes the production build
- **Tree Shaking**: Unused code is automatically removed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License.

## Contact

- **GitHub**: [@koreupendar](https://github.com/koreupendar)
- **Portfolio**: https://github.com/koreupendar/portfolio

## Acknowledgments

- Built with [React](https://react.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Styling with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Hosting on [GitHub Pages](https://pages.github.com/)

---

**Note**: This portfolio project is continuously evolving. Check the repository for the latest updates and features.
