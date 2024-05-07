import React, { useState } from 'react';

const SearchFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Hồng'];

  const handleSearch = () => {
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        --- list ---
        <div>
          <table>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        --- result ---
        <table>
          <tbody>
            {filteredItems && filteredItems.length > 0
              ? filteredItems?.map((item, index) => (
                  <tr key={index}>
                    <td>{item}</td>
                  </tr>
                ))
              : 'Không có kết quả'}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchFilter;
