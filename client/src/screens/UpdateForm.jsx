import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UpdateForm = ({ match, history }) => {
  const [article, setArticle] = useState({});
  const articleID = match.params.id;

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/articles/${articleID}/`);
      const { data } = await res.json();
      setArticle(data);
    })();
  }, [articleID]);

  const [title, setTitle] = useState(article.title);
  const [body, setBody] = useState(article.body);

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(`/api/articles/${articleID}/`, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    history.push('/');
  };

  return (
    <>
      <form type='PATCH' onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          defaultValue={article.title}
          placeholder='Update the article title...'
          onChange={e => setTitle(e.target.value)}
        />

        <br />

        <label>Body</label>
        <textarea
          rows='10'
          defaultValue={article.body}
          placeholder='Update the article body...'
          onChange={e => setBody(e.target.value)}
        />

        <br />

        <button onClick={handleSubmit}>
          <i className='material-icons'>update</i>
          <strong>Update</strong>
        </button>

        <Link to={`/${article._id}/`}>
          <button>
            <i className='material-icons'>backspace</i>
            <strong>Back</strong>
          </button>
        </Link>
      </form>
    </>
  );
};

export default UpdateForm;
