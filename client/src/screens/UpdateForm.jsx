import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UpdateForm = ({ match, history }) => {
  const rantID = match.params.id;
  const fetchRantByID = useStoreActions(actions => actions.fetchRantByID);
  const updateRantByID = useStoreActions(actions => actions.updateRantByID);

  useEffect(() => {
    fetchRantByID({ rantID });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rantID]);

  const rant = useStoreState(state => state.rant);

  const [title, setTitle] = useState(rant.title);
  const [body, setBody] = useState(rant.body);

  const submitHandler = async e => {
    e.preventDefault();
    updateRantByID({ title, body, rantID });
    history.push('/');
  };

  return (
    <form type='PATCH' onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          name='title'
          type='text'
          defaultValue={rant.title}
          placeholder="Let ranters know what your rant is 'bout..."
          onChange={e => setTitle(e.target.value)}
          className='form-control'
        />
      </div>

      <div className='form-group mb-5'>
        <label htmlFor='title'>Body</label>
        <textarea
          id='title'
          name='title'
          rows='10'
          defaultValue={rant.body}
          placeholder="What's your problem?"
          onChange={e => setBody(e.target.value)}
          className='form-control'
        />
      </div>

      <button type='submit' className='btn btn-success mr-2 btn-lg'>
        <i className='fas fa-edit'></i> ReRant
      </button>

      <Link to={`/${rant._id}/`}>
        <button className='btn btn-secondary ml-2 btn-lg'>
          <i className='fas fa-arrow-left'></i> NeverMind
        </button>
      </Link>
    </form>
  );
};

export default UpdateForm;
