import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers, FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    <Spinner />;
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 p-4 ">
          <figure className="p-4">
            <img src={avatar_url} alt={name} className=" w-72 md:w-full rounded-2xl brightness-50 shadow-2xl " />
          </figure>
          <div className="  lg:col-span-2 p-4">
            <div className="flex gap-4 ">
              <h1 className="text-3xl font-bold ">{name}</h1>
              <span className="bg-green-100  p-2 rounded-lg">{type}</span>
              {hireable && <span className="bg-indigo-100 p-2 rounded-lg">Hireable</span>}
            </div>
            <p className="text-lg mt-4 ">{bio}</p>
            <div className=" my-6 ">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-indigo-400  hover:text-indigo-100 rounded-lg border border-indigo-700 px-6 py-2 text-indigo-700">
                Visit Github Profile
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-5 ">
              {location && (
                <div className="shadow-xl b py-4 px-8 w-full  rounded">
                  <h5 className=" mb-2 ">Location</h5>
                  <p className=" font-semibold  text-indigo-400">{location}</p>
                </div>
              )}
              {blog && (
                <div className=" py-4 px-8 w-full shadow-xl rounded ">
                  <h5 className=" mb-2 ">Website</h5>
                  <a href={`https://${blog}`} target="_blank" className="font-semibold text-indigo-400 ">
                    {blog}
                  </a>
                </div>
              )}
              {twitter_username && (
                <div className=" py-4 px-8 w-full shadow-xl rounded">
                  <h5 className=" mb-2 ">Twitter</h5>
                  <a href={`https://www.twitter.com/${twitter_username}`} target="_blank" className="font-semibold text-indigo-400 ">
                    {twitter_username}
                  </a>
                </div>
              )}
              {/* <Link to="/" className=" underline text-indigo-500 ">
                <FaLongArrowAltLeft size={40} />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
