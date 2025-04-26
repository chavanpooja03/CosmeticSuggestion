import React, { useState, useEffect } from 'react';
import { UploadImage } from '../controllers/actions';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from './Components/webCam';

// MUI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function ImageInput() {
  const [landingPage, setLandingPage] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (imageSrc !== null) {
      console.log("we got an image");
      UploadImage(imageSrc, navigate); // Image is uploaded after the user selects it.
    }
  }, [imageSrc, navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e3f2fd, #ffffff)', // Gradient background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        position: 'relative',
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={12}
          sx={{
            padding: 4,
            borderRadius: 4,
            backgroundColor: '#ffffffcc',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid container justifyContent="center" alignItems="center">
            {landingPage ? (
              <Grid item xs={12} textAlign="center">
                <PhotoCameraIcon sx={{ fontSize: '6rem', mb: 2, color: '#26a69a' }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: '600', color: '#004d40' }}>
                  Ready to capture your look?
                </Typography>
                <Typography variant="body1" sx={{ color: '#455a64' }} gutterBottom>
                  Click below to take a photo for skin analysis
                </Typography>
                <Button
                  onClick={() => setLandingPage(false)} // The only change happens when the button is clicked
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    borderRadius: 2,
                    textTransform: 'none',
                    backgroundColor: '#26c6da',
                    backgroundImage: 'linear-gradient(to right, #26c6da, #80deea)',
                    color: '#ffffff',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: '#00acc1',
                      transform: 'scale(1.03)',
                    },
                  }}
                  fullWidth
                >
                  Take a Photo
                </Button>
              </Grid>
            ) : (
              <WebcamCapture setImageSrc={setImageSrc} />
            )}
          </Grid>
        </Paper>
      </Container>

      {/* Footer Section */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(38, 198, 218, 0.15)', // Light blue color that fits the gradient
          color: '#004d40', // Dark text to stand out on light background
          py: 1, // Smaller padding for a subtle footer
          textAlign: 'center',
          fontSize: '0.75rem', // Smaller font size for subtlety
        }}
      >
        <Typography variant="body2">
          © 2025 SkinCareAI. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <a href="https://www.example.com/privacy-policy" style={{ color: '#26c6da', textDecoration: 'none' }}>
            Privacy Policy
          </a> | 
          <a href="https://www.example.com/terms-of-service" style={{ color: '#26c6da', textDecoration: 'none' }}>
            Terms of Service
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ImageInput;
