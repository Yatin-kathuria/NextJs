import Link from "next/link";

function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <Link href={`/news/${article.category}`} key={article.id} passHref>
            <div>
              <h2>
                {article.id} {article.title} | {article.category}
              </h2>

              <hr />
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  console.log("Pre-rendering NewsArticleList");
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
