import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Title } from "../../components/Title/Title";
import { useTheme } from "../../context/ThemeContext";
import Swal from 'sweetalert2';

import * as requests from "../../services/requests";

import "./index.scss";

export const SupplierDetails = () => {
  let history = useHistory();
  const { theme } = useTheme();

  const [supplier, setSupplier] = useState({
    name: "",
    cnpj: "",
    phoneNumber: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhoneNumber: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const { id } = useParams();

  useEffect(() => {
    requests.getSupplierById(id)
    .then((res) => {
      setSupplier(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const handleUpdateSupplier = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Alerta',
      text: "Tem certeza que deseja continuar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, alterar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        requests
        .updateSupplier(supplier)
        .then((res) => {
          Swal.fire(
            'Concluído!',
            'Usuário atualizado com sucesso.',
            'success'
          ).then(() => {
            history.push("/suppliers");
          })
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
  };

  return (
    <div className={`supplier-details ${theme}`}>
      <div className="container">
        <Title title="Supplier Details" />
        <form
          onSubmit={(e) => handleUpdateSupplier(e)}
          className="supplier-details__form"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                value={supplier.name}
                onChange={(e) =>
                  setSupplier({ ...supplier, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                required
                fullWidth
                id="cnpj"
                label="CNPJ"
                value={supplier.cnpj}
                onChange={(e) =>
                  setSupplier({ ...supplier, cnpj: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                value={supplier.phoneNumber}
                onChange={(e) =>
                  setSupplier({ ...supplier, phoneNumber: e.target.value })
                }
              />
            </Grid>
          </Grid>

          <hr />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2 className="supplier-details__subtitle">Owner</h2>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                required
                fullWidth
                id="ownerName"
                label="Owner Name"
                value={supplier.ownerName}
                onChange={(e) =>
                  setSupplier({ ...supplier, ownerName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                required
                fullWidth
                id="email"
                label="E-mail"
                value={supplier.ownerEmail}
                onChange={(e) =>
                  setSupplier({ ...supplier, ownerEmail: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                required
                fullWidth
                id="ownerPhoneNumber"
                label="Phone Number"
                value={supplier.ownerPhoneNumber}
                onChange={(e) =>
                  setSupplier({ ...supplier, ownerPhoneNumber: e.target.value })
                }
              />
            </Grid>
          </Grid>

          <hr />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2 className="supplier-details__subtitle">Address</h2>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                required
                fullWidth
                id="address"
                label="Address"
                value={supplier.address}
                onChange={(e) =>
                  setSupplier({ ...supplier, address: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={6} md={2}>
              <TextField
                required
                fullWidth
                id="addressNumber"
                label="Number"
                value={supplier.number}
                onChange={(e) =>
                  setSupplier({ ...supplier, number: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={6} md={2}>
              <TextField
                required
                fullWidth
                id="complement"
                label="Complement"
                value={supplier.complement}
                onChange={(e) =>
                  setSupplier({ ...supplier, complement: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <TextField
                required
                fullWidth
                id="neighborhood"
                label="Neighborhood"
                value={supplier.neighborhood}
                onChange={(e) =>
                  setSupplier({ ...supplier, neighborhood: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                fullWidth
                id="city"
                label="City"
                value={supplier.city}
                onChange={(e) =>
                  setSupplier({ ...supplier, city: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <TextField
                required
                fullWidth
                id="state"
                label="State"
                value={supplier.state}
                onChange={(e) =>
                  setSupplier({ ...supplier, state: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <TextField
                required
                fullWidth
                id="zipCode"
                label="Zip Code"
                value={supplier.zipCode}
                onChange={(e) =>
                  setSupplier({ ...supplier, zipCode: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Button type="submit" variant="contained" color="primary">
              Atualizar Cadastro
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};
