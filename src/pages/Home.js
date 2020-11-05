import {useState} from 'react';
import {useEffect} from 'react';
import HeaderBar from '../components/Header';


import "style.css";
import "tailwindcss/dist/base.css";

import '../App.css';

import BetterHero from 'components/hero/BackgroundAsImageWithCenteredContent';
import ThreeColumn from 'components/features/ThreeColSimple';
import GridFeatured from 'components/blogs/GridWithFeaturedPost';
import Footer from "components/footers/FiveColumnDark";
import SimpleSubscribe from 'components/forms/SimpleSubscribeNewsletter';

import MiniCentered from "components/footers/MiniCenteredFooter";
import DownloadApp from "components/cta/DownloadApp";

import AccordianFluid from '../components/AccordianFluid';

import {Header, Icon} from 'semantic-ui-react';
import {Menu, Table, Segment} from 'semantic-ui-react';




export default Home;

function Home() {

    return (
        <>
                <HeaderBar/>

            <br/>
            <BetterHero/>

            <br/>
            <hr/>
            <br/>

            <ThreeColumn/>


            <br/>
            <hr/>
            <br/>

            <GridFeatured/>

            <br/>
            <hr/>
            <br/>

            <SimpleSubscribe/>


<br/>
<hr/>
<br/>

            <AccordianFluid/>


<br/>
<hr/>
<br/>

            <Header as='h2' icon>
                <Icon name='settings' />
                Account Settings
                <Header.Subheader>
                Manage your account settings and set e-mail preferences.
                </Header.Subheader>
            </Header>


<br/>
<hr/>
<br/>


            <Menu attached='top' compact inverted widths={3}>
                <Menu.Item as='a'>Item</Menu.Item>
                <Menu.Item as='a'>Item</Menu.Item>
                <Menu.Item as='a'>Item</Menu.Item>
            </Menu>
            <Table attached inverted>
                <Table.Header>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            <Segment attached='bottom' inverted>
                Segment
            </Segment>

            <br/>
            <hr/>
            <br/>

            <DownloadApp/>

            <br/>
            <hr/>
            <br/>

            <Footer/>


            <br/>
            <hr/>
            <br/>

            <MiniCentered/>

            <br/>
            <hr/>
            <br/>


            <br/>
            <hr/>
            <br/>


            <br/>
            <hr/>
            <br/>


        </>
    )
}
