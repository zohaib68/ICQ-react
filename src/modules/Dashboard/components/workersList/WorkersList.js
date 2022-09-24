import React, { useState, useEffect, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  TableContainer,
  Collapse,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { CustomTableCellHeader } from "../../../common/components/CustomTableCellHeader";
import { FilterWorkers } from "./FilterWorkers";
import { getReqWithParams } from "../../../../Crud/Crud";
import { FILTERWORKERS } from "../../../../Crud/constsants";
import { capitalizeFirstLetter } from "../../../../utils/utils";
import { CustomSpinner } from "../../../common/components/CustomSpinner";

const theme = createTheme();
export const WorkersList = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [workers, setWorkers] = useState("");
  const filterWorkers = useCallback((params) => {
    setWorkers("loading");
    getReqWithParams(FILTERWORKERS, params)
      .then((res) => setWorkers(res?.data?.data?.cv))
      .catch((e) => setWorkers("error"));
  }, []);
  useEffect(() => {
    filterWorkers("/?filters={}");
  }, [filterWorkers]);
  console.log(workers, "workersss", typeof workers, workers?.length);
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Collapse
          in={openFilters}
          mountOnEnter
          unmountOnExit
          orientation="vertical"
        >
          <FilterWorkers
            setWorkers={setWorkers}
            filterWorkers={(params) => filterWorkers(params)}
          />
        </Collapse>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton onClick={() => setOpenFilters((p) => !p)}>
            {openFilters ? (
              <CloseIcon color="error" />
            ) : (
              <SearchIcon color="primary" />
            )}
          </IconButton>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCellHeader>First Name</CustomTableCellHeader>
              <CustomTableCellHeader>Last Name</CustomTableCellHeader>
              <CustomTableCellHeader>Category</CustomTableCellHeader>
              <CustomTableCellHeader>Experience</CustomTableCellHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {typeof workers === "object" &&
              workers?.length &&
              workers?.map((worker) => {
                const { experience, workerType, userId } = worker;
                const { firstName, lastName } = userId;
                return (
                  <>
                    <TableCell key={Math.random()}>
                      {capitalizeFirstLetter(firstName)}
                    </TableCell>
                    <TableCell key={Math.random()}>
                      {capitalizeFirstLetter(lastName)}
                    </TableCell>
                    <TableCell key={Math.random()}>
                      {capitalizeFirstLetter(workerType)}
                    </TableCell>
                    <TableCell key={Math.random()}>{experience}</TableCell>
                  </>
                );
              })}
            {typeof workers === "object" && !workers?.length && (
              <TableRow>
                <TableCell sx={{ textAlign: "center" }} colSpan={4}>
                  <Box>No Records!</Box>
                </TableCell>
              </TableRow>
            )}
            {workers === "loading" && (
              <TableRow>
                <TableCell sx={{ textAlign: "center " }} colSpan={4}>
                  <CustomSpinner props={{ thickness: 5 }} />
                </TableCell>
              </TableRow>
            )}
            {workers === "error" && <>error</>}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};
