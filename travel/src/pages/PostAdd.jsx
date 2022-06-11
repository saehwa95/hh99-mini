//게시물 작성 페이지

import React from 'react'
import Header from '../components/Header'
import Image from '../element/Image'
import Input from '../element/Input'
import Content from '../element/Content'
import Button from '../element/Button'
import './PostAdd.css'
import {Link} from 'react-router-dom'


const Post = () => {

  
  return (
    <>
    <Header />
      <div className='container'>
      <Image />
      <span>제목</span>
      <Input />
      <span>내용</span>
      <Content />
      </div>

      <div className='footer'>
        <Link to = {`/Main`}>
        <Button>작성 완료</Button>
        </Link>
      </div>

  </>
  )
}

export default Post;