import React, { Component } from 'react'
import { Modal, Input } from 'antd'
import eventbus from '../eventbus/EventBus'
import EventType from '../eventbus/EventTyp'

export default class DbSetting extends Component {
  constructor () {
    super()
    sessionStorage.setItem('host', '192.168.2.122')
    sessionStorage.setItem('port', 3306)
    sessionStorage.setItem('user', 'root')
    sessionStorage.setItem('password', 'root')
  }

  state = {}

  componentDidMount () {
    eventbus.on(EventType.DATABASE_SETTING_SHOW, this.showDailog.bind(this))
  }

  dbConfig = {
    host: '192.168.2.122',
    port: 3306,
    user: 'root',
    password: 'root'
  }

  closeDbSetting () {
    eventbus.fire(EventType.DATABASE_SETTING_SHOW, false)
  }

  showDailog (visible) {
    this.setState({
      visible: visible
    })
  }

  changeDbConfig (name, e) {
    this.dbConfig[name] = e.target.value
    sessionStorage.setItem(name, e.target.value)
  }

  saveConfig () {
    eventbus.fire(EventType.DATABASE_SETTING_SHOW, false)
    eventbus.fire(EventType.DATABASE_CONFIG_SAVE)
    eventbus.fire(EventType.VARIABLE_CHANGE)
  }

  render () {
    return (
      <Modal
        title='数据库链接'
        visible={this.state.visible}
        onCancel={this.closeDbSetting.bind(this)}
        onOk={this.saveConfig.bind(this)}
      >
        <Input
          name='host'
          style={{ margin: 10 }}
          placeholder='数据库链接地址'
          onChange={this.changeDbConfig.bind(this, 'host')}
          defaultValue={'192.168.2.122'}
          allowClear
        />
        <Input
          name='port'
          style={{ margin: 10 }}
          placeholder='数据库端口号'
          onChange={this.changeDbConfig.bind(this, 'port')}
          defaultValue={3306}
          allowClear
        />
        <Input
          name='user'
          style={{ margin: 10 }}
          placeholder='user'
          onChange={this.changeDbConfig.bind(this, 'user')}
          allowClear
          defaultValue='root'
        />
        <Input
          name='password'
          style={{ margin: 10 }}
          placeholder='password'
          onChange={this.changeDbConfig.bind(this, 'password')}
          allowClear
          defaultValue={'root'}
        />
      </Modal>
    )
  }
}
