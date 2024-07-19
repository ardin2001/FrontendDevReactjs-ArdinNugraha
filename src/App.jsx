import { Link } from "react-router-dom";
import UseInput from "./hooks/UseInput.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./context/ContextAuth.jsx";
import { useContext, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = UseInput();
  const [password, setPassword] = UseInput();
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      (async function GetProfile() {
        const response = await fetch(
          import.meta.env.VITE_API_BACKEND + "/auth/user",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const { status, data } = await response.json();
        if (status) {
          setAuth(data);
          navigate("/restaurant");
        }
      })();
    }
  }, []);

  const HandlerLogin = async (event) => {
    event.preventDefault();
    const response = await fetch(
      import.meta.env.VITE_API_BACKEND + "/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const json = await response.json();
    if (json.status) {
      toast.success(json.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      localStorage.setItem("token", json.token);
      setTimeout(() => {
        navigate("/restaurant");
      }, 400);
    } else {
      toast.error(json.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={`lg:grid lg:h-screen`}>
        <div className="grid my-8 mx-10 gap-8 lg:grid-cols-2 lg:shadow-furdamental lg:bg-white">
          <div className="description grid gap-4 lg:my-auto lg:flex lg:flex-col lg:gap-5">
            <h3 className="text-secondary font-bold text-3xl text-center mt-6 lg:mt-0">
              Restaurants App
            </h3>
            <div className="image">
              <img
                src={"/even.jpg"}
                alt="login"
                className="w-4/5 sm:w-2/5 lg:w-3/5 m-auto rounded-md"
              />
            </div>
            <p className="text-secondary font-medium text-justify lg:text-center sm:px-10 xl:px-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fugit cumque repudiandae! Dolorum ad doloremque, nam maxime
              eligendi sed ut. Voluptates quibusdam suscipit aut?
            </p>
          </div>
          <div className="lg:bg-secondary lg:grid lg:justify-items-center">
            <div className="grid gap-5 lg:my-auto sm:mx-auto sm:w-4/5 lg:w-3/5">
              <div>
                <h3 className="text-secondary lg:text-tertiary font-bold text-3xl">
                  Login
                </h3>
                <p className="text-secondary lg:text-white text-justify text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit delectus cumque at a ipsam!
                </p>
              </div>
              <form className="form grid gap-3" onSubmit={HandlerLogin}>
                <div className="email">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="outline-none py-1.5 bg-white border-b-2 lg:border-2 border-secondary lg:border-white lg:bg-low lg:rounded-md px-2 w-full text-secondary "
                    placeholder="Email"
                    value={email}
                    onChange={setEmail}
                  />
                </div>
                <div className="password">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="outline-none py-1.5 bg-white border-b-2 lg:border-2 border-secondary lg:border-white lg:bg-low lg:rounded-md px-2 w-full text-secondary "
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-secondary lg:bg-white py-1 mt-1 text-white lg:text-secondary font-bold rounded-md"
                >
                  Login
                </button>
              </form>
              <div>
                <p className="text-secondary lg:text-white font-medium text-center">
                  Don&apos;t have an account yet?{" "}
                  <Link
                    to="/auth/register"
                    className="text-secondary lg:text-tertiary font-bold"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
