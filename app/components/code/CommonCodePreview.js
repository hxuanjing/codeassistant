import React, { Component } from 'react'
import Highlight from 'react-highlight'
import CodeSaveWidget from './CodeSaveWidget'
export default class CodePreview extends Component {
  render () {
    return (
      <div>
        <CodeSaveWidget
          code={this.props.code}
          moudle={this.props.moudle}
          filename={this.props.filename}
        />
        <div style={{ height: 580, overflow: 'scroll' }}>
          <Highlight languages={['java']} className='java'>
            {this.props.code}
          </Highlight>
        </div>
      </div>
    )
  }
}