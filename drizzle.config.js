/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_m0tMxWh2frDZ@ep-damp-bar-a8ecaq32-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
  }
};
