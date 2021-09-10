import React, { useState } from "react";
// import { createAvatar } from "@dicebear/avatars";
// import * as style from "@dicebear/avatars-bottts-sprites";
import "./styles/Card.css";
import "./App.css";
import Card from "./components/Card";
import { CardNew } from "./components/CardNew";
 
interface Data {
  id: number;
  title: string;
  description: string;
  done: boolean;
  date: Date;
}


const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([
    {
      id: 1,
      title: "Testing",
      description: "Making apps ",
      done: false,
      date: new Date(),
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  // Create New Card Functions

  const handleNew_onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setdescription(e.target.value);
    }
  };

  const handleNewCardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    setData([
      ...data,
      {
        title: title,
        description: description,
        id: Math.random(),
        done: false,
        date: new Date(),
      },
    ]);

    // Reset value
    setTitle("");
    setdescription("");
  };

  //  Card List Functions
  const handleOnChange = (
    i: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const dataArray = [...data];

    if (e.target.name === "title") {
      data[i].title = e.target.value;
    } else if (e.target.name === "description") {
      data[i].description = e.target.value;
    } else {
      data[i].done = !data[i].done;
    }
    setData(dataArray);
  };

  const handleRemove = (e: number) => {
    const curretArray = data.filter((item) => item.id !== e);
    setData(curretArray);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.code === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Let's work!</h3>
      </header>
      <main>
        {data.map((item, index) => (
          <Card
            key={index}
            handleKeyDown={handleKeyDown}
            handleSubmit={handleSubmit}
            item={item}
            index={index}
            handleOnChange={handleOnChange}
            handleRemove={handleRemove}
          />
        ))}

        <CardNew
          title={title}
          description={description}
          handleNewCardSubmit={handleNewCardSubmit}
          handleNew_onChange={handleNew_onChange}
        />
      </main>
    </div>
  );
};

export default App;
