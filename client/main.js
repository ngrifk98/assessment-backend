const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const quoteButton = document.getElementById("quoteButton");
const affirmationButton = document.getElementById("affirmationButton");
const journalEntryInput = document.getElementById("journalEntryInput");
const submitEntryButton = document.getElementById("submitEntryButton");

const getCompliment = () => {
  axios
    .get("http://localhost:4000/api/compliment")
    .then((res) => {
      const compliment = res.data;
      alert(compliment);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getFortune = () => {
  axios
    .get("http://localhost:4000/api/fortune")
    .then((res) => {
      const fortune = res.data.fortune; // Access the 'fortune' property
      alert(fortune);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getQuote = () => {
  axios
    .get("http://localhost:4000/api/quote")
    .then((res) => {
      const quote = res.data.quote; // Access the 'quote' property
      alert(quote);
    })
    .catch((error) => {
      console.error(error);
    });
};


const getAffirmation = () => {
  axios
    .get("http://localhost:4000/api/affirmation")
    .then((res) => {
      const affirmation = res.data;
      alert(affirmation);
    })
    .catch((error) => {
      console.error(error);
    });
};

const submitEntry = () => {
  const entry = journalEntryInput.value;
  
  axios
    .post("http://localhost:4000/api/entries", { entry })
    .then((res) => {
      alert(res.data.message);
      journalEntryInput.value = ""; // Clear the input field after successful submission
    })
    .catch((error) => {
      console.error(error);
    });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
quoteButton.addEventListener("click", getQuote);
affirmationButton.addEventListener("click", getAffirmation);
submitEntryButton.addEventListener("click", submitEntry);

