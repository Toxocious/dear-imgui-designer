import { configureStore } from '@reduxjs/toolkit';

import { mainReducer } from '../reducers/main';

export const mainStore: any = configureStore({ reducer: mainReducer });
