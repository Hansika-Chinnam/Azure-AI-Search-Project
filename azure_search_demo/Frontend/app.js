function search() {
  const query = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("results"); 
  const errorMessage = document.getElementById("errorMessage"); 
  const spinner = document.getElementById("spinner");

  // Clear previous results and messages
  resultsDiv.innerHTML = "";
  errorMessage.textContent = "";

  if (!query) {
    // Show error message if input is empty
    errorMessage.innerHTML = "<p class='error-message'>Please type something to search.</p>";
    resultsDiv.innerHTML = "";
    return;
  } else {
    // Clear error message when user types something
    errorMessage.innerHTML = "";
  }

  // Show spinner while fetching
  spinner.style.display = "block";

  // Call backend with GET ?query
  fetch(`http://localhost:7071/api/search?query=${encodeURIComponent(query)}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Backend unreachable");
      }
      return res.json();
    })
    .then(data => {
      console.log("API response:", data);

      // Hide spinner after response
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

        // ✅ Add last updated date
        const date = document.createElement("small");
        if (item.last_modified) {
          const d = new Date(item.last_modified);
          date.textContent = `Last updated: ${d.toDateString()}`;
          date.style.color = "#666";      // light gray
          date.style.fontSize = "0.9em";  // smaller font
          date.style.display = "block";   // put on its own line
        }

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(date);
        resultsDiv.appendChild(div);
      });
    })
    .catch(err => {
      console.error(err);
      spinner.style.display = "none"; // hide spinner on error
      resultsDiv.innerHTML = "<p style='color:red'>Error connecting backend</p>";
    });
}
