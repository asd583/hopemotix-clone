fetch('https://www.set.or.th/en/market/product/stock/overview') // SET website
  .then(response => response.text())
  .then(data => {
      // Parse the HTML text to get the specific stock number you're interested in
      let parser = new DOMParser();
      let doc = parser.parseFromString(data, 'last,Values');
      
      // Example: Extracting the stock price from an element with specific class
      // This is just a sample. You'll need to inspect the page and find the correct CSS selector for the stock price
      let stockPrice = doc.querySelector('.stock-price-selector').textContent;
      
      // Process stock price data
      let decimalDigit1 = stockPrice.split('.')[1]?.charAt(0);  // First digit after decimal point
      let decimalDigit2 = stockPrice.split('.')[0]?.slice(-5, -4);  // Fifth digit from left before decimal point

      let result = decimalDigit1 + decimalDigit2; // Combine the two digits

      // Update your page with the result
      document.getElementById('live-stock-data').innerText = result; // Assuming you have an element with this ID in HTML
  })
  .catch(error => console.error('Error fetching data:', error));