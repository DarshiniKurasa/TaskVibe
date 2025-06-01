import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";

import { config } from "./config/app.config";
import connectDatabase from "./config/database.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { HTTPSTATUS } from "./config/http.config";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { isAuthenticated } from "./middlewares/isAuthenticated.middleware";

import "./config/passport.config";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import workspaceRoutes from "./routes/workspace.route";
import memberRoutes from "./routes/member.route";
import projectRoutes from "./routes/project.route";
import taskRoutes from "./routes/task.route";

const app = express();
const BASE_PATH = config.BASE_PATH;

// ✅ Debug Express startup
console.log("🚀 Starting Express server...");

// ✅ CORS configuration (Ensures credentials are passed)
app.use(
  cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Express-session with MongoDB store (Session persists across requests)
app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: config.MONGO_URI }),
    cookie: {
      secure: config.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// ✅ Debug session before Passport initialization
app.use((req, res, next) => {
  console.log("Session Data:", req.session);
  console.log("User:", req.user);
  next();
});

app.use(passport.initialize());
app.use(passport.session());

// ✅ Test authentication route (Try accessing this in browser)
app.get(
  `/test-auth`,
  asyncHandler(async (req: Request, res: Response) => {
    return res.status(HTTPSTATUS.OK).json({
      authenticated: req.isAuthenticated(),
      user: req.user || null,
    });
  })
);

// ✅ Define Routes
app.use(`${BASE_PATH}/auth`, authRoutes);
app.use(`${BASE_PATH}/user`, isAuthenticated, userRoutes);
app.use(`${BASE_PATH}/workspace`, isAuthenticated, workspaceRoutes);
app.use(`${BASE_PATH}/member`, isAuthenticated, memberRoutes);
app.use(`${BASE_PATH}/project`, isAuthenticated, projectRoutes);
app.use(`${BASE_PATH}/task`, isAuthenticated, taskRoutes);

app.use(errorHandler);

// ✅ Start Server & Connect Database
app.listen(config.PORT, async () => {
  console.log(`🚀 Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
  await connectDatabase();
});
