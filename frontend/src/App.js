import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  useHistory  
} from "react-router-dom";

import ImageInput from "./views/imageInput";
import Recommendations from './views/Recommendations'
import Form from "./views/Form";
import HomePage from './views/HomePage';
import PrivacyPolicy from './views/PrivacyPolicy'; // Adjust path as needed
import TermsOfServicePage from './views/TermsOfService'; 
import TipsPage from './views/TipsPage';



// MUI
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
      
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/capture" element={<ImageInput />} />
          <Route path="/form" element={<Form />} />
          <Route path="/recs" element={<Recommendations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/tips" element={<TipsPage />} />
        </Switch>

      </Router>
    </>

  );
}

export default App;
