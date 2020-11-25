import { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleDetail = props => {
  const { match } = props;
  const [article, setArticle] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch(`/blog/${match.params.id}/`);
      const { data } = await res.json();
      setArticle(data);
    })();
  }, [match.params.id]);

  const deleteHandler = async () => {
    await fetch(`/blog/${match.params.id}/`, {
      method: 'DELETE'
    });
    props.history.push('/');
  };

  const { title, body, createdAt } = article;

  return (
    <>
      <h1>{title}</h1>
      <small>Pulished on {createdAt}</small>
      <p>{body}</p>
      <Link to={`/${match.params.id}/update/`}>
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

export default withRouter(ArticleDetail);
