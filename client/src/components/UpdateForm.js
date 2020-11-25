import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const UpdateForm = props => {
  const { match } = props;
  const [article, setArticle] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch(`/blog/${match.params.id}/`);
      const { data } = await res.json();
      setArticle(data);
    })();
  }, [match.params.id]);

  const [title, setTitle] = useState(article.title);
  const [body, setBody] = useState(article.body);

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(`/blog/${match.params.id}/`, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    props.history.push('/');
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

export default withRouter(UpdateForm);
