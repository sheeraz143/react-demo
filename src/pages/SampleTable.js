import React, { useState } from "react";

function MyFunction() {
  const [value, setValue] = useState([
    {
      Name: "Mobius",
      age: "Syed",
      Adress: "India",
    },
    {
      Name: "Playtonia",
      age: "Sheeru",
      Adress: "India",
    },
    {
      Name: "inspire",
      age: "shariq",
      Adress: "India",
    },
  ]);
  function deleteRowCurrent(index) {
    //  console.log("assa");
    var deleteRowCurrent = [...value];
    deleteRowCurrent.splice(index, 1);
    setValue(deleteRowCurrent);
  }
  return (
    <div>
      <button
        onClick={() => {
          let newArray = [...value];
          newArray.push({
            Name: `inspire ${newArray.length + 1}`,
            age: "shariq",
            Adress: "India",
          });
          setValue(newArray);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          var deleteRow = [...value];
          deleteRow.pop();
          setValue(deleteRow);
        }}
      >
        Delete
      </button>
      <table className="table" style={{ bordercollapse: "collapse" }}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Adress</th>
        </tr>
        <tbody>
          {value.map((item,index) => {
            return (
              <tr>
                <td>{item.Name}</td>
                <td>{item.age}</td>
                <td>{item.Adress}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteRowCurrent(index);
                    }}
                  >
                    Delete
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
export default MyFunction;
