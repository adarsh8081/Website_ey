# Praedo AI - Healthcare Directory Validation Platform

## Project Overview

Praedo AI is a healthcare directory validation platform that uses AI to automate provider data validation. The platform helps healthcare organizations maintain accurate provider directories by:

- Automatically validating provider information
- Detecting data decay and inconsistencies
- Processing CSV, Excel, and PDF files
- Providing confidence scores for validation results

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Radix UI, Lucide React icons
- **State Management**: TanStack Query (React Query)
- **Routing**: Wouter
- **Animations**: Framer Motion

## Project Structure

```
Praedo AI/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schemas
└── uploads/               # File upload directory
```

## Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (optional for development - uses in-memory storage by default)

### Installation

1. **Clone and navigate to the project directory**
   ```bash
   cd praedo-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL="postgresql://localhost:5432/healthos_dev"
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## Features

### Landing Page
- Hero section with animated metrics
- Feature highlights
- Testimonials and social proof
- Call-to-action sections

### Demo Page
- File upload interface (CSV, Excel, PDF)
- Real-time processing simulation
- Results visualization with confidence scores
- Provider validation status display

### Contact Form
- Multi-step contact form
- Form validation with Zod
- Email integration ready

### About/Problem/Solution Pages
- Detailed information about the platform
- Problem statement and solution overview
- Technical specifications

## API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/demo/upload` - Upload and process demo file
- `POST /api/demo/sample` - Load sample data for demo

## Database Schema

The application uses Drizzle ORM with the following main tables:

- `contact_submissions` - Contact form submissions
- `providers` - Healthcare provider data
- `demo_sessions` - Demo processing sessions

## Development Notes

- The project uses in-memory storage by default for development
- File uploads are stored in the `uploads/` directory
- Hot reloading is enabled for both frontend and backend
- TypeScript strict mode is enabled
- ESLint and Prettier configurations are included

## Production Deployment

1. Set `NODE_ENV=production`
2. Configure a PostgreSQL database
3. Set up proper environment variables
4. Run `npm run build` to build the application
5. Use `npm run start` to run the production server

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the PORT in your `.env` file
2. **Database connection issues**: Ensure PostgreSQL is running and DATABASE_URL is correct
3. **File upload issues**: Check that the `uploads/` directory exists and is writable
4. **Dependencies issues**: Delete `node_modules` and `package-lock.json`, then run `npm install`

### Missing Dependencies

If you encounter import errors, ensure all dependencies are installed:
```bash
npm install nanoid
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
