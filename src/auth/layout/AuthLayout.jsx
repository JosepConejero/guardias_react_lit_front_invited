import { Grid, Typography } from "@mui/material";

const isLit = true;

export const AuthLayout = ({ children, title = "" }) => {
  if (isLit) {
    console.warn("no tiene que entrar ya más por aquí");
    return;
  } else {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      >
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{
            width: { sm: 450 },
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            {title}
          </Typography>
          {children}
        </Grid>
      </Grid>
    );
  }
};
