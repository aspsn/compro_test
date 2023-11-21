import { useState } from "react";
import "./App.css";

function App() {
  const [questionActive, setQuestionActive] = useState(1);
  const [specialityActive, setSpecialityActive] = useState(1);

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
  const dataCoreValues = [
    {
      title: "Dedication",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      title: "Intellectual Honesty",
      desc: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
    },
    {
      title: "Curiosity",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    },
  ];
  const dataSpeciality = [
    {
      title: "Accesories",
      image: "/accesories.svg",
    },
    {
      title: "Speed Improvement",
      image: "/speed.svg",
    },
    {
      title: "Exhaust",
      image: "/exhaust.svg",
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

  const handlePrevSpeciality = () => {
    const slides = document.querySelectorAll(".slide");
    let activeSlide = specialityActive;
    const maxSlide = slides.length - 1;

    if (specialityActive === 0) {
      activeSlide = maxSlide;
    } else {
      activeSlide--;
    }

    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - specialityActive)}%)`;
    });
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      slide.style.transform = `translateX(${
        (i === activeSlide ? 100 : 50) * (i - activeSlide)
      }%)`;
    }
    setSpecialityActive(activeSlide);
  };

  const handleNextSpeciality = () => {
    const slides = document.querySelectorAll(".slide");
    let activeSlide = specialityActive;
    const maxSlide = slides.length - 1;

    if (activeSlide < maxSlide) {
      activeSlide++;
    } else {
      activeSlide = 0;
    }

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      slide.style.transform = `translateX(${
        (i === activeSlide ? 100 : 50) * (i - activeSlide)
      }%)`;
    }
    setSpecialityActive(activeSlide);
  };

  console.log(specialityActive);
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

      <section className="question" id="__question">
        <a href="#__question">
          <img src="/scroll-down.svg" className="scroll-down" alt="icon" />
        </a>
        <div className="question-slider">
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

      <section className="core-values">
        <h1>Our Core Values</h1>
        <p className="desc">
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit.
          <br />
          <br />
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
          amet enim.
        </p>

        <div className="list">
          {dataCoreValues.map((cv, i) => (
            <div className="content" key={i}>
              <div className="line" />
              <div>
                <h2>{cv.title}</h2>
                <p>{cv.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <img src="/illustrator.png" alt="img" />
      </section>

      <section className="speciality">
        <div className="content">
          <h1>OUR SPECIALITY</h1>
          <p className="desc1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </p>
          <div className="img-slider">
            {dataSpeciality.map((s, i) => (
              <div
                key={i}
                className="slide"
                style={{
                  transform: `translateX(${
                    (i - specialityActive) * (i === specialityActive ? 100 : 50)
                  }%)`,
                }}
              >
                <img src={s.image} alt="icon" />
                <p>{s.title}</p>
              </div>
            ))}
          </div>
          <p className="desc2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </p>
          <div className="nav">
            <img
              src="/arrow-left-grey.svg"
              alt="icon"
              onClick={handlePrevSpeciality}
            />
            <div className="dot">
              {dataSpeciality.map((s, i) => (
                <span className={`${specialityActive === i ? "active" : ""}`} />
              ))}
            </div>
            <img
              src="/arrow-right-blue.svg"
              alt="icon"
              onClick={handleNextSpeciality}
            />
          </div>
        </div>
      </section>

      <footer>
        <img src="/logo-footer.svg" className="logo" alt="logo" />
        <div className="address">
          <button>
            TECHNOLOGY DEPARTMENT{" "}
            <img src="/arrow-bottom-grey.svg" alt="icon" />
          </button>
          <p>
            Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
            Barat
          </p>
        </div>
        <ul>
          <li>Who We Are</li>
          <li>Our Values</li>
          <li>The Perks</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
