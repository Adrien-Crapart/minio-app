import { createStore } from 'vuex'
import defaultBoard from '@/composables/trello/default-board.js';

export default createStore({
  state: {
    board: defaultBoard
  }
});
