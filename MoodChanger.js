const store = Redux.createStore(moodReducer);
const face = document.getElementById('face');

document.getElementById('happy').addEventListener('click', () => {
  store.dispatch({ type: 'HAPPY', payload: '٩(◕‿◕｡)۶' });
  face.style.backgroundColor = "orange";
});

document.getElementById('sad').addEventListener('click', () => {
  store.dispatch({ type: 'SAD', payload: '(ಥ﹏ಥ)' });
  face.style.backgroundColor = "Aqua";
});
document.getElementById('angry').addEventListener('click', () => {
  store.dispatch({ type: 'ANGRY', payload: '٩(ఠ益ఠ)۶' });
  face.style.backgroundColor = "red";
});
document.getElementById('confused').addEventListener('click', () => {
  store.dispatch({ type: 'CONFUSED', payload: 'ლ(ಠ_ಠ ლ)' });
  face.style.backgroundColor = "gray";
});

const renderFace = () => {
  return face.innerHTML = store.getState().face;
}

renderFace();
store.subscribe(renderFace)