import Maps from "../components/Maps";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function DetailRestaurant() {
  const { id } = useParams();
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_BACKEND + "/restaurants/" + id,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const { status, data, statusCode } = await response.json();
        if (status) {
          setData(data);
        } else if (statusCode === 404) {
          setData(null);
        } else if (statusCode === 401) {
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  return (
    <>
      <Header />
      <div className="content bg-custom ">
        <main className="w-85/100 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto pb-10">
          {data ? (
            <div className="product grid gap-2.5 p-5 bg-white">
              <Product item={data} index={data.id} button={false} />
              <div className="maps">
                <h5 className="font-semibold">Location Restaurant</h5>
                <Maps data={data} />
              </div>
            </div>
          ) : data === null ? (
            <p className="text-center font-semibold text-blue-700 text-lg absolute left-1/2 -translate-x-1/2 bg-custom w-full h-screen">
              Invalid id restaurant
            </p>
          ) : (
            <Loading />
          )}
        </main>
      </div>
    </>
  );
}
