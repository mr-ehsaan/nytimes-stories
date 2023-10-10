import React from 'react';
import { Input, Layout } from 'antd';
import './Header.scss'

const { Header } = Layout;
const { Search } = Input;

const AppHeader = ({ onSearchChange }) => (
  <Header className='header-container'>
    <h3>Top Stories NY-Times</h3>
    <Search 
      placeholder="Search stories" 
      onChange={(e)=>onSearchChange(e.target.value)}
      className='header-searchbar'
      style={{ maxWidth: 200, margin: '0 auto' }}
    />
  </Header>
);

export default AppHeader;
