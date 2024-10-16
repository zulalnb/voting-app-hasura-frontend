import { useState } from "react";

const initialOptions = [{ title: "" }, { title: "" }];

function NewQuestion() {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(initialOptions);

  const handleChangeOption = ({ target }) => {
    const newArray = options;
    newArray[target.id].title = target.value;
    setOptions([...newArray]);
  };

  return (
    <div>
      <h2>Question</h2>
      <input
        placeholder="Type your question"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <h2>Options</h2>
      {options.map((option, index) => (
        <div key={index}>
          <input
            id={index}
            placeholder={`Option ${index + 1}`}
            value={option.title}
            onChange={handleChangeOption}
          />
        </div>
      ))}

      <button onClick={() => setOptions([...options, { title: "" }])}>
        New option
      </button>

      <button>Save</button>
    </div>
  );
}

export default NewQuestion;
