import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { mainStore } from './store/store';

import { Sidebar } from './components/sidebar';
import { Preview } from './components/preview';
import { MenuBar } from './components/menu-bar';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={mainStore}>
    <MenuBar />
    <div className='container'>
      <Sidebar />
      <Preview />
    </div>
  </Provider>
);
