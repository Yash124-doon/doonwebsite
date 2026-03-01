require('dotenv').config();

const app = require('./src/app');
const { testConnection } = require('./src/config/db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Test database connection before starting the server
  await testConnection();

  app.listen(PORT, () => {
    console.log(`\n🚀 Doon School API Server`);
    console.log(`   ├── Status:  Running`);
    console.log(`   ├── Port:    ${PORT}`);
    console.log(`   ├── Health:  http://localhost:${PORT}/api/health`);
    console.log(`   └── Mode:    ${process.env.NODE_ENV || 'development'}\n`);
  });
};

startServer();
