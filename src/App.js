import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import actions from './actions';

import Header from './components/header';
import Body from './components/body';
import Notifications from './components/partials/notifications';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doFetchAPI());
  }, []);

  return (
    <main>
      <Notifications />
      <Header />
      <Body />
    </main>
  );
};

export default App;
