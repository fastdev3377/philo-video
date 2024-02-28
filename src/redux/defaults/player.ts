import { Presentation } from '../../types/presentation';

export default {
  currentVideo: {},
  isPaused: true,
  initialized: false,
};

export interface PlayerState {
  currentVideo: Presentation;
  isPaused: boolean;
  initialized: boolean;
}
