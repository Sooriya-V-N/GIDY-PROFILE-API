import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { format as winstonFormat } from "winston";
import path from "path";
import fs from "fs";
import moment from "moment-timezone";
import dotenv from "dotenv";
import { LOG_ROTATION, LOG_SUBDIRS } from "../constants/application.js";

dotenv.config();

const customTimestampFormat = () =>
  moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");

// logs/api
const logDir = path.join(process.env.LOGS_DIR || "logs", LOG_SUBDIRS.API);

// Ensure log directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logger = winston.createLogger({
  level: "info", // default level
  format: winstonFormat.combine(
    winstonFormat.timestamp({ format: customTimestampFormat }),
    winstonFormat.printf(
      (info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`
    )
  ),
  transports: [
    new DailyRotateFile({
      filename: path.join(logDir, "Gidy-Profile-Server-Log-%DATE%"),
      datePattern: "YYYY-MM-DD",
      maxSize: LOG_ROTATION.MAX_SIZE,
      maxFiles: LOG_ROTATION.MAX_FILES,
      extension: ".log",
    }),
  ],
});

/**
 * Morgan stream integration
 */
logger.stream = {
  write(message) {
    logger.info(message.trim());
  },
};

/**
 * Public logger methods
 */
export const debug = (...args) => {
  logger.debug(formatLogArguments(args));
};

export const info = (...args) => {
  logger.info(formatLogArguments(args));
};

export const warn = (...args) => {
  logger.warn(formatLogArguments(args));
};

export const error = (...args) => {
  logger.error(formatLogArguments(args));
};

export const stream = logger.stream;

/**
 * Format log arguments
 */
function formatLogArguments(args) {
  const stackInfo = getStackInfo(2);
  let prefix = "";

  if (stackInfo) {
    const folderName = stackInfo.relativePath.split("/").at(-2);
    prefix = `[${folderName}][${stackInfo.file}:${stackInfo.line}]`;
  }

  return `${prefix} ${args.join(" ")}`;
}

/**
 * Stack trace parser
 */
function getStackInfo(stackIndex) {
  const stacklist = new Error().stack.split("\n").slice(3);

  const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/;
  const stackReg2 = /at\s+()(.*):(\d*):(\d*)/;

  const s = stacklist[stackIndex] || stacklist[0];
  const sp = stackReg.exec(s) || stackReg2.exec(s);

  if (sp && sp.length === 5) {
    return {
      method: sp[1],
      relativePath: sp[2],
      line: sp[3],
      pos: sp[4],
      file: path.basename(sp[2]),
    };
  }
}

export default { debug, info, warn, error };
