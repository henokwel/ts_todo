import React from "react";
import RemoveIcon from "../Assets/Icons/deleteIcon.svg";

interface CardProps {
  item: {
    id: number;
    title: string;
    description: string;
    done: boolean;
    date: Date;
  };
  index: number;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRemove: (e: number) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleOnChange: (
    i: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <section className="card" key={props.item.id}>
      <div className="card_header">
        <div className="card_avatar">
          {/* <img src={svg} alt="" width={50} height={50} /> */}
          <img
            src={`https://avatars.dicebear.com/api/bottts/:${props.item.title}.svg`}
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div className="card_timestamp">
          <small>
            <time dateTime="2008-02-14 20:00">
              {props.item.date.getUTCHours() +
                ":" +
                props.item.date.getUTCMinutes() +
                ":" +
                props.item.date.getUTCSeconds()}
            </time>
          </small>
        </div>
      </div>
      <div className="card_body">
        <form
          onSubmit={(e) => props.handleSubmit(e)}
        
        >
          <div className="card_content">
            <input
              type="text"
              value={props.item.title}
              name="title"
              aria-label="title"
              placeholder="Title"
              onChange={(e) => props.handleOnChange(props.index, e)}
              onKeyDown={(e) => props.handleKeyDown(e)}

            />
            <textarea
              name="description"
              value={props.item.description}
              aria-label="description of task"
              placeholder="Description"
              onChange={(e) => props.handleOnChange(props.index, e)}
              // onKeyDown={(e) => props.handleKeyDown(e)}

            />
          </div>

          <div className="card_controll">
            <button onClick={() => props.handleRemove(props.item.id)}>
              <img src={RemoveIcon} alt="" width={15} height={15} />
            </button>
            <input
              type="checkbox"
              name="check"
              onChange={(e) => props.handleOnChange(props.index, e)}
              checked={props.item.done}
              onKeyDown={(e) => props.handleKeyDown(e)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Card;
