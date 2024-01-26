import React, { useState } from "react";
import { updateJournalEntryById } from "../service/journalentry";
import { deleteJournalEntryById } from "../service/journalentry";

function JournalCard(props) {
  const { journal } = props;
  const [edit, setEdit] = useState(false);

  //for inputs
  const [title, setTitle] = useState(journal.entry_title);
  const [entryText, setEntryText] = useState(journal.entry_text);

  const onSave = () => {
    const newJournal = {
      ...journal,
      entry_title: title,
      entry_text: entryText,
    };
    updateJournalEntryById(journal._id, newJournal);
    setEdit(false);
  };

  const onDelete = () => {
    deleteJournalEntryById(journal._id);
    setEdit(false);
  };

  if (edit === false) {
    return (
      <div
        onClick={() => {
          console.log(journal);
          setEdit(true);
        }}
        className="my-8 card bordered shadow-lg bg-accent bg-neutral-content"
      >
        <div className="card-body">
          <p className="text-2xl font-bold">{journal.entry_title}</p>
          <p className="text-base font-bold">{journal.entry_text}</p>
        </div>
      </div>
    );
  } else if (edit === true) {
    return (
      <div
        onClick={() => {
          console.log(journal);
          //   setEdit(!edit);
        }}
        className="my-8 card bordered shadow-lg bg-accent bg-neutral-content"
      >
        <div className="card-body">
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
          />
          <input
            id="entryText"
            type="text"
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
            className="input input-bordered w-full"
          />
          <button
            onClick={() => {
              onSave();
            }}
            className="btn btn-primary"
          >
            Save
          </button>
          {/* delete button */}
          <button
            onClick={() => {
              onDelete();
            }}
            className="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default JournalCard;
