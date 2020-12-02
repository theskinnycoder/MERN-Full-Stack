import { Link } from 'react-router-dom';

const RantItem = ({ rant }) => {
  const { _id, title, body, createdAt } = rant;

  return (
    <div className='text-white my-4 shadow-lg rounded jumbotron'>
      <h1 className='display-3'>{title}</h1>
      <span className='text-muted'>Published on {createdAt}</span>
      <p className='lead'>{body.substring(0, 450)}...</p>
      <Link to={`/${_id}/`}>
        <button className='btn btn-primary btn-lg'>
          <i className='fas fa-external-link-alt'></i> Visit Rant
        </button>
      </Link>
    </div>
  );
};

export default RantItem;
