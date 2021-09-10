import React, { useState } from "react";
// import { createAvatar } from "@dicebear/avatars";
// import * as style from "@dicebear/avatars-bottts-sprites";
import "./App.css";
import Card from "./components/Card";

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
  const [descritption, setDescritption] = useState("");

  // Create New Card Functions

  const handleNew_onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDescritption(e.target.value);
    }
  };

  const handleNewCardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !descritption.trim()) return;

    setData([
      ...data,
      {
        title: title,
        description: descritption,
        id: Math.random(),
        done: false,
        date: new Date(),
      },
    ]);

    // Reset value
    setTitle("");
    setDescritption("");
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
    console.log("Removed!!");
    const curretArray = data.filter((item) => item.id !== e);
    setData(curretArray);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Runned");
    
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log("Run key down");
    
    if ((e.key === "Enter") || (e.code === "Enter")) {
      console.log("Yeahhhhh Enter");
      e.preventDefault()
      
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Let's work!</h3>
      </header>
      <main>
        {data.map((item, index) => <Card
          key={index}
          handleKeyDown={handleKeyDown}
          handleSubmit={handleSubmit}
          item={item}
          index={index}
          handleOnChange={handleOnChange}
          handleRemove={handleRemove}
        
        />
         
        )}

        <section className="card newCard">
          {/* <div className="card_header">
            <div className="card_avatar">
              <img
                src={`https://avatars.dicebear.com/api/bottts/:${item.title}.svg`}
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div className="card_timestamp">
              <small>
                <time dateTime="2008-02-14 20:00">
                  {item.date.toDateString()}
                </time>
              </small>
            </div>
          </div> */}

          <div className="card_body">
            <form onSubmit={(e) => handleNewCardSubmit(e)}>
              <div className="card_content">
                <input
                  type="text"
                  value={title}
                  aria-label="title"
                  placeholder="Title"
                  name="title"
                  onChange={(e) => handleNew_onChange(e)}
                />
                <textarea
                  value={descritption}
                  aria-label="description of task"
                  placeholder="Description"
                  name="description"
                  onChange={(e) => handleNew_onChange(e)}
                />
              </div>

              <div className="card_controll">
                {/* <button> */}
                {/* <img src={RemoveIcon} alt="" width={15} height={15} /> */}
                {/* </button> */}
                <input type="submit" value="Enter" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
