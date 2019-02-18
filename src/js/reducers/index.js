import C from "../constants/action-types";

let imgUrls = [
  'https://source.unsplash.com/3Z70SDuYs5g/800x600',
  'https://source.unsplash.com/01vFmYAOqQ0/800x600',
  'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
  'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
  'https://source.unsplash.com/E4944K_4SvI/800x600',
  'https://source.unsplash.com/-hI5dX2ObAs/800x600',
  'https://source.unsplash.com/vZlTg_McCDo/800x600'
];

const initialState = {
  showModal: false,
  galleryUrl: imgUrls,
  modalUrl: "",
  activeIndex: 0
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case C.TOGGLE_MODAL: {
      console.log(action.url);
      return Object.assign({}, state, {
        showModal: !state.showModal,
        modalUrl: action.url,
        activeIndex: action.index
      })
    }
    default:
      return state
  }

}

export default rootReducer;