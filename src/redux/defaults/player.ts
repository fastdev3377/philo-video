import { Presentation } from '../../types/presentation';

export default {
  currentVideo: {},
  isPaused: true,
};

export interface PlayerState {
  currentVideo: Presentation;
  isPaused: boolean;
}
