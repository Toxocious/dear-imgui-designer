import React from 'react';
import ReactDOM from 'react-dom/client';

import { Sidebar } from './components/sidebar';
import { Preview } from './components/preview';

import './index.css';
import { ComponentBar } from './components/component-bar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ComponentBar />
    <div className='container'>
      <Sidebar />
      <Preview />
    </div>
  </>
);

/*
<Stage >
  <Layer>
    <Text text='Rendering to Konva' />
  </Layer>
</Stage>
*/
