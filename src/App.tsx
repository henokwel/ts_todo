import React, { useRef, FormEvent, useState } from "react";
import RemoveIcon from "./Assets/Icons/deleteIcon.svg";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";
import "./App.css";
import { time } from "console";

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
  ]);
  const [editTitle, setEditTitle] = useState<string>("");
  // const [editTitle,setEditTitle] = useState<string>("")
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(titleRef.current!.value);
    console.log(descRef.current!.value);

    // const handleOnchange = (e:string) => {

    // }
    setData((prev) => [
      ...prev,
      {
        id: Math.random(),
        title: titleRef.current!.value,
        description: descRef.current!.value,
        done: false,
        date: new Date(),
      },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Let's work!</h3>
      </header>
      <main>
        {data.map((item) => {
          return (
            <section className="card">
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
                      {item.date.toDateString()}
                    </time>
                  </small>
                </div>
              </div>

              <div className="card_body">
                <form>
                  <div className="card_content">
                    <input
                      type="text"
                      value={item.title}
                      aria-label="title"
                      placeholder="Title"
                    />
                    <textarea
                      value={item.description}
                      aria-label="description of task"
                      placeholder="Description"
                    />
                  </div>

                  <div className="card_controll">
                    <button>
                      <img src={RemoveIcon} alt="" width={15} height={15} />
                    </button>
                    <input type="checkbox" checked={item.done} />
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
            <form>
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

              {/* <div className="card_controll">
                <button>
                  <img src={RemoveIcon} alt="" width={15} height={15} />
                </button>
                <input type="checkbox" checked={item.done} />
              </div> */}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;