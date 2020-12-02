import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import RantItem from '../components/RantItem';
import Message from '../components/Message';

const ArticleList = () => {
  const fetchRants = useStoreActions(actions => actions.fetchRants);
  const setMessage = useStoreActions(actions => actions.setMessage);

  useEffect(() => {
    fetchRants();

    setTimeout(() => {
      setMessage('');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rants = useStoreState(state => state.rants);

  return (
    <>
      <Message />
      <div className='container'>
        {rants?.map(rant => {
          return <RantItem key={rant?._id} rant={rant} />;
        })}
      </div>
    </>
  );
};

export default ArticleList;
