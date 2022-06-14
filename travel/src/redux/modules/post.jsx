import axios from "axios"
import { getCookie } from "../../shared/Cookie"

//액션 타입
const ADD_POST = "ADD_POST"
const LOAD_POST = "LOAD_POST"
const DELETE_POST = "DELETE_POST"
const UPDATE_POST = "UPDATE_POST"


//액션 크리에이터
const addPost = (payload) => {
  return {type : ADD_POST, payload}
}

const loadPost = (payload) => {
  return {type : LOAD_POST, payload}
}

const deletePost = (payload) => {
  return {type : DELETE_POST, payload}
}

const updatePost = (payload) => {
  return {type : UPDATE_POST, payload}
}


//thunk 함수 작성 (thunk 함수는 async(여기 들어오는 값은 함수!! 변수 아님!!!))
export const __loadPosts = (token) => async(dispatch, getState) => {
  try {
    const response = await axios.get("http://15.164.50.132/api/travel", {
      headers : {
        Authorization : token
      }
    });
    console.log(response) 
    // dispatch(loadPost(response.data))  37번째 콘솔 확인 후 들어오는 값에 맞춰서 38번째줄 작성하기!
  } catch(error){
    console.log(error)
  }
}

export const __addPost = (payload) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  try{
    const response = await axios.post("http://15.164.50.132/api/travels",{
      title: payload.title, 
      content : payload.content,
      imgUrl : payload.imgUrl},
      {headers : {
        Authorization : myToken
      }});
      console.log(response)
      // dispatch(addPost(response.data));  54번째 콘솔 확인 후 들어오는 값에 맞춰서 55번째줄 작성하기!
    }
    catch(error){
      console.log(error)
  }
}


export const __deletePost = (payload) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  try{
      await axios.delete(`http://15.164.50.132/api/travels/${payload}`, {
      headers : {
        Authorization : myToken
      }
    });
    dispatch(deletePost(payload));
  }
  catch(error){
    console.log(error)
  }
}

export const __updatePost = (payload, index) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  try{
    const response = await axios.patch(`http://15.164.50.132/api/travels/${index}`, {
      title: payload.title, 
      content : payload.content,
      imgUrl : payload.imgUrl},
      {
      headers : {
        Authorization : myToken
      }
    });
    console.log(response) 
    // dispatch(updatePost(response)) 90번줄 콘솔 확인 후 91번째 줄 넣어주기
  }
  catch(error){
    console.log(error)
  }
}

//초깃값
const initialState = {
  posts : [],
  loading: false,
  error: null
};

//리듀서
const postReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_POST : return { ...state, posts : [...state.posts, action.payload] }

    case LOAD_POST : return { ...state, posts : action.payload }

    case DELETE_POST:
      const newDeletedPost = state.posts.filter((value, index) => { return value.postId!== Number(action.payload);
      }); return { ...state, list: [...newDeletedPost] };

    case UPDATE_POST:
      const newChangePost = state.posts.map((value) => {
          //액션.페이로드에 같은 아이디 값이면 업데이트 진행!! 그게 아니면 원래 벨류 값 준다.
        return value.postId === Number(action.payload.postId) ? action.payload : value;
      });
      return { ...state, list: newChangePost };

    default:
      return state;
  }
}



export default postReducer;