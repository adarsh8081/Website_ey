const { createServer } = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
const { registerRoutes } = require('../server/routes');
const { serveStatic } = require('../server/vite');

// Register API routes
const server = registerRoutes(app);

// Serve static files
serveStatic(app);

// Export for Vercel
module.exports = app;
