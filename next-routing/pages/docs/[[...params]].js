import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("params", params);
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  }

  if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return <h1>Doc landing page</h1>;
}

export default Doc;
