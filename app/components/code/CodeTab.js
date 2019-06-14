import React, { Component } from 'react'
import { Tabs } from 'antd'
import CodePreview from '../template/CodePreview'
import CodeGengerator from '../template/CodeGenerator'
const { TabPane } = Tabs

export default class CodeTab extends Component {
  state = {}

  componentDidMount () {
    let code = CodeGengerator.generatorTemplateVariable()
    this.setState({
      variableCode: code
    })
  }

  showCode (key) {
    if (key == 'variable') {
      let code = CodeGengerator.generatorTemplateVariable()
      this.setState({
        variableCode: code
      })
    }

    if (key == 'model') {
      let code = CodeGengerator.generatorModelCode()
      this.setState({
        modelCode: code
      })
    }

    if (key == 'dto') {
      let code = CodeGengerator.generatorDtoCode()
      this.setState({
        modelCode: code
      })
    }
  }

  render () {
    return (
      <Tabs
        onChange={this.callback}
        type='card'
        tabPosition='right'
        onChange={this.showCode.bind(this)}
      >
        <TabPane tab='当前变量' key='variable'>
          <CodePreview code={this.state.variableCode} />
        </TabPane>
        <TabPane tab='model code' key='model'>
          <CodePreview code={this.state.modelCode} />
        </TabPane>
        <TabPane tab='dto code' key='dto'>
          <CodePreview code={this.state.modelCode} />
        </TabPane>
      </Tabs>
    )
  }
}
