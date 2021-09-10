import React from "react";

import '../styles/CardNew.css'

interface CardProps {
  title: string;
  description: string;

  handleNewCardSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleNew_onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const CardNew: React.FC<CardProps> = (props) => {
  return (
    <section className="card newCard">
      <div className="card_body">
        <form onSubmit={(e) => props.handleNewCardSubmit(e)}>
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
    </section>
  );
};
