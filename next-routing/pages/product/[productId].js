import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const id = router.query.productId;
  return <h1>Product details of {id}</h1>;
}

export default ProductDetails;
