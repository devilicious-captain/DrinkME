import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../Context";

function SearcForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          {/* <label htmlFor="name">Search your favourite Cocktail</label> */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Search Your favorite Cocktail"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearcForm;
