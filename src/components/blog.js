import React, { useContext } from "react"
import { Button, Card } from "antd"
import Context from "../utils/context"

const EN = "For those who are interested in Python and Frontend tech may be found useful and interesting to read my Blog. I would be glad to any comment and will appreciate your questions and feedback."
const ZH = "如果你关注 Python 和前端资讯，可以浏览我的博客，或许您会获得一些新的灵感。如果有任何问题，欢迎您的留言和问题。"

let BlogCard = () => {
  const ctx = useContext(Context)

  return (
    <Card>
      <h3>
        {ctx.language === 'en' ? 'Blog' : '博客'}
      </h3>
      <div style={{textAlign: 'center', fontSize: 16}}>
        <div>
          {ctx.language === 'en' ? EN : ZH}
        </div>
        <Button
          style={{marginTop: 20}}
          size="large"
          shape="round"
          onClick={()=> window.open("https://blog.hsoxo.com", "_blank")}
        >
          Check out my Blog
        </Button>
      </div>
    </Card>
  )
}

export default BlogCard