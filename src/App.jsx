import { useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia.jsx";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phones",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetics",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website 'Facebook' launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "1999",
          correct: false,
        },
        {
          text: "2010",
          correct: false,
        },
        {
          text: "2022",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the main character in the Harry Potter movie franchise?",
      answers: [
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
  ];

  const pricePyramid = [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1,000"},
    {id:6, amount:"$ 2,000"},
    {id:7, amount:"$ 4,000"},
    {id:8, amount:"$ 8,000"},
    {id:9, amount:"$ 16,000"},
    {id:10, amount:"$ 32,000"},
    {id:11, amount:"$ 64,000"},
    {id:12, amount:"$ 125,000"},
    {id:13, amount:"$ 250,000"},
    {id:14, amount:"$ 500,000"},
    {id:15, amount:"$ 1,000,000"},
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia
          data={data}
          setTimeOut={setTimeOut}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}/>
        </div>
      </div>
       <div className="pyramid">
          <ul className="priceList">
            {pricePyramid.map((m) => (
              <li className={questionNumber === m.id? "priceListItem active" : "priceListItem"}>
                <span className="priceListItemNumber">{m.id}</span>
                <span className="priceListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default App;
