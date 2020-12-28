import React from "react"
import { Row, Col, Card, Divider, Switch } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sider from "../components/sider"
import Profile from "../components/profile"
import "./index.sass"
import CVTimeline from "../components/timeline"
import Contact from "../components/contact"
import BlogCard from "../components/blog"
import Footer from "../components/footer"
import Context from "../utils/context"

const a = require("../assets/data/personalInfoZh.json")
const b = require("../assets/data/personalInfoEn.json")


const IndexPage = () => {
  const [state, setState] = React.useState({
    info: b,
    language: 'en',
  })

  const toggleLanguage = function() {
    if (state.language === 'zh') {
      setState({
        info: b,
        language: 'en',
      })
    } else {
      setState({
        info: a,
        language: 'zh',
      })
    }
  }

  const isEn = state.language === 'en'

  return (
    <Context.Provider value={state}>
      <Layout>
        <SEO title="Home" />
        <div className="hs-cv-wrapper-desktop">
          <div className="hs-cv-header">
            <Switch
              className="lang-switch"
              checkedChildren="English"
              unCheckedChildren="中文"
              onChange={() => toggleLanguage()}
            />
          </div>
          <Row gutter={32}>
            <Col className="hs-cv-sider" xs={24} sm={24} md={24} lg={6}>
              <Sider/>
            </Col>
            <Col className="hs-cv-main" xs={24} sm={24} md={24} lg={18}>
              <Profile data={state.info}/>
              <div style={{height: 20}} />
              <Card>
                <CVTimeline title={isEn ? "Work Experience" : "工作经历"} key="work" data={state.info.workExperience}/>
                <Divider/>
                <CVTimeline title={isEn ? "Education" : "教育经历"} key="edu" data={state.info.education}/>
              </Card>
              <div style={{height: 20}} />
              {/*<Card>*/}
              {/*  <h3>*/}
              {/*    Reference*/}
              {/*  </h3>*/}
              {/*</Card>*/}
              {/*<div style={{height: 20}} />*/}
              {/*<BlogCard/>*/}
              <div style={{height: 20}} />
              <Contact/>
              <div style={{height: 20}} />
              <Footer/>
            </Col>
          </Row>
        </div>
      </Layout>
    </Context.Provider>
  )
}

export default IndexPage
