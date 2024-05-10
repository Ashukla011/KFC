import React, { useState } from 'react';
// import './styles.css'; 

function ToggleList() {
  const [showList, setShowList] = useState(true);

  return (
    <div className="toggle-list">
      <h2 className="toggle-header" onClick={() => setShowList(!showList)}>Level</h2>
      {showList && (
        <ul className="list">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>List item 5</li>
        </ul>
      )}
    </div>
  );
}

export default ToggleList;
