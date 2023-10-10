import React from 'react';
import { Layout } from 'antd';
import Home from './pages/Home';
import CustomHeader from './components/Header'

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Home />
      </Content>
    </Layout>
  );
}

export default App;
