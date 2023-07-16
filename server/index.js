const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require("./controller");

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/quote", controller.getQuote);
app.get("/api/affirmation", controller.getAffirmation);
app.post("/api/entries", controller.createEntry); // New endpoint for creating journal entries

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
