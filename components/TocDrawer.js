import Toc from '@/components/Toc'
import React, { useImperativeHandle, useState } from 'react'
import { useGlobal } from '@/lib/global'

/**
 * 目录抽屉栏
 * @param toc
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
const TocDrawer = ({ post, cRef }) => {
  // 暴露给父组件 通过cRef.current.handleMenuClick 调用
  useImperativeHandle(cRef, () => {
    return {
      handleSwitchVisible: () => switchVisible()
    }
  })
  const [showDrawer, switchShowDrawer] = useState(false)
  const switchVisible = () => {
    switchShowDrawer(!showDrawer)
  }
  const { locale } = useGlobal()
  return <>
    <div className='fixed top-0 right-0 z-40'>
      {/* 侧边菜单 */}
      <div
        className={(showDrawer ? 'animate__slideInRight ' : ' -mr-72 animate__slideOutRight') +
        '  shadow-xl animate__animated animate__faster max-h-96 ' +
        ' w-60 duration-200 fixed right-4 top-16 rounded overflow-y-auto'}>
          {post && <>
            <div className='text-xl font-bold text-black dark:text-white bg-gray-200 dark:bg-gray-600 py-2 px-6'>
              {locale.COMMON.TABLE_OF_CONTENTS}
            </div>
            <Toc toc={post.toc}/>
          </>
          }
      </div>
    </div>
    {/* 背景蒙版 */}
    <div id='right-drawer-background' className={(showDrawer ? 'block' : 'hidden') + ' fixed top-0 left-0 z-30 w-full h-full'}
         onClick={switchVisible} />
  </>
}
export default TocDrawer
