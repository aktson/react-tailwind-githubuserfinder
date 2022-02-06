import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, fetchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please enter valid text");
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-8">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input type="text" className=" w-full bg-indigo-100 p-4 rounded-lg" placeholder="search" onChange={handleChange} value={text} />
          <button className="absolute right-0 top-0 w-36 bg-indigo-500 p-4 rounded-r-lg text-indigo-50 hover:bg-indigo-800">Go</button>
        </div>
      </form>
      {users.length > 0 && (
        <div>
          <button className="bg-black px-10 py-4 text-indigo-50 rounded-lg hover:bg-gray-700" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
