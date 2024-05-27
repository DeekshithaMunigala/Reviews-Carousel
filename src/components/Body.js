import Data from "./Data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Body = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = Data[index];

  const checkNumber = (number) => {
    if (number > Data.length - 1) {
      return 0;
    } else if (number < 0) {
      return Data.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * Data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="container">
      <article className="reviews">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="right-quote">
            <FaQuoteRight />
          </span>
        </div>

        <div className="person-info">
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="text">{text}</p>
        </div>
      </article>

      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>

        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <div>
        <button className="btn" onClick={randomPerson}>
          suprise me
        </button>
      </div>
    </div>
  );
};

export default Body;
