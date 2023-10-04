import { createRoot } from 'react-dom/client';

import videos from './data/videos';
import configureStore from './redux/store';
import Root from './root';
import { createScheduleData } from './utils';

const INITIAL_STATE = {
  schedule: { scheduleData: createScheduleData(videos) },
};

const store = configureStore(INITIAL_STATE);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Root store={store} />);
