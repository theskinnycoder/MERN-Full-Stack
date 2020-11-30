import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  const { _id, title, body, createdAt } = article;

  return (
    <div>
      <h3>{title}</h3>
      <small>Published on {createdAt}</small>
      <p>{body.substring(0, 450)}...</p>
      <Link to={`/${_id}/`}>
        <button>
          <i className='material-icons'>open_in_new</i>
          <strong>Visit Article</strong>
        </button>
      </Link>
    </div>
  );
};

export default Article;
