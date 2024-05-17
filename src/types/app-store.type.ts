import { store } from 'src/store/store';

import { Entity } from './entities.type';
import { ApiResponse } from './fe.type';

export declare namespace AppStore {
  type RootState = ReturnType<typeof store.getState>;

  type AppDispatch = typeof store.dispatch;

  type Setting = Partial<Entity.Setting>;

  type AppState = {
    store: ApiResponse.AppStore;
  };
}
