import React, { useEffect, useState } from "react";
import AddIcon from "../Assets/Icons/addIcon.svg";
import "../styles/CardNew.css";

interface CardProps {
  title: string;
  description: string;
  handleNewCardSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleNew_onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const CardNew: React.FC<CardProps> = (props) => {
  const [editMode, setEditMode] = useState(false);

  const handleAddBtn = (): void => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    console.log("Not yet");

    return () => {
      console.log("Submited");
    };
  }, []);

  return (
    <section className="card newCard">
      {editMode ? (
        <div className="card_body">
          <form
            onSubmit={(e) => {
              props.handleNewCardSubmit(e);
              handleAddBtn();
            }}
          >
            <div className="card_content">
              <input
                type="text"
                value={props.title}
                aria-label="title"
                placeholder="Title"
                name="title"
                onChange={(e) => props.handleNew_onChange(e)}
              />
              <textarea
                value={props.description}
                aria-label="description of task"
                placeholder="Description"
                name="description"
                onChange={(e) => props.handleNew_onChange(e)}
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
      ) : (
        <div className="card_addBtn_container">
          <button onClick={() => setEditMode(true)}>
            <img src={AddIcon} alt="" width={55} height={55} />
          </button>
        </div>
      )}
    </section>
  );
};
