import C from '../constants/action-types';

export function toggleModal(url, index) {
  return { type: C.TOGGLE_MODAL, url, index }
};