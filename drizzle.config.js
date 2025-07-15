/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  dbCredentials:{
    url:'YOUR_API_POSTGRE_SQL'
  }
};
