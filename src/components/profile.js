import React, { useContext } from "react"
import { Card, Col, Divider, Row } from "antd"
import { CheckOutlined } from "@ant-design/icons"
import "./profile.sass"
import Context from "../utils/context"

let Profile = ({data}) => {
  const { language } = useContext(Context)
  const isEn = language === 'en'
  return (
    <Card>
      <h2 style={{marginBottom: 40}}>
        {data.hello}
      </h2>
      <p>
        {data.description}
      </p>
      <Divider/>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <h3>
            {isEn ? 'personal information' : '个人信息'}
          </h3>
          <dl>
            {data.personalInformation.map(e => (
              <div key={e.label}>
                <dt style={{float: 'left'}}>{e.label}</dt>
                <dd style={{marginLeft: 112}}>{e.value}</dd>
              </div>
            ))}
          </dl>

        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <h3>
            {isEn ? 'language' : '语言能力'}
          </h3>
          {data.language.map(e => (
            <div key={e.label} className={'bullet-bar'}>
              <strong>{e.label}</strong>
              <div>
                {[...Array(10).keys()].map(i =>
                  <span key={`${e.lable}${i}`} className={`bullet ${e.score > i && 'fill'}`}/>
                )}
                <span style={{marginLeft: 5}}>{e.value}</span>
              </div>
            </div>
          ))}
        </Col>
      </Row>
      <Divider/>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <h3>
            {isEn ? 'professional skills' : '专业技能'}
          </h3>
          {data.professionalSkills.map(e => (
            <div key={e.label}>
              {e.label}
              <div className="progress-bar">
                <div className="progress" style={{width: `${e.score}%`}}>
                </div>
              </div>
            </div>
          ))}
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <h3>
            {isEn ? 'additional skills' : '更多技能'}
          </h3>
          {data.additionalSkills.map(e => (
            <div key={e} style={{display: 'inline-block', margin: 10}}>
              {e}
            </div>
          ))}
        </Col>
      </Row>
      <Divider/>
      <Row>
        <Col span={12}>
          <h3>
            styled list
          </h3>
          {data.styledList.map(e => (
            <div key={e}>
              <CheckOutlined />️ {e}
            </div>
          ))}
        </Col>
        <Col span={12}>
          {/*<h3>*/}
          {/*  icon list*/}
          {/*</h3>*/}
        </Col>
      </Row>
    </Card>
  )
}

export default Profile