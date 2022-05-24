import AdCard from "../../components/AdCard";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} p={3}>
        <AdCard />
      </Grid>
      <Grid item xs={12} sm={3} p={3}>
        <AdCard />
      </Grid>
      <Grid item xs={12} sm={3} p={3}>
        <AdCard />
      </Grid>
      <Grid item xs={12} sm={3} p={3}>
        <AdCard />
      </Grid>
      <Grid item xs={12} sm={3} p={3}>
        <AdCard />
      </Grid>
      <Grid item xs={12} sm={3} p={3}>
        <AdCard />
      </Grid>
    </Grid>
  );
};

export default HomePage;
