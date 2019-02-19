import C from '../constants/action-types';

export function toggleModal(index) {
  return { type: C.TOGGLE_MODAL, index }
};

export function nextSlide(index) {
  return { type: C.NEXT_SLIDE, index }
};

export function prevSlide(index) {
  return { type: C.PREV_SLIDE, index }
}