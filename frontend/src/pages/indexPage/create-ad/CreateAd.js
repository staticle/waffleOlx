import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { SaveAsOutlined } from "@mui/icons-material";

const CreateAd = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 3, mx: 3 }}
    >
      <Typography variant="h5" gutterBottom sx={{ my: 3, mt: 5 }}>
        Create New AD
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            name="addTitle"
            required
            fullWidth
            id="addTitle"
            label="Add Title"
            autoFocus
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            name="price"
            required
            id="price"
            type="number"
            label="Price"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            name="description"
            multiline
            required
            fullWidth
            rows={10}
            id="description"
            label="Description"
          />
        </Grid>

        <Grid item xs={12} sm={8} sx={{ display: "flex" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SaveAsOutlined />}
            sx={{ mt: 3, mb: 2, mr: 3 }}
          >
            Save and Publish
          </Button>
          <FormControlLabel control={<Switch />} label="Make AD Live" labelPlacement="start" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateAd;
