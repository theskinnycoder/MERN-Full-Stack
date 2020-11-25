import { useEffect, useState } from 'react';
import Article from './Article';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/blog/');
      const { data } = await res.json();
      setArticles(data);
    })();
  }, []);

  return (
    <>
      {articles?.map(article => {
        return <Article key={article?._id} article={article} />;
      })}
    </>
  );
};

export default ArticleList;
