const initState = {
  posts: [
    { id: '1', title: 'My First Title', body: 'lorem ipusm blablablal' },
    { id: '2', title: 'My Second Title', body: 'lorem ipusm text 2' },
    { id: '3', title: 'My Third Title', body: 'lorem ipusm text 3' },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;
