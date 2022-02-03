import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <div className="flex px-4 py-3 gap-4  w-full items-center shadow-xl rounded-xl">
      <div>
        <img src={user.avatar_url} alt="profile" className="rounded-full w-14 h-14 shadow-lg" />
      </div>
      <div>
        <h3 className="mb-1 text-xl font-semibold ">{user.login}</h3>
        <Link to={user.html_url} className="text-indigo-300 hover:text-indigo-800">
          Visit profile
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
