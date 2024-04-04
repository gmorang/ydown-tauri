import React from "react";

export default function UrlForm() {
  const [url, setUrl] = React.useState("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(url);
  };

  return (
    <form className="flex flex-col max-w-full">
      <label className="text-gray-400 font-semibold text-xs">Music URL</label>

      <div className="flex justify-between">
        <input
          className="p-1 my-1 text-sm border-gray-500 bg-inherit text-gray-100 w-full border-b mr-4"
          onChange={(event) => setUrl(event.target.value)}
          value={url}
          type="text"
          placeholder="https://youtube.com/watch?v=..."
        />

        <button
          className="text-gray-500 text-sm cursor-default p-2"
          type="button"
          onClick={() => setUrl("")}
        >
          X
        </button>
      </div>

      <div className="flex justify-center">
        <button
          className="py-1 px-4 mt-2 text-sm bg-yellow-400 text-gray-100 rounded-md"
          onClick={onSubmit}
          type="submit"
        >
          save
        </button>
      </div>
    </form>
  );
};