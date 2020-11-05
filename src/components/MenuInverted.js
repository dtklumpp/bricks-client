import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom';

export default class MenuInverted extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size="huge" inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        ><NavLink to='/splash'>group d'état</NavLink></Menu.Item>
        <Menu.Item
          name='cats'
          active={activeItem === 'cats'}
          onClick={this.handleItemClick}
        ><NavLink to='/cats'>Genres</NavLink></Menu.Item>
        <Menu.Item
          name='leaders'
          active={activeItem === 'leaders'}
          onClick={this.handleItemClick}
        ><NavLink to='/leaders'>Leaders</NavLink></Menu.Item>
        <Menu.Item
          name='map'
          active={activeItem === 'map'}
          onClick={this.handleItemClick}
        ><NavLink to='/map'>Continents</NavLink></Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name='admin'
            active={activeItem === 'admin'}
            onClick={this.handleItemClick}
          ><NavLink to='/crud'>Admin</NavLink></Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}