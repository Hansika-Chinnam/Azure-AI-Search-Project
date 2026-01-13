// Define the backend base URL once
const API_BASE = "https://employee-search-api-b7aqatckevevbtdh.centralindia-01.azurewebsites.net/api";

function search() {
  const query = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("results"); 
  const errorMessage = document.getElementById("errorMessage"); 
  const spinner = document.getElementById("spinner");

  // Clear previous results and messages
  resultsDiv.innerHTML = "";
  errorMessage.textContent = "";

  if (!query) {
    errorMessage.innerHTML = "<p class='error-message'>Please type something to search.</p>";
    return;
  }

  // Show spinner while fetching
  spinner.style.display = "block";

  // Use API_BASE in fetch
  fetch(`${API_BASE}/search?query=${encodeURIComponent(query)}`)
    .then(async res => {
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const message = data?.error || "Backend unreachable";
        throw new Error(message);
      }
      return data;
    })
    .then(data => {
      console.log("API response:", data);

      spinner.style.display = "none";
      resultsDiv.innerHTML = "";

      if (!Array.isArray(data) || data.length === 0) {
        resultsDiv.innerHTML = "<p>No results found</p>";
        return;
      }

      data.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";

        const h3 = document.createElement("h3");
        h3.textContent = item.title || "Untitled";

        const p = document.createElement("p");
        p.textContent = item.content || "No content available";

        const date = document.createElement("small");
        if (item.last_modified) {
          const d = new Date(item.last_modified);
          date.textContent = `Last updated: ${d.toDateString()}`;
          date.style.color = "#666";
          date.style.fontSize = "0.9em";
          date.style.display = "block";
        }

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(date);
        resultsDiv.appendChild(div);
      });
    })
    .catch(err => {
      console.error(err);
      spinner.style.display = "none";
      resultsDiv.innerHTML = `<p style='color:red'>${err.message}</p>`;
    });
}
