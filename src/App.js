import React, { Component } from 'react';

import Layout from './components/Layout';
import BurgerBuidler from './containers/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuidler />
        </Layout>
      </div>
    );
  }
}

export default App;
