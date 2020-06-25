import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
var summative1 = require('./summative1.png')
var summative2 = require('./summative2.png')
var summative3 = require('./summative3.png')

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    {/* first tab */}
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={0} style={{minWidth: '450px', marginBottom: '50px'}}>
            <CardTitle style={{color:'fff', height: '200px', background: 'url('+summative1+') top / cover no-repeat'}}></CardTitle>
            <CardTitle>Sony Home Automation App</CardTitle>
            {/* <hr style={{width: '95%', margin:'auto'}}></hr> */}
            <CardText>A basic HTML and CSS site eploring the user interface of a home automation application.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Site (coming soon!)</Button>
            </CardActions>
          </Card>
          {/* Project 2 */}
          <Card shadow={0} style={{minWidth: '450px', marginBottom: '50px'}}>
            <CardTitle style={{color:'fff', height: '200px', background: 'url('+summative2+') top / cover no-repeat'}}></CardTitle>
            <CardTitle>Travel And Accommodation Website</CardTitle>
            {/* <hr style={{width: '95%', margin:'auto'}}></hr> */}
            <CardText>A simple accommodation booking website using Javascript functions to sort through and filter different options.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Site</Button>
            </CardActions>
          </Card>
          <Card shadow={0} style={{minWidth: '450px', marginBottom: '50px'}}>
            <CardTitle style={{color:'fff', height: '200px', background: 'url('+summative3+') top / cover no-repeat'}}></CardTitle>
            <CardTitle>Heavy Metal Bands Archive</CardTitle>
            <CardText>An archive of bands with basic Javascript looping functions to sort and filter.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Site</Button>
            </CardActions>
          </Card>
          <Card shadow={0} style={{minWidth: '450px', marginBottom: '50px'}}>
            <CardTitle style={{color:'fff', height: '200px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / contain no-repeat'}}>React Project</CardTitle>
            <CardTitle>Sony Home Automation App</CardTitle>
            <hr style={{width: '95%', margin:'auto'}}></hr>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Site</Button>
            </CardActions>
          </Card>
        </div>
      )
      {/* second tab */}
    } else if (this.state.activeTab === 1) {
      return(
        <div><h1>This is JavaScript</h1></div>
      )
      {/* third tab */}
    } else if (this.state.activeTab === 2) {
      return(
        <div><h1>This is Css</h1></div>
      )
      {/* fourth tab */}
    } else if (this.state.activeTab === 3) {
      return(
        <div><h1>This is MongoDB</h1></div>
      )
    }
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>All</Tab>
          <Tab>Javascript</Tab>
          <Tab>Css</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;
