import { useState } from "react";
import "./index.css";
const App = () => {
  return (
    <div className="container mx-auto">
      <Header title={"My First React App"} />
      <Content />
      <Footer />
    </div>
  );
};

const Header = ({ title }) => {
  return (
    <header className="text-center py-14">
      <h1 className="text-4xl font-bold text-purple-400">{title}</h1>
    </header>
  );
};
const Content = () => {
  let [recivedText, setRecivedText] = useState("");
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
    recivedText = text;
  }
  function bringText() {
    setRecivedText(text);
  }

  return (
    <main className="text-center py-10 flex flex-col items-center gap-4">
      <textarea
        className=" border-2 border-purple-400 w-[400px] focus:outline-purple-400"
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={handleText}
      ></textarea>
      <button
        className="bg-purple-400 text-white font-bold text-lg px-6 py-3"
        onClick={bringText}
      >
        Click Me
      </button>
      <p>
        {text && (
          <>
            The text from the text area:
            <span className="italic text-red-500"> {recivedText}</span>
          </>
        )}
      </p>
    </main>
  );
};
const Footer = () => {
  return (
    <footer className="flex justify-center items-center">
      <div className="flex items-cente justify-center gap-8 p-8 shadow-md">
        <img
          src="src/assets/images/Md Arafat.png"
          alt="Md Arafat"
          className="rounded-full w-40 h-40 outline outline-4 outline-purple-400"
        />
        <div className="">
          <h2 className="capitalize text-purple-400 text-2xl">
            Md Easin Arafat
          </h2>
          <h3 className="text-gray-400 capitalize">front-end web developer</h3>
          <p className="max-w-[500px] mt-2 text-gray-600">
            I am a skilled front-end web developer specializing in creating
            visually appealing and user-friendly websites. With expertise in
            HTML, CSS, JavaScript, React, Next JS, and Prisma. Passionate about
            continuous learning, I am dedicated to creating impactful online
            experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;
