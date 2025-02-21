import axios from "axios";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(""); // State for JSON input
  const [response, setResponse] = useState(null); // State to store API response
  const [selected, setSelected] = useState([]); // State for dropdown selection

  // Function to send JSON to backend API
  const handleSubmit = async () => {
    try {
      const jsonData = JSON.parse(input); // Convert input to JSON
      const res = await axios.post("http://127.0.0.1:5000/bfhl", { data: jsonData.data });
      setResponse(res.data);
    } catch (err) {
      alert("Invalid JSON format or API Error");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>BFHL API Client</h1>
      
      {/* JSON Input Field */}
      <textarea
        rows="4"
        cols="50"
        placeholder='Enter JSON: { "data": ["A", "1", "2"] }'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {/* Display API Response */}
      {response && (
        <>
          <h3>Select Fields:</h3>

          {/* Dropdown to select fields */}
          <select multiple onChange={(e) => setSelected([...e.target.selectedOptions].map(o => o.value))}>
            <option value="numbers">Numbers</option>
            <option value="alphabets">Alphabets</option>
            <option value="highest_alphabet">Highest Alphabet</option>
          </select>

          <h3>Response:</h3>
          <pre>
            {JSON.stringify(
              Object.fromEntries(
                Object.entries(response).filter(([key]) => selected.includes(key))
              ),
              null,
              2
            )}
          </pre>
        </>
      )}
    </div>
  );
}

export default App;