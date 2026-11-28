
// Import the Express application
const app = require("./app");

// Import the database connection function
const connectDB = require("./config/database");

// Define the port
const PORT = 3000;

// Create a function to start the server
const startServer = async () => {
  // Connect to MongoDB first
  await connectDB();

  // Start the server after connecting
  app.listen(PORT, () => {
    console.log(`BulkShare server is running on port ${PORT}`);
  });
};

// Run the function
startServer();
