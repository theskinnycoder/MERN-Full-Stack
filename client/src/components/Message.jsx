import { useStoreState } from 'easy-peasy';

const Message = () => {
  const message = useStoreState(state => state.message);

  return message ? (
    <div className='alert alert-warning' role='alert'>
      {message}
    </div>
  ) : (
    <></>
  );
};

export default Message;
