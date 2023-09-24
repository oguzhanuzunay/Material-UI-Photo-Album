import { useState } from "react";
import {
  Typography,
  AppBar, //navbar
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline, // default styles
  Grid,
  Toolbar,
  Container,
  Button,
  Box,
  Stack,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

const defaultTheme = createTheme();
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt suscipit
              corrupti tempora officia illum officiis recusandae blanditiis nemo rerum.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" color="primary">
                See my Album
              </Button>
              <Button variant="outlined" color="primary">
                Secondary Action
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    title="image Title"
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" color="black">
                      Heading
                    </Typography>
                    <Typography variant="subtitle1" color="black">
                      Lorem ipsum dolor sit amet.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="text" color="primary">
                      View
                    </Button>
                    <Button size="small" variant="text" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
