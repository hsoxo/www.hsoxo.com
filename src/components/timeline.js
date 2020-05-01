import React from "react"
import { Timeline } from "antd"

import "./timeline.sass"
import { SwapRightOutlined } from "@ant-design/icons"

class CVTimeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const { title, data } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <Timeline
          mode={this.state.width >= 768 ? "left" : ""}
          className={"hs-timeline"}
        >
          {data.map(e => (
            <Timeline.Item
              key={e.start}
              label={this.state.width >= 768 ? `${e.start} - ${e.end}` : ""}
              className={"arrow-right"}
            >
              {this.state.width >= 768 || <div className={"arrow-left"}>{`${e.start} - ${e.end}`}</div>}
              <div>
                <span className={"hs-timeline-title"}>{e.company}</span> ‎·{" "}
                {e.city}
              </div>
              <div>{e.title}</div>
              <div>{e.highlight}</div>
              <dl className={"hs-timeline-content"}>
                {e.responsibility.map(e => (
                  <div key={e}>
                    <dt style={{float: 'left'}}><SwapRightOutlined /></dt>
                    <dd style={{marginLeft: 20}}>{e}</dd>
                  </div>
                ))}
              </dl>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    )
  }
}
export default CVTimeline
