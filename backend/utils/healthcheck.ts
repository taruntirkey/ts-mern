import type { Request, Response } from "express";

const healthcheck = (req: Request, res: Response) => {
  const healthcheck = {
    hostname: req.hostname,
    uptime: process.uptime(),
    message: "OK",
    timestamp: new Date(),
  };
  try {
    res.send(healthcheck);
  } catch (e) {
    if (e instanceof Error) {
      healthcheck.message = e.message;
    }
    healthcheck.message = "Unknown internal server error.";
    res.status(503).send();
  }
};

export default healthcheck;
