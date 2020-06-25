import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg" alt="avatar" className="avatar-img"
          />
        <div className="banner-text">
          <h1>Web and UX Designer</h1>
          <hr/>
          <p>HTML/CSS | Bootstrap | Javascript | React | NodeJs | MongoDB</p>
          <div className="social-links">
            {/* github */}
            <a rel="noopener noreferrer" href="https://github.com/chrisawesomeusername" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>

          </div>

        </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}
export default Landing;
