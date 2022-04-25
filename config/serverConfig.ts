import { PORT, SERVER_NAME, JWT_SECRET, JWT_EXPIRES_IN } from "./mainConfig";

export const port: number = parseInt(PORT);
export const serverName: string = SERVER_NAME;
export const jwtSecret: string = JWT_SECRET;
export const jwtExpiresIn: number = parseInt(JWT_EXPIRES_IN);

