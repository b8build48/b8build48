const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Sample data array with links
const data = [
  { text: "website builder", link: "website-builder.html" },
  { text: "Pricing", link: "pricing.html" },
  { text: "Blog", link: "https://nethtech.com.ng" },
  { text: "Contact", link: "contact.html" },
  { text: "tutorial and file download", link: "#tutorial-and-file" },
  { text: "Building Your Online Presence", link: "website-builder.html" },
  { text: "Creating Content with WordPress", link: "#Creating-Content-with-WordPress" },
  { text: "Join the b8build48  Community", link: "#b8build48-community" },
  { text: "Advanced WordPress Features", link: "#advanced-wordpress-features" },
];

searchButton.addEventListener('click', search);

function search() {
  const query = searchInput.value.toLowerCase();
  const results = data.filter(item => item.text.toLowerCase().includes(query));

  searchResults.innerHTML = '';
  if (results.length === 0) {
    searchResults.textContent = 'No results found';
  } else {
    results.forEach(result => {
      const resultElement = document.createElement('div');
      const linkElement = document.createElement('a');
      linkElement.textContent = result.text;
      linkElement.href = result.link;
      resultElement.appendChild(linkElement);
      searchResults.appendChild(resultElement);
    });
  }
}
const linkElement = document.createElement('a');
linkElement.textContent = result.text;
linkElement.href = result.link;
linkElement.style.textDecoration = 'none';
