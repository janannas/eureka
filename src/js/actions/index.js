import C from '../constants/action-types';

export function toggleModal(url, index) {
  return { type: C.TOGGLE_MODAL, url, index }
};

//TODO: maybe rewrite nextslide to have the same arguments as toggleModal 
export function nextSlide(index, path) {
  return { type: C.NEXT_SLIDE, index, path }
};

export function prevSlide(url, index) {
  return { type: C.PREV_SLIDE, url, index }
}