import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { mainStore } from './store/store';

import { Sidebar } from './components/sidebar';
import { Preview } from './components/preview';
import { ComponentBar } from './components/component-bar';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={mainStore}>
    <ComponentBar />
    <div className='container'>
      <Sidebar />
      <Preview />
    </div>
  </Provider>
);
