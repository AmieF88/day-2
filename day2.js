const input = require("prompt-sync")();

// Required arrays
let feedbackComments = [];
let satisfactionRatings = [];

console.log("Customer Feedback Logger");
console.log("Please enter 5 customer feedback entries.\n");

for (let i = 1; i <= 5; i++) {
  console.log(`--- Feedback Entry ${i} ---`);

  let comment = input("Enter feedback comment: ").trim();
  if (!comment) {
    console.log("Invalid comment. Try again.");
    i--;
    continue;
  }

  let ratingStr = input("Enter satisfaction rating (1–5): ").trim();
  let rating = parseInt(ratingStr);

  if (isNaN(rating) || rating < 1 || rating > 5) {
    console.log("Invalid rating. Please enter a number between 1 and 5.\n");
    i--;
    continue;
  }

  // Push data to arrays
  feedbackComments.push(comment);
  satisfactionRatings.push(rating);

  console.log("Feedback recorded!\n");
}

// Reporting
console.log("\n--- Feedback Comments ---");
console.table(feedbackComments);

console.log("\n--- Satisfaction Ratings ---");
console.table(satisfactionRatings);
