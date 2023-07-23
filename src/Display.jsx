import { useState } from "react";
import { product } from "./assets/data.js";

const fruits = product.filter((p) => p.category === "Fruits");
const vegetables = product.filter((p) => p.category !== "Fruits");

function ListItems({ category, arr, instock, userInput }) {
  const isStocked = [];
  arr.forEach((p) => {
    if (p.name.toString().toLowerCase().indexOf(userInput.toLowerCase()) === -1) {
      return;
    }
    if (instock && !p.stocked) {
      // console.log(instock , p.stocked);
      return;
    }
      // console.log(instock , p.stocked);
      isStocked.push(p);
      console.log(isStocked)
  });
  return (
    <>
      <h2>{category}</h2>
      <ul>
        {isStocked.map((p) => (
          <li key={p.name}>
            {p.name}
            <p>{p.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Display() {
  const [instock, setInstock] = useState(false);
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search ..."
        onChange={(e) => setUserInput(e.target.value)}
      />
      <label>
        <input type="checkbox" onChange={(e) => setInstock(e.target.checked)} />
        Display Instock
      </label>
      <ListItems category="Fruits" arr={fruits} instock={instock} userInput={userInput} />
      <ListItems
        category="Vegetables"
        arr={vegetables}
        instock={instock}
        userInput={userInput}
      />
    </>
  );
}
