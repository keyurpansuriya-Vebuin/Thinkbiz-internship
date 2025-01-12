let suggestionData = [];

async function fetchData() {
  try {
    const response = await fetch("suggestion.json");
    suggestionData = await response.json();
  } catch (error) {
    console.error("Error fetching the data:", error);
  }
}

window.onload = fetchData;

function getSuggestion(queryInput, containerId) {
  const query = document.getElementById(queryInput).value.toLowerCase();
  const suggestionsContainer = document.getElementById(containerId);
  const suggestionsSelect = suggestionsContainer.querySelector("select");
  suggestionsSelect.innerHTML = "";

  if (query.length > 0) {
    const filteredData = suggestionData.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    suggestionsContainer.style.display =
      filteredData.length > 0 ? "block" : "none";

    filteredData.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.name;
      option.textContent = item.name;
      suggestionsSelect.appendChild(option);
    });

    suggestionsSelect.size = Math.min(filteredData.length, 5);
  } else {
    suggestionsContainer.style.display = "none";
  }
}

function selectSuggestion(inputId, containerId) {
  const suggestionsContainer = document.getElementById(containerId);
  const suggestionsSelect = suggestionsContainer.querySelector("select");
  const searchBox = document.getElementById(inputId);

  searchBox.value = suggestionsSelect.value;
  suggestionsContainer.style.display = "none";
}

document.addEventListener("click", function (e) {
  ["pickupsuggestion", "dropsuggestion"].forEach((containerId) => {
    const container = document.getElementById(containerId);
    if (
      !container.contains(e.target) &&
      !document
        .getElementById(containerId.replace("suggestion", "Location"))
        .contains(e.target)
    ) {
      container.style.display = "none";
    }
  });
});
