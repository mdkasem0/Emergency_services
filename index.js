// Select the parent container
const cardContainer = document.getElementById("card");
const copyCountValue = document.getElementById("copyCount");
const favCountValue = document.getElementById("fav-value");
const callCoin = document.getElementById("callCoin");
const callList = document.getElementById("callList");
const clearHistory = document.getElementById("Clear");

//  function for getting time
function getCurrentTime12Hour() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // convert 0 -> 12 for midnight
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}
