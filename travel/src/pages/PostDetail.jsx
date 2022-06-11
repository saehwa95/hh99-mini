//게시물 상세 페이지

import React from 'react'
import './PostDetail.css'
import {Link} from 'react-router-dom'

const PostDetail = () => {
  return (
    <>
      <h1>헤더 들어갈 곳입니다</h1>
      <div>

        <div className='container'>
          <div className='imgBox'>
            이미지
          </div>
          <div className='wrap'>

            <div className='title'>
              <span>제목</span>
              <input type="text"/>
            </div>

            <div className='content'>
              <span>내용</span>
              <textarea name="textarea" rows="10" cols="50" >힘내보자</textarea>
            </div>

          </div>

        </div>

        <div className='footer'>
          <Link to = {`/PostUpdate/`}>
            <button>수정</button>
          </Link>

          <Link to = {`/Post`}>
            <button>삭제</button>
          </Link>
          
        </div>

      </div>
    </>
  )
}

export default PostDetail;