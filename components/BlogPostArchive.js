import React, { useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
/**
 * 博客归档列表
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostArchive = ({ posts = [], archiveTitle }) => {
  const targetRef = useRef(null)
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return <div ref={targetRef}>
      <div className='pt-16 pb-4 text-3xl dark:text-white' id={archiveTitle}>{archiveTitle}</div>
      <ul>
        {posts.map(post => (
          <li key={post.id} className='border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-blue-500 transform duration-500'>
            <div name={post?.date?.start_date}><span className='text-gray-400'>{post.date.start_date}</span> &nbsp;
              <Link href={`${BLOG.path}/article/${post.slug}`} passHref>
                <a className='dark:text-blue-400 overflow-x-hidden hover:underline cursor-pointer text-blue-600'>{post.title}</a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default BlogPostArchive
