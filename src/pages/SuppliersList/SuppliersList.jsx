import React, { useEffect, useState } from "react";
import { TableSuppliers } from "../../components/Table/Table";
import { Title } from "../../components/Title/Title";

import * as requests from "../../services/requests";

import "./index.scss";

export const SuppliersList = () => {
  const [suppliersList, setSuppliersList] = useState([]);

  useEffect(() => {
    requests.getAllSuppliers().then((res) => {
      setSuppliersList(res.data);
    });
  }, []);

  return (
    <div className="suppliers-list container">
      <div className="suppliers-list__content">
        <Title title="Suppliers" />
        <div className="suppliers-list__wrapper-table">
          <TableSuppliers data={suppliersList} />
        </div>
        <p className="suppliers-list__instruction">Deslize para ver a tabela completa</p>
      </div>
    </div>
  );
};
