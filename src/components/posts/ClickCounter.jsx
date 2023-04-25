"use client";

import { useState } from "react";

export default function ClickCounter() {
  const [search, setSearch] = useState("juan");

  /***
   * Description: This function changes the search const state
   * @param event Default event onChange
   */
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  /***
   * Description: This function prevents the default behavior of submit
   * @param event Default event onClick
   */
  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1> Busca un Post </h1>
      <form>
        <input name="input" onChange={handleChange} />
        <button onClick={handleSearch}>Buscar</button>
        {search !== "" ? <h2>Tu búsqueda: {search}</h2> : <></>}
      </form>
    </div>
  );
}
