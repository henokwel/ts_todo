import React, { useState } from "react";
import RemoveIcon from "./Assets/Icons/deleteIcon.svg";
// import { createAvatar } from "@dicebear/avatars";
// import * as style from "@dicebear/avatars-bottts-sprites";
import "./App.css";

interface Data {
  id: number;
  title: string;
  description: string;
  done: boolean;
  date: Date;
}

// Dynamic Form
// https://codesandbox.io/s/react-dynamic-form-fields-3fjbd?from-embed=&file=/src/index.js:547-564
// Icon Gen
// https://avatars.dicebear.com/

const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([
    {
      id: 1,
      title: "Testing",
      description: "Making apps ",
      done: false,
      date: new Date(),
    },
    {
      id: 2,
      title: "Testing 2",
      description: "Making apps for this company called spotify ",
      done: false,
      date: new Date(),
    },
    {
      id: 3,
      title: "Testing 3",
      description: "Making apps for this company called spotify ",
      done: false,
      date: new Date(),
    },
  ]);


  
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

  return (
    <div className="App">
      <header className="App-header">
        <h3>Let's work!</h3>
      </header>
      <main>
        {data.map((item, index) => {
          return (
            <section className="card" key={item.id}>
              <div className="card_header">
                <div className="card_avatar">
                  {/* <img src={svg} alt="" width={50} height={50} /> */}
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
                      {item.date.getUTCHours() +
                        ":" +
                        item.date.getUTCMinutes() +
                        ":" +
                        item.date.getUTCSeconds()}
                    </time>
                  </small>
                </div>
              </div>

              <div className="card_body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="card_content">
                    <input
                      type="text"
                      value={item.title}
                      name="title"
                      aria-label="title"
                      placeholder="Title"
                      onChange={(e) => handleOnChange(index, e)}
                    />
                    <textarea
                      name="description"
                      value={item.description}
                      aria-label="description of task"
                      placeholder="Description"
                      onChange={(e) => handleOnChange(index, e)}
                    />
                  </div>

                  <div className="card_controll">
                    <button onClick={() => handleRemove(item.id)}>
                      <img src={RemoveIcon} alt="" width={15} height={15} />
                    </button>
                    <input
                      type="checkbox"
                      name="check"
                      onChange={(e) => handleOnChange(index, e)}
                      checked={item.done}
                    />
                  </div>
                </form>
              </div>
            </section>
          );
        })}

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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="card_content">
                <input
                  type="text"
                  value="Title"
                  aria-label="title"
                  placeholder="Title"
                />
                <textarea
                  value="Descript"
                  aria-label="description of task"
                  placeholder="Description"
                />
              </div>

              <div className="card_controll">
                <button>
                  {/* <img src={RemoveIcon} alt="" width={15} height={15} /> */}
                </button>
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
