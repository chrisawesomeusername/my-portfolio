import React, {Component} from 'react';
import {Grid, Cell, List, ListItemContent, ListItem} from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Chris Brown</h2>
            <img src="https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg" alt="avatar" style={{height: '250px'}}/>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}></p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    0273060809
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    chris.brown@hotmail.co.nz
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px'}}>
                    <i className="fa fa-github-square" aria-hidden="true"/>
                    github.com/chrisawesomeusername
                  </ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;
