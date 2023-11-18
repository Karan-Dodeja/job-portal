import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CompLogo from "../../assets/search.png";
import Button from '@mui/material/Button';

export default function JobPosting() {
  return (
    <Paper
      sx={{
        p: 5,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <img
            alt="crypto"
            src={CompLogo}
            style={{ maxWidth: "77px", maxHeight: "75px" }}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Software Engineer
              </Typography>
              <Typography variant="body2" gutterBottom>
                Google LLC
              </Typography>
              <Typography variant="body2" gutterBottom>
                Salary: Not Disclosed
              </Typography>
            </Grid>
          </Grid>
          <Grid><Button variant="outlined">APPLY</Button></Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
