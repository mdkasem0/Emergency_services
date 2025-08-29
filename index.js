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
// Event delegation
cardContainer.addEventListener("click", function (e) {
  // If Copy button is clicked
  if (e.target.closest("#copy")) {
    const card = e.target.closest("div.bg-white.shadow");
    const textToCopy = card.querySelector("h3").innerText;
    const avaiableCopy = Number(copyCountValue.innerText);

    const updateVAlueCopy = avaiableCopy + 1;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied: " + textToCopy);
        copyCountValue.innerText = updateVAlueCopy;
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
  if (e.target.closest("#heart")) {
    const avaiablefav = Number(favCountValue.innerText);
    const updateVAluefav = avaiablefav + 1;
    alert("Added to Favourite List");
    favCountValue.innerText = updateVAluefav;
  }

  // If Call button is clicked
  if (e.target.closest("#call")) {
    const card = e.target.closest("div.bg-white.shadow");
    const number = card.querySelector("h3").innerText;
    const title = card.querySelector("h2").innerText;
    const avaiableCoin = Number(callCoin.innerText);

    if (avaiableCoin < 20) {
      alert("insufficient Ballance");
    } else {
      alert("Calling " + title + " " + number + " ... 📞");
      callCoin.innerText = avaiableCoin - 20;
      const newCard = document.createElement("div");

      newCard.innerHTML = `
        <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
      <div>
        <h3 class="text-sm mb-2 font-semibold text-gray-800">${title}</h3>
        <p class="text-xs text-gray-600">${number}</p>
      </div>
      <span class="text-xs text-gray-500">${getCurrentTime12Hour()}</span>
    </div>
        `;
      callList.appendChild(newCard);
    }
  }
});

// if clear button click

clearHistory.addEventListener("click", function (e) {
  const newCard = document.createElement("div");
  callList.innerHTML = `
    
    
    `;
});
