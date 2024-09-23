import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceContext } from '../ServiceContext';
import Button from '@mui/material/Button';

const AddServiceForm= () => {
  const { addService } = useContext(ServiceContext);
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addService(newService);
    navigate('/');
  };

  return (
    <div className='newservice'>
      <h3>Add New Service</h3>
      <form onSubmit={handleSubmit}>
        <div>
      <label htmlFor="servicename">Servicename</label>
        <input
          type="text"
          placeholder="Name"
          value={newService.name}
          onChange={e => setNewService({ ...newService, name: e.target.value })}
          required
        />
        </div>
        <div>
         <label htmlFor="description">Description</label>
        <textarea    type="text"
          placeholder="Description"
          value={newService.description}
          onChange={e => setNewService({ ...newService, description: e.target.value })}
          required rows={10} cols={30} style={{fontSize: "18px"}}>
          </textarea>
          </div>
          <div>
          <label htmlFor="price">Price</label>
        <input
          type="text"
          placeholder="Price"
          value={newService.price}
          onChange={e => setNewService({ ...newService, price: Number(e.target.value) })}
          required
        />
        </div>
        <Button type="submit" variant='contained'>Add Service</Button>
      </form>
    </div>
  );
};

export default AddServiceForm;
