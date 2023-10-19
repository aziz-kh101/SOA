import React, { useCallback, useEffect, useState } from "react";

import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { deleteUser, getAllTeachers } from "../@services/UserService";

function ListTeachers(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllTeachers().then((result) => {
      console.log(result);
      setData(result);
    });
  }, []);

  const HandleDelete = useCallback(function (event) {
    if (window.confirm("do u realy want to delete this row ?")) {
      // delete
      deleteUser(this).then(() => {
        setData((data) => data.filter((user) => user.email !== this));
      });
    }
  }, []);

  return (
    <Container
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Container>
        <Button component={Link} to={"/teacher/add"}>
          add teacher
        </Button>
      </Container>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            width: "100%",
            boxSizing: "border-box",
            padding: "20px",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>email</TableCell>
              <TableCell align="right">first name</TableCell>
              <TableCell align="right">last name</TableCell>
              <TableCell align="right">actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="right">{row.first_name}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">
                  <Button
                    component={Link}
                    to={`/teacher/update/${row.email}`}
                    variant="text"
                    color="warning"
                  >
                    edit
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    onClick={HandleDelete.bind(row.email)}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ListTeachers;
