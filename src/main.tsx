import React from 'react';
import ReactDOM from 'react-dom/client';

import { Sidebar } from './components/sidebar';
import { Preview } from './components/preview';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='container'>
      <Sidebar />
      <Preview />
    </div>
  </React.StrictMode>
);

/*
<Stage >
  <Layer>
    <Text text='Rendering to Konva' />
  </Layer>
</Stage>
*/
