import React, { createContext, useState } from 'react';

export const ServiceContext = createContext()

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([
    { id: 1, name: 'General Checkup', description: 'A comprehensive general checkup.', price: 50 },
    { id: 2, name: 'Dental Cleaning', description: 'Thorough cleaning of teeth.', price: 75 },
  ]);

  // Add a new service
  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  // Update an existing service
  const updateService = (updatedService) => {
    setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
  };

  // Delete a service
  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <ServiceContext.Provider value={{ services, addService, updateService, deleteService }}>
      {children}
    </ServiceContext.Provider>
  );
};
