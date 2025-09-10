from bs4 import BeautifulSoup

# Sample HTML content (you can load your HTML file here)
html_content =https://www.set.or.th/en/market/product/stock/overview """
<table id="table-jph2e9bjux">
    <tr>
        <th>Stock</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>ABC</td>
        <td>12345.6789</td>
    </tr>
    <tr>
        <td>XYZ</td>
        <td>98765.4321</td>
    </tr>
</table>
"""

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Find all rows in the table
rows = soup.find_all('tr')

# Extract the digits
for row in rows[1:]:  # Skip the header row
    cells = row.find_all('td')
    if cells:
        stock = cells[0].text
        price = cells[1].text.strip()

        # Extract the first and last digit of the number
        first_digit = price[0]
        last_digit = price[-1]

        # Extract the digit before the decimal point
        decimal_digit = price.split('.')[1][0] if '.' in price else '0'

        # Combine the digits
        result = f"{first_digit}{last_digit}{decimal_digit}"

        # Print or use the result as needed
        print(f"Stock: {stock} -> Extracted Digits: {result}")