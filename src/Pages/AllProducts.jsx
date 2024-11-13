import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProuductsContext";
import Loading from "./../Components/Loading";
import FetchError from "./../Components/FetchError";
import ProductItem from "../Components/productItem";

export default function AllProducts() {
  const { allPro, loading, isError } = useContext(ProductsContext);

  if (loading) {
    return <Loading />;
  }

  if (isError) {
    return <FetchError error={isError} />;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-10 pb-4 border-b w-fit">
        Products: {allPro.length}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allPro?.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
