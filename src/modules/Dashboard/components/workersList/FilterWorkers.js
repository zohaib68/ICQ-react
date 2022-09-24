import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

import {
  workerCategoryOptions,
  workerExpOptions,
} from "../../../common/components/WorkerOptions";

export const FilterWorkers = ({ filterWorkers }) => {
  const [values, setValues] = useState({
    exp: "",
    cat: "",
  });
  const { exp, cat } = values;
  const onChangeHandler = (e, key) => {
    const { value } = e?.target;
    setValues((p) => ({ ...p, [key]: value }));
  };
  const searchWorker = () => {
    console.log(exp, "category", cat);
    if (!exp && !cat) {
      alert("error");
    } else {
      let filters = JSON.stringify({ experience: exp, category: cat });
      filterWorkers(`/?filters=${filters}`);
    }
  };
  return (
    <Grid sx={{ p: 2 }} container columnSpacing={2} rowSpacing={2}>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <TextField
          select
          fullWidth
          size="small"
          id="filterWorkerExp"
          name="filterWorkerExp"
          label="Woker Experience"
          value={exp}
          onChange={(e) => onChangeHandler(e, "exp")}
        >
          {workerExpOptions}
        </TextField>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <TextField
          select
          fullWidth
          size="small"
          id="filterWorkerCategory"
          label="Woker Category"
          name="filterWorkerCategory"
          value={cat}
          onChange={(e) => onChangeHandler(e, "cat")}
        >
          {workerCategoryOptions}
        </TextField>
      </Grid>
      <Grid
        sx={{ display: "flex", justifyContent: "end" }}
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Button onClick={() => searchWorker()} variant="contained">
          Filter
        </Button>
      </Grid>
    </Grid>
  );
};
