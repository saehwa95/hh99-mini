//액션 타입
//[SERVER]

//[POST]
const ADD_POST = "ADD_POST"
// const LOAD_POST = "LOAD_POST"
// const DELETE_POST = "DELETE_POST"
// const UPDATE_POST = "UPDATE_POST"


//액션 크리에이터
//[SERVER]

//[POST]
export const addPost = (payload) => {
  return {type : ADD_POST, payload}
}

// export const loadPost = (payload) => {
//   return {type : LOAD_POST, payload}
// }

// export const deletePost = (payload) => {
//   return {type : DELETE_POST, payload}
// }

// export const updatePost = (payload) => {
//   return {type : UPDATE_POST, payload}
// }

//초깃값
const initialState = {
  posts : [
    {
      imageUrl : "",
      postid : "1234",
      nickname : "niko",
      title : "travel",
      desc : "happy travel"
    }
  ],
  loading: false,
  error: null
};

//리듀서
const posts = (state = initialState, action) => {
  switch(action.type) {

    case ADD_POST : return { ...state, posts : action.payload }

    // case LOAD_POST : return { posts : action.payload }

    // case DELETE_POST : return {  }

    // case UPDATE_POST : return {}
    
    default:
      return state;
  }
}

export default posts;
