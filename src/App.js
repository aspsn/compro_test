import { useState } from "react";
import "./App.css";

function App() {
  const [questionActive, setQuestionActive] = useState(1);
  const dataQuestion = [
    {
      id: 1,
      title: "Who we are",
      short_desc: "Technology Company",
      long_desc:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      id: 2,
      title: "What we do",
      short_desc: "Professional Brand Management",
      long_desc:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      id: 3,
      title: "How we do",
      short_desc: "Strategize, Design, Collaborate",
      long_desc:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
    },
  ];

  const handleClickLeft = () => {
    if (questionActive !== 1) {
      setQuestionActive((prev) => prev - 1);
      let a = document.createElement("a");
      a.href = `#question_${questionActive - 1}`;
      a.click();
    }
  };

  const handleClickRight = () => {
    if (questionActive !== dataQuestion.length) {
      setQuestionActive((prev) => prev + 1);
      let a = document.createElement("a");
      a.href = `#question_${questionActive + 1}`;
      a.click();
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <img src="/logo-company.svg" className="app-logo" alt="logo" />
        <img src="/ic-burger.svg" className="burger" alt="icon" />
      </header>
      <section className="hero">
        <img src="/benjamin.png" alt="img" />
        <div className="bg-inside">
          <p className="title">Discover Your Wonder</p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="clip-inside" />
        <div className="clip-outside" />
      </section>

      <section className="question">
        <img src="/scroll-down.svg" className="scroll-down" alt="icon" />
        <div className="slide">
          {dataQuestion.map((q) => (
            <div className="wrap" key={q.id} id={`question_${q.id}`}>
              <h1>{q.title}</h1>
              <p className="short">{q.short_desc}</p>
              <p className="long">{q.long_desc}</p>
            </div>
          ))}
        </div>
        <div className="nav">
          <p>
            0{questionActive} <span> / </span>
            <span>0{dataQuestion.length}</span>
          </p>
          <div className="arrow">
            <div className="arrow-left" onClick={handleClickLeft}>
              <img src="/arrow-left-grey.svg" alt="icon" />
            </div>
            <div className="arrow-right" onClick={handleClickRight}>
              <img src="/arrow-right-white.svg" alt="icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
