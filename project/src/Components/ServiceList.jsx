import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../ServiceContext';
import ServiceItem from './ServiceItem';

const ServiceList = () => {
  const { services, deleteService,updateService } = useContext(ServiceContext);

  return (
    <div className="service-container">
      <h2>Healthcare Services</h2>
      <ul>
        {services.map(service => (
          <ServiceItem
            key={service.id}
            service={service}
            onEdit={()=> updateService(service)}
            onDelete={() => deleteService(service.id)}
          />
        ))}
      </ul>
      <Link to="/new-service">
        <button>Add New Service</button>
      </Link>
    </div>
  );
};

export default ServiceList;
