import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RantDetail = ({ history, match }) => {
  const rantID = match.params.id;
  const fetchRantByID = useStoreActions(actions => actions.fetchRantByID);
  const deleteRantByID = useStoreActions(actions => actions.deleteRantByID);

  useEffect(() => {
    fetchRantByID({ rantID });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rantID]);

  const rant = useStoreState(state => state.rant);

  const { title, body, createdAt } = rant;

  const deleteHandler = async () => {
    deleteRantByID({ rantID });
    history.push('/');
  };

  return (
    <div className='text-white m-3 rounded shadow text-center border-0 jumbotron'>
      <h1 className='display-4 text-warning'>{title}</h1>
      <p className='text-muted'>Pulished on {createdAt}</p>
      <p className='lead mt-2'>{body}</p>
      <Link to={`/${rantID}/update/`}>
        <button className='btn mr-2 btn-warning btn-lg'>
          <i className='fas fa-edit'></i> Edit
        </button>
      </Link>
      <button className='ml-2 btn btn-danger btn-lg' onClick={deleteHandler}>
        <i className='fas fa-trash'></i> Remove
      </button>
    </div>
  );
};

export default RantDetail;
