import React from 'react';
import { TextInput, Button } from 'carbon-components-react';

const AddContact = () => (
  <div>
    <TextInput maxLength="30" type="text" labelText="Alias" style={{ width: 300 }} />  
    <br/> <br/>
    <TextInput maxLength="13" type="text" labelText="Cellphone Number" helperText="e.g. +639171234567" style={{ width: 300 }} />
    <br /><br />
    <Button>Add Contact</Button>
  </div>
);

export default AddContact;
