import React from "react";
import { Link } from "react-router-dom";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { IconButton } from "@material-ui/core";
import { useTheme } from "../../context/ThemeContext";

import './index.scss';

export const TableSuppliers = ({ data }) => {
  const { theme } = useTheme();

  return (
    <table className={`default-table default-table--suppliers ${theme}`} cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>CNPJ</th>
          <th>Phone Number</th>
          <th>Owner</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        { 
          data.map(item => {
            return(
              <tr key={item.publicId}>
                <td>{item.name}</td>
                <td>{item.cnpj}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.ownerName}</td>
                <td className="edit">
                  <Link to={`/supplier-details/${item.publicId}`}>
                    <IconButton>
                      <EditOutlinedIcon />
                    </IconButton>
                  </Link>
                </td>
              </tr>
            )
          }) 
        }
      </tbody>
    </table>
  );
};
