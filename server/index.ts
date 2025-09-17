import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Rewrite Builder preview checks to root so Vite serves index.html
  app.use((req, _res, next) => {
    if (req.path === "/__builder_ping" || req.path === "/index.html") {
      req.url = "/";
    }
    next();
  });

  // Pass-through for non-API routes when used as a sub-app (e.g., in Vite dev)
  // - Unknown API routes: return 404 JSON
  // - Non-API routes: call next() so Vite can serve index.html and assets
  app.use((req, res, next) => {
    if (req.path.startsWith("/api") || req.path.startsWith("/health")) {
      return res.status(404).json({ error: "API endpoint not found" });
    }
    next();
  });

  return app;
}
