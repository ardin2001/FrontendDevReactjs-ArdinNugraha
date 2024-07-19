import { useState, useEffect } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Restaurant() {
  const [data, setData] = useState(false);
  const [filterData, setFilterData] = useState(false);
  const [status, setStatus] = useState(false);
  const [price, setprice] = useState(false);
  const [categories, setCategories] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState(8);
  const navigate = useNavigate();

  useEffect(() => {
    (async function fetchData() {
      try {
        const category = searchParams.get("category")
          ? searchParams.get("category").toLowerCase()
          : searchParams.get("category");
        const response = await fetch(
          import.meta.env.VITE_API_BACKEND +
            "/restaurants?category=" +
            (category || ""),
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const { status, data } = await response.json();

        if (status) {
          setData(data);
          setFilterData(data);
        } else {
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    })();
    setCategories(searchParams.get("category"));
  }, []);

  const handlerStatus = () => {
    setStatus(true);
    let filterStatus = data.filter(
      (item) =>
        item.status === true &&
        (price ? item.price <= price : true) &&
        (categories ? item.category === categories : true)
    );
    setFilterData(filterStatus);
  };

  const handlerPrice = (e) => {
    setprice(e.target.value);
    let filterPrice = data.filter(
      (item) =>
        item.price <= e.target.value &&
        (status ? item.status === true : true) &&
        (categories ? item.category === categories : true)
    );
    setFilterData(filterPrice);
  };

  const handlerCategories = async (e) => {
    setCategories(e.target.value);
    setSearchParams({ category: e.target.value });
    try {
      const response = await fetch(
        import.meta.env.VITE_API_BACKEND +
          "/restaurants?category=" +
          (e.target.value || ""),
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      let filterCategories = json.data.filter(
        (item) =>
          (status ? item.status === true : true) &&
          (price ? item.price <= price : true)
      );
      setFilterData(filterCategories);
    } catch (err) {
      console.log(err);
    }
  };

  const handlerLoadMore = () => {
    setPagination(prev => prev + 8);
  };

  const HandlerClear = () => {
    setStatus(false);
    setprice(false);
    setCategories(false);
    setFilterData(data);
    setSearchParams({});
    setPagination(8);
  };

  const paginationdata = filterData ? filterData?.slice(0, pagination) : false ;
  return (
    <>
      <Header />
      <nav className="bg-custom px-4 sm:px-6 md:px-8 lg:px-9 xl:px-10 grid gap-2 sm:grid-flow-col sm:justify-between border-b-0.2 border-t-0.2 border-gray-200 py-2.5">
        <div className="filter">
          <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <p>Filter by:</p>
            <div className="status flex gap-1 border-b-0.2 border-gray-300 pb-1">
              <input
                type="radio"
                id="status"
                name="status"
                checked={status == true}
                value={status}
                onChange={handlerStatus}
              />
              <label htmlFor="status">Open Now</label>
            </div>
            <div className="button">
              <select
                id="price"
                name="price"
                className="pr-2 pl-0.5 border-b-0.2 border-gray-300 pb-1 outline-none bg-custom"
                value={price}
                onChange={handlerPrice}
              >
                <option value={false}>Price</option>
                <option value="1">0-1</option>
                <option value="2">0-2</option>
                <option value="3">0-3</option>
                <option value="4">0-4</option>
                <option value="5">0-5</option>
                <option value="6">0-6</option>
              </select>
            </div>
            <select
              id="categories"
              name="categories"
              className="pr-2 pl-0.5 border-b-0.2 border-gray-300 pb-1 outline-none bg-custom"
              value={categories}
              onChange={handlerCategories}
            >
              <option value={false}>Categories</option>
              <option value="thai">Thai</option>
              <option value="japanese">Japanese</option>
              <option value="seafood">Seafood</option>
              <option value="american">American</option>
              <option value="italian">Italian</option>
              <option value="mexican">Mexican</option>
              <option value="steakhouses">Steakhouses</option>
            </select>
          </div>
        </div>
        <div className="clear justify-self-end">
          <button
            className={`${
              !status && !price && !categories
                ? "bg-white border-1 border-black text-black opacity-50 cursor-not-allowed"
                : "bg-red-500 text-white"
            }  font-medium px-5 py-0.5`}
            onClick={HandlerClear}
          >
            Clear All
          </button>
        </div>
      </nav>
      <main className="bg-custom px-4 sm:px-6 md:px-8 lg:px-9 xl:px-10 pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-8 lg:pb-10">
        <h4 className="text-2xl font-normal mb-2.5 sm:mb-3 lg:mb-4">
          All Restaurants
        </h4>
        <div className="products w-90/100 sm:w-full mx-auto grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {paginationdata.length == 0 ? (
            <p className="text-center font-semibold text-blue-700 text-lg absolute left-1/2 -translate-x-1/2 bg-custom w-full h-screen">
              No Data
            </p>
          ) : paginationdata == false ? (
            <Loading />
          ) : (
            paginationdata.map((item, index) => (
              <Product key={index} item={item} index={index} button={true} />
            ))
          )}
        </div>
        {filterData && filterData.length > 8 && filterData.length > pagination && <button onClick={handlerLoadMore} className="bg-white text-primary border-2 border-primary font-semibold mt-8 relative left-1/2 -translate-x-1/2 px-16 py-1 w-max">
          LOAD MORE
        </button>}
      </main>
    </>
  );
}
