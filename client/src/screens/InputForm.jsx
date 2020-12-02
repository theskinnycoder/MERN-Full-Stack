import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const InputForm = ({ history }) => {
  const createRant = useStoreActions(actions => actions.createRant);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    createRant({ title, body });
    history.push('/');
  };

  return (
    <>
      <form method='POST' onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            name='title'
            type='text'
            value={title}
            placeholder="Let fellow ranters know what your rant is 'bout..."
            onChange={e => setTitle(e.target.value)}
            className='form-control'
          />
        </div>

        <div className='form-group mb-5'>
          <label htmlFor='body'>Body</label>
          <textarea
            id='body'
            name='body'
            rows='10'
            value={body}
            placeholder="What's your problem?"
            onChange={e => setBody(e.target.value)}
            className='form-control'
          />
        </div>

        <button type='submit' className='btn btn-lg btn-success mr-2'>
          <i className='fas fa-edit'></i> OK, Rant
        </button>

        <Link to='/'>
          <button className='btn btn-secondary ml-2 btn-lg'>
            <i className='fas fa-arrow-left'></i> NeverMind
          </button>
        </Link>
      </form>
    </>
  );
};

export default InputForm;
