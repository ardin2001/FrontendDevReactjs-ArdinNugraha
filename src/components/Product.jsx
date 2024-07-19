import { Link } from "react-router-dom";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import Round from "../function/Round";
import Capitalize from "../function/Capitalize";

export default function Product({ item, index, button }) {
  return (
    <div className="product flex flex-col gap-3 justify-between" key={item.id}>
      <div
        className={`data grid gap-2 md:gap-2.5 ${
          !button ? "sm:grid-cols-2" : null
        }`}
      >
        <div className="image">
          <img
            src={(index + 1) % 2 == 0 ? "/even.jpg" : "/odd.jpg"}
            alt={item.name}
          />
        </div>
        <div
          className={`info ${
            button ? "grid gap-1 md:gap-1.5" : "flex flex-col gap-1.5"
          }`}
        >
          <h5 className="font-semibold text-xl">{Capitalize(item.name)}</h5>
          <div className="rating flex 5">
            {Round(item.rating) < 0.5 ? (
              <IoIosStarOutline />
            ) : Round(item.rating) == 0.5 ? (
              <IoStarHalfOutline />
            ) : (
              <IoIosStar />
            )}
            {Round(item.rating) < 1.5 ? (
              <IoIosStarOutline />
            ) : Round(item.rating) == 1.5 ? (
              <IoStarHalfOutline />
            ) : (
              <IoIosStar />
            )}
            {Round(item.rating) < 2.5 ? (
              <IoIosStarOutline />
            ) : Round(item.rating) == 2.5 ? (
              <IoStarHalfOutline />
            ) : (
              <IoIosStar />
            )}
            {Round(item.rating) < 3.5 ? (
              <IoIosStarOutline />
            ) : Round(item.rating) == 3.5 ? (
              <IoStarHalfOutline />
            ) : (
              <IoIosStar />
            )}
            {Round(item.rating) < 4.5 ? (
              <IoIosStarOutline />
            ) : Round(item.rating) == 4.5 ? (
              <IoStarHalfOutline />
            ) : (
              <IoIosStar />
            )}
          </div>
          <div className="flex justify-between text-sm">
            <div className="category-price flex gap-0.5">
              <p>{item.category.toUpperCase()}</p>
              <span>•</span>
              <p>${item.price}</p>
            </div>
            {item.status ? (
              <div className="flex gap-1">
                <div className="circle p-1 bg-green-500 rounded-full h-max self-center"></div>
                <p className="">OPEN NOW</p>
              </div>
            ) : (
              <div className="flex gap-1">
                <div className="circle p-1 bg-red-500 rounded-full h-max self-center"></div>
                <p className="">CLOSED</p>
              </div>
            )}
          </div>
          {!button && (
            <p className="text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus exercitationem et eaque saepe veniam atque, suscipit
              tempora similique aut amet corrupti magni debitis expedita quasi?
            </p>
          )}
        </div>
      </div>
      {button && (
        <Link
          to={`/restaurant/${item.id}`}
          className="bg-blue-900 text-white font-semibold text-sm w-full py-2.5 text-center"
        >
          LEARN MORE
        </Link>
      )}
    </div>
  );
}
