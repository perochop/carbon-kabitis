import { Header, HeaderMenuItem, HeaderName, HeaderNavigation } from 'carbon-components-react/lib/components/UIShell';
import React from 'react';
import { Link } from 'react-router-dom';

const KabitisHeader = () => (
   
  <Header aria-label="Carbon Tutorial"> 
    <HeaderName element={Link} to="/" prefix="Welcome">
      userName
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/addcontact">
        Add Contact
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/messages">
        Messages
      </HeaderMenuItem>
    </HeaderNavigation> 
    </Header>
    
);

export default KabitisHeader;
