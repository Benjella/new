function performSearch() {
    const query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("Please enter something to search!");
        return;
    }

    alert("You searched for: " + query);
    console.log("Search Query:", query);
}
