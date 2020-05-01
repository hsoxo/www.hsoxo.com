import React from "react"
import { Button, Card } from "antd"
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';

import { ReactComponent as BlogIcon } from "../assets/blog.svg"
const avatar = require("../assets/avatar.jpg")

let Sider = () => (
  <Card
    hoverable={false}
    bordered={false}
    className={"profile-card"}
    cover={<div className={'upper-part'}>
      <img src={avatar} alt="avatar" width={200} style={{borderRadius: '50%'}}/>
      <h2>
        Herbert He
      </h2>
      <div>
        Full Stack Engineer
      </div>
      <div>
        <a href="https://github.com/hsoxo" target="_blank" rel="noopener noreferrer">
          <GithubOutlined style={{fontSize: 25, margin: '20px 10px'}}/>
        </a>
        <a href="https://www.linkedin.com/in/bolong-he-b968aa70/" target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined style={{fontSize: 25, margin: '20px 10px'}}/>
        </a>
        <a href="http://blog.hsoxo.com/" target="_blank" rel="noopener noreferrer">
          <Icon component={BlogIcon} style={{fontSize: 25, margin: '20px 10px'}}/>
        </a>
      </div>
    </div>}
  >
    <Button shape="round" icon={<DownloadOutlined />} size="large" onClick={() => {
      window.open('/CV.pdf', '_blank')
    }}>
      Download CV
    </Button>
  </Card>
)

export default Sider