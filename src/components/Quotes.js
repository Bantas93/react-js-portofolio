import { useState, useEffect } from "react";
// import dotenv from "dotenv";

const apiKey = process.env.REACT_APP_API_KEY;
const category = "success";

const Quotes = () => {
  const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=" + category;
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, []);

  function fetchData() {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // const quoteData = data[0] || {};
        // setQuote(quoteData.quote || "");
        // setAuthor(quoteData.author || "");
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        console.log(data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }

  return (
    <div className="container-fluid text-center text-white-50 pt-5 bg-quotes">
      <h1 className="pb-5">Random Quotes</h1>
      <figure class="text-center mt-5">
        <blockquote class="blockquote">
          <p>{quote}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">{author}</cite>
        </figcaption>
      </figure>
    </div>
  );
};
export default Quotes;
