import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ServiceContext } from '../ServiceContext';

const EditServiceForm = () => {
  const { id } = useParams();
  const { services, updateService } = useContext(ServiceContext);
  const navigate = useNavigate();
  const [service, setService] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    const serviceToEdit = services.find(service => service.id === parseInt(id));
    if (serviceToEdit) {
      setService(serviceToEdit);
    }
  }, [id, services]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService(service);
    navigate('/');
  };

  return (
    <div className='edit-service'>
      <h3>Edit Service</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="servicename">Servicename</label>
        <input
          type="text"
          value={service.name}
          onChange={e => setService({ ...service, name: e.target.value })}
          required
        />
        </div>
        <div>
        <label htmlFor="description">Description</label>
        <textarea type="text"
          value={service.description}
          onChange={e => setService({ ...service, description: e.target.value })}
          required rows={10} cols={30} style={{fontSize: "18px"}}>
        </textarea>
        </div>
        <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          value={service.price}
          onChange={e => setService({ ...service, price: Number(e.target.value) })}
          required
        />
        </div>
        <button type="submit">Update Service</button>
      </form>
    </div>
  );
};

export default EditServiceForm;
