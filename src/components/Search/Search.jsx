import { useState } from "react";
import "./search.css";

function Search() {
  const [text, setText] = useState("");
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Movies"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
}

export default Search;