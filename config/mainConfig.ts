require('dotenv/config');
 
// Server
export const PORT = process.env.SERVER_PORT || '8000';
export const SERVER_NAME = process.env.SERVER_NAME|| 'ask gabriel'

// MongoDB
// DB CONFIG
export const MONGO_HOST = process.env.MONGO_HOST || ''
export const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
export const MONGO_PORT = process.env.PORT || '0';
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';
export const MONGO_AUTH_SOURCE = process.env.MONGO_AUTH_SOURCE || '';
export const MONGO_SSL_BOOL = process.env.MONGO_SSL === 'true';
export const MONGO_PROTOCOL = process.env.MONGO_PROTOCOL || 'mongodb';


// JWT Config
export const JWT_SECRET = process.env.JWT_SECRET || '';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '86400';