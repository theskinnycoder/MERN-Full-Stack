import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticleDetail = ({ history, match }) => {
  const [article, setArticle] = useState({});
  const articleID = match.params.id;

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/articles/${articleID}/`);
      const { data } = await res.json();
      setArticle(data);
    })();
  }, [articleID]);

  const { title, body, createdAt } = article;

  const deleteHandler = async () => {
    await fetch(`/api/articles/${articleID}/`, {
      method: 'DELETE'
    });
    history.push('/');
  };

  return (
    <>
      <h1>{title}</h1>
      <small>Pulished on {createdAt}</small>
      <p>{body}</p>
      <Link to={`/${articleID}/update/`}>
        <button>
          <i className='material-icons'>create</i>
          <strong>Update</strong>
        </button>
      </Link>

      <button onClick={deleteHandler}>
        <i className='material-icons'>delete</i>
        <strong>Delete</strong>
      </button>
    </>
  );
};

export default ArticleDetail;
