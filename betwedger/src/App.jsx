import React from "react";
import { CssBaseline, Container, Card, Grid, Paper, Box } from "@mui/material";
import ResponsiveAppBar from "./components/AppBar.jsx";
import backgroundImage from "./assets/background.png";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <section id="home">
        <Container
          maxWidth="100vw"
          sx={{
            textAlign: "center",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover", // Ensures the image covers the container
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            height: "100vh", // Adjust the height as needed
            width: "100vw", // Ensure the width covers the viewport
            display: "flex", // Use flexbox to align items
            alignItems: "center", // Center items vertically
            justifyContent: "center", // Center items horizontally
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            padding: [2, 3, 4],
          }}
        >
          <Box
            sx={{
              padding: 4,
              color: "white",
              textAlign: "center",
              width: {
                xs: "100%", // 100% width on extra-small screens
                sm: "80%", // 80% width on small screens
                md: "60%", // 60% width on medium screens
                lg: "80%", // 40% width on large screens
                xl: "30%", // 30% width on extra-large screens
              },
              fontSize: {
                xs: "1rem", // 1.5rem font size on extra-small screens
                sm: "1rem", // 2rem font size on small screens
                md: "1.5rem", // 2.5rem font size on medium screens
                lg: "2rem", // 3rem font size on large screens
                xl: "2.5rem", // 3.5rem font size on extra-large screens
              },
            }}
          >
            <h1>EXPERIENCE THE THRILL</h1>
            <p>The Number 1 Gaming Platform:</p>
          </Box>
        </Container>
      </section>
      <section id="games">
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Card>
                <Paper sx={{ height: 140, width: 100 }} />
                <h1>Test</h1>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <Paper sx={{ height: 140, width: 100 }} />
                <h1>Test</h1>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <Paper sx={{ height: 140, width: 100 }} />
                <h1>Test</h1>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <Paper sx={{ height: 140, width: 100 }} />
                <h1>Test</h1>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="aboutus">
        <h1>About Us Section</h1>
        <p>Learn more about us here.</p>
      </section>
    </div>
  );
}

export default App;
