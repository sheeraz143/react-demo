import React, { useState } from "react";

import "./App.css";

function TextFunction() {
  const [value, setValue] = useState([
    {
      company: "Mobius",
      contact: "Syed",
      country: "India",
    },
    {
      company: "Playtonia",
      contact: "Sheeru",
      country: "India",
    },
    {
      company: "inspire",
      contact: "shariq",
      country: "India",
    },
  ]);
  function deleterow() {
    var temp = [...value]; // 3
    temp.pop(); // 2
    setValue(temp);
  }
  function deleteCurrentRow(index) {
    var tempindex = [...value];
    tempindex.splice(index, 1);
    setValue(tempindex);
    // console.log("deleteCurrentRow", index);
  }

  return (
    <div>
      <button
        onClick={() => {
          var tempArray = [...value]; // 3
          tempArray.push({
            company: `inspire ${tempArray.length + 1}`,
            contact: `shariq ${tempArray.length + 1}`,
            country: `india ${tempArray.length + 1}`,
          }); // 1
          setValue(tempArray);
        }}
      >
        addrow
      </button>
      <button onClick={deleterow}>DeleteLast</button>
      <table className="table">
        <thead >
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {value.map((item, index) => {
            return (
              <tr>
                <td>{item.company}</td>
                <td>{item.contact}</td>
                <td>{item.country}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteCurrentRow(index);
                    }}
                  >
                    Delete Current Row
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TextFunction;



