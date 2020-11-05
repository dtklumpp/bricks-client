import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import {Table} from 'semantic-ui-react';

import "style.css";
import "tailwindcss/dist/base.css";

import '../App.css';

import GridFeatured from 'components/blogs/GridWithFeaturedPost';

import Footer from "components/footers/FiveColumnDark";
import AccordianFluid from '../components/AccordianFluid';
import SimpleSubscribe from 'components/forms/SimpleSubscribeNewsletter';

import {NavLink, Link} from 'react-router-dom';



export default Template;




const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  })
  
  /* Heads up!
   * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
   * components for such things.
   */
  const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h1'
        content="group d'état"
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Fund a Political Revolution'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <NavLink to='/cats'>
      <Button primary size='huge'>
        Begin
        <Icon name='right arrow' />
      </Button>
      </NavLink>
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }
  
  /* Heads up!
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
   * It can be more complicated, but you can create really flexible markup.
   */
  class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Media greaterThan='mobile'>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as='a' active>
                    Intro
                  </Menu.Item>
                  <Menu.Item as='a'><NavLink to='/cats'>Genres</NavLink></Menu.Item>
                  <Menu.Item as='a'><NavLink to='/leaders'>Leaders</NavLink></Menu.Item>
                  <Menu.Item as='a'><NavLink to='/map'>Continents</NavLink></Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                      Media Kit
                    </Button>

                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      <NavLink to='/crud'>Admin</NavLink>
                    </Button>
                    
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>
  
          {children}
        </Media>
      )
    }
  }

  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }
  
  class MobileContainer extends Component {
    state = {}
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Media as={Sidebar.Pushable} at='mobile'>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation='overlay'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={sidebarOpened}
            >
              <Menu.Item as='a' active>
                Home
              </Menu.Item>
              <Menu.Item as='a'>Work</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Careers</Menu.Item>
              <Menu.Item as='a'>Log in</Menu.Item>
              <Menu.Item as='a'>Sign Up</Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 350, padding: '1em 0em' }}
                vertical
              >
                <Container>
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item position='right'>
                      <Button as='a' inverted>
                        Log in
                      </Button>
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                      </Button>
                    </Menu.Item>
                  </Menu>
                </Container>
                <HomepageHeading mobile />
              </Segment>
  
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Media>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }
  
  const ResponsiveContainer = ({ children }) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }





















function Template(props) {


  // function navigate(link){
  //   props.history.push('/'+link);
  // }


    return   <ResponsiveContainer>




<br/>
<hr/>
<br/>
<br/>
<br/>
        <Grid columns={3}>
          <Grid.Column>
            <Header as='h2' icon>
                <Icon name='globe' />
                Search Database
                <Header.Subheader>
                Identify promising revolutionaries who meet your ideological and geographic profile.
                </Header.Subheader>
            </Header>

          </Grid.Column>
          <Grid.Column>
            <Header as='h2' icon>
                <Icon name='fire' />
                Pledge Funding
                <Header.Subheader>
                Browse funding goals, deadlines, and details and select a project.
                </Header.Subheader>
            </Header>

          </Grid.Column>
          <Grid.Column>
            <Header as='h2' icon>
                <Icon name='settings' />
                Wait and Watch
                <Header.Subheader>
                When pledge goals are met, we charge every credit card and set the gears in motion.
                </Header.Subheader>
            </Header>

          </Grid.Column>

        </Grid>


<br/>
<br/>
<br/>
<hr/>
<br/>


            <Menu attached='top' compact inverted widths={3}>
                <Menu.Item as='a'></Menu.Item>
                <Menu.Item as='a'></Menu.Item>
                <Menu.Item as='a'></Menu.Item>
            </Menu>
            <Table attached inverted>
                <Table.Header>
                <Table.HeaderCell>Continent</Table.HeaderCell>
                <Table.HeaderCell>Pending Movements</Table.HeaderCell>
                <Table.HeaderCell>Backers</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>North America</Table.Cell>
                    <Table.Cell>18</Table.Cell>
                    <Table.Cell>152</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Africa</Table.Cell>
                    <Table.Cell>37</Table.Cell>
                    <Table.Cell>339</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Asia</Table.Cell>
                    <Table.Cell>143</Table.Cell>
                    <Table.Cell>912</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Europe</Table.Cell>
                    <Table.Cell>25</Table.Cell>
                    <Table.Cell>310</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>South America</Table.Cell>
                    <Table.Cell>1037</Table.Cell>
                    <Table.Cell>10,048</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Australia</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>0</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            <Segment attached='bottom' inverted>
            </Segment>

            <GridFeatured/>


    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Pagan Rites</List.Item>
                <List.Item as='a'>Sales</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Legal' />
              <List link inverted>
                <List.Item as='a'>FAQs</List.Item>
                <List.Item as='a'>Terms of Service</List.Item>
                <List.Item as='a'>GPDR</List.Item>
                <List.Item as='a'>Disclaimer</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Contact
              </Header>
              <p>
                dtklumpp@gmail.com
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>


  
  </ResponsiveContainer>
}
