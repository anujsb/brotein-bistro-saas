import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="w-screen max-h-20 backdrop-blur-md shadow-md fixed grid grid-flow-col z-20">
      {/* <div className="flex justify-end items-center max-w-6xl mx-auto p-3"> */}
      <div className="flex justify-start items-center">
        <Link to="/">
          {/* <h1 className='font-bold'>Auth App</h1> */}
          <img src="logo.png" alt="logo" className="h-14 max-h-16 m-1" />
        </Link>
      </div>
      <div className=" flex justify-end">
        <ul className="flex justify-end items-center lg:mx-5 md:mx-5 sm:mx-3">
          <Link
            className="rounded-full font-semibold  py-2 px-4 md:mr-5 lg:mr-5 sm:mr-1 border-black border shadow-md"
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            className="rounded-full font-semibold  py-2 px-4 md:mr-5 lg:mr-5 sm:mr-1 border-black border shadow-md"
            to="/about"
          >
            <li>About</li>
          </Link>
          <Link
            className="rounded-full font-semibold  py-2 px-4 md:mr-5 lg:mr-5 sm:mr-1 border-black border shadow-md"
            to="/profile"
          >
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
}