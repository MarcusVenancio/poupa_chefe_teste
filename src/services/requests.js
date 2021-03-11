import { clients } from './api';

export const login = data => clients.auth.post(`/oauth/token`, data);

export const getAllSuppliers = () => clients.user.get(`/suppliers`);

export const getSupplierById = id => clients.user.get(`/suppliers/${id}`);

export const updateSupplier = data => clients.user.put(`/suppliers`, data);
