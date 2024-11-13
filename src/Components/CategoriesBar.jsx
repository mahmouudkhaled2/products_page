import { Link } from "react-router-dom";

export default function CategoriesBar() {
  return (
    <div>
      <ul className="flex justify-center items-center gap-10 py-3 px-5 border-b max-w-md mx-auto ">
        <li>
          <Link to={"products"}>Women</Link>
        </li>

        <li>
          <Link to={"products"}>Men</Link>
        </li>

        <li>
          <Link to={"products"}>Girls</Link>
        </li>

        <li>
          <Link to={"products"}>Boys</Link>
        </li>

        <li>
          <Link to={"products"}>Holiday Shop</Link>
        </li>
      </ul>
    </div>
  );
}
