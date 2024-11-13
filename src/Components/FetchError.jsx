/* eslint-disable react/prop-types */
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FetchError({ error }) {
  return (
    <div className="h-[80vh] flex flex-col gap-10 justify-center items-center">
      <div className="w-20 h-20 rounded-full border flex justify-center items-center">
        <FontAwesomeIcon fontSize={50} color="#f02" icon={faExclamation} />
      </div>

      <h2 className="text-2xl font-light text-red-400 bg-gray-50 py-2 px-4 rounded-lg">
        {error}
      </h2>
    </div>
  );
}
