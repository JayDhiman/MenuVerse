import winston from 'winston';
const { createLogger, format, transports } = winston;


const customLevels = {
    levels: {
      critical: 0,
      error: 1,
      warn: 2,
      info: 3,
      debug: 4
    },
    colors: {
      critical: 'red',
      error: 'red',
      warn: 'yellow',
      info: 'green',
      debug: 'blue'
    }
  };
  
  const logger = createLogger({
    levels: customLevels.levels,
    level: 'info', // Set the default log level
    format: format.combine(
      format.colorize({ all: true }),
      format.timestamp(),
      format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'app.log' })
    ]
  });
  
  winston.addColors(customLevels.colors);

export default logger;