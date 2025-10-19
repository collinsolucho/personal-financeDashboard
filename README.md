# Personal Finance Dashboard

A comprehensive personal finance dashboard built with React Router for managing your finances effectively.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Dashboard Features

- 📊 **Overview**: Track your current balance, total income, and expenses at a glance.
- 💰 **Pots**: Manage savings goals such as Savings, Gift, Concert Ticket, and New Laptop with progress tracking.
- 📈 **Transactions**: View a list of recent transactions including dates, amounts, and sender/receiver details.
- 🥧 **Budget Visualization**: Interactive pie chart displaying budget allocations across categories like Entertainment, Bills, Dining Out, and Personal Care.
- 📅 **Recurring Bills**: Monitor paid bills, upcoming payments, and bills due soon.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`. Once running, navigate to the home page to see your personal finance overview.

## Building for Production

Create a production build:

```bash
npm run build
```

## Project Structure

```
my-react-router-app/
├── app/
│   ├── components/
│   │   └── components.jsx  # Reusable UI components (Navigation, Overview, Pots, etc.)
│   ├── routes/
│   │   └── home.jsx        # Main dashboard page with overview, pots, transactions, budget, and bills
│   ├── root.jsx            # App root component
│   ├── routes.js           # Route definitions
│   └── app.css             # Global styles with Tailwind CSS
├── public/
│   ├── favicon.ico
│   └── images/
│       └── img.jpg         # Sample image used in transaction components
├── package.json
├── vite.config.js
└── README.md
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router for personal finance management.
