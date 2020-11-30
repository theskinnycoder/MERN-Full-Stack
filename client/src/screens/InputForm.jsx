import { useState } from 'react';
import { Link } from 'react-router-dom';

const InputForm = ({ history }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/articles/', {
      method: 'POST',
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
      <form method='POST' onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          placeholder='Enter the article title...'
          onChange={e => setTitle(e.target.value)}
        />

        <br />

        <label>Body</label>
        <textarea
          rows='10'
          placeholder='Enter the article body...'
          onChange={e => setBody(e.target.value)}
        />

        <br />

        <button type='submit' className='icon-btn'>
          <i className='material-icons'>post_add</i>
          <strong>Submit</strong>
        </button>

        <Link to='/'>
          <button>
            <i className='material-icons'>backspace</i>
            <strong>Back</strong>
          </button>
        </Link>
      </form>
    </>
  );
};

export default InputForm;
