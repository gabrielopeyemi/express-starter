import { MONGO_DB_NAME, MONGO_HOST, MONGO_PASSWORD, MONGO_PORT, MONGO_PROTOCOL, MONGO_USERNAME } from "./mainConfig";
const NEW_MONGO_PORT = parseInt(MONGO_PORT)

export const connString = `${MONGO_PROTOCOL}://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}${NEW_MONGO_PORT ? ':'+NEW_MONGO_PORT : '' }/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

export default () => ({ connString });