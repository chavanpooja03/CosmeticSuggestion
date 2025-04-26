import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

// controllers
import { putForm } from '../controllers/actions';
import { useLocation } from 'react-router';

const skinToneValues = [1, 2, 3, 4, 5, 6];
const skinToneColors = [
    "rgb(249, 245, 236)",
    "rgb(250, 245, 234)",
    "rgb(240, 227, 171)",
    "rgb(206, 172, 104)",
    "rgb(105, 59, 41)",
    "rgb(33, 28, 40)",
];

let data = {
    tone: 5,
    type: "Oily",
    acne: "Moderate"
};

const skinTypes = ["All", "Oily", "Normal", "Dry"];
const acnes = ['Low', 'Moderate', 'Severe'];
const otherConcerns = ['sensitive', 'fine lines', 'wrinkles', 'redness', 'pore', 'pigmentation', 'blackheads', 'whiteheads', 'blemishes', 'dark circles', 'eye bags', 'dark spots'];

const Footer = () => (
    <Box component="footer" sx={{ mt: 6, py: 3, borderTop: 1, borderColor: 'divider', textAlign: 'center', backgroundColor: '#d6e4e5' }}>
        <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} SkinCare Advisor. All rights reserved.
        </Typography>
    </Box>
);

const Form = () => {
    const { state } = useLocation();
    if (state !== null) {
        data = state.data;
    }

    const { type, tone, acne } = data;
    const [currType, setCurrType] = useState(type);
    const [currTone, setCurrTone] = useState(parseInt(tone));
    const [currAcne, setAcne] = useState(acne);

    const [features, setFeatures] = useState({
        "normal": false, "dry": false, "oily": false, "combination": false,
        "acne": false, "sensitive": false, "fine lines": false, "wrinkles": false,
        "redness": false, "dull": false, "pore": false, "pigmentation": false,
        "blackheads": false, "whiteheads": false, "blemishes": false, "dark circles": false,
        "eye bags": false, "dark spots": false
    });

    const handleChange = (event) => {
        setFeatures({
            ...features,
            [event.target.name]: event.target.checked,
        });
    };

    const handleTone = (e) => {
        setCurrTone(e.target.value);
    };

    const handleType = (e) => {
        setCurrType(e.target.value);
    };

    const handleAcne = (e) => {
        setAcne(e.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (currType === 'All') {
            features['normal'] = true;
            features['dry'] = true;
            features['oily'] = true;
            features['combination'] = true;
        } else {
            features[currType.toLowerCase()] = true;
        }

        if (currAcne !== "Low") {
            features['acne'] = true;
        }

        for (const [key, value] of Object.entries(features)) {
            features[key] = value ? 1 : 0;
        }

        putForm(features, currType, currTone, navigate);
    };

    return (
        <>
            <Container maxWidth="sm" sx={{ marginTop: "4vh", padding: 3, borderRadius: 3, boxShadow: 3, backgroundColor: '#eef6f7' }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
                    Results
                </Typography>

                <FormControl component="fieldset" fullWidth>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={9}>
                            <FormControl fullWidth>
                                <InputLabel id="tone-select-label">Skin Tone</InputLabel>
                                <Select
                                    labelId="tone-select-label"
                                    id="tone-select"
                                    value={currTone}
                                    label="Skin Tone"
                                    onChange={handleTone}
                                    fullWidth>
                                    {skinToneValues.map((value) => (
                                        <MenuItem key={value} value={value}>{value}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div
                                style={{
                                    height: "3rem",
                                    width: "3rem",
                                    backgroundColor: skinToneColors[currTone - 1],
                                    margin: "0 auto",
                                    borderRadius: "50%",
                                    border: "2px solid #ccc"
                                }}
                            ></div>
                        </Grid>
                    </Grid>

                    <Grid marginTop={4}>
                        <FormLabel component="legend">Skin Type</FormLabel>
                        <RadioGroup
                            row
                            onChange={handleType}
                            value={currType}
                            name="skin-type-radio-group">
                            <Grid container spacing={2}>
                                {skinTypes.map((type) => (
                                    <Grid item xs={6} key={type}>
                                        <FormControlLabel
                                            value={type}
                                            control={<Radio />}
                                            label={type} />
                                    </Grid>
                                ))}
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid marginTop={4}>
                        <FormLabel component="legend">Acne Level</FormLabel>
                        <RadioGroup
                            row
                            onChange={handleAcne}
                            value={currAcne}
                            name="acne-level-radio-group">
                            <Grid container spacing={2}>
                                {acnes.map((ac) => (
                                    <Grid item key={ac}>
                                        <FormControlLabel
                                            value={ac}
                                            control={<Radio />}
                                            label={ac} />
                                    </Grid>
                                ))}
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid marginTop={4}>
                        <FormLabel component="legend">Other Skin Concerns</FormLabel>
                        <Grid container spacing={2}>
                            {otherConcerns.map((concern) => (
                                <Grid item xs={6} key={concern}>
                                    <FormControlLabel
                                        control={<Checkbox checked={features[concern]} onChange={handleChange} name={concern} />}
                                        label={concern.charAt(0).toUpperCase() + concern.slice(1)} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid marginTop={5}>
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            sx={{ borderRadius: 2 }}>
                            Submit
                        </Button>
                    </Grid>
                </FormControl>
            </Container>
            <Footer />
        </>
    );
};

export default Form;
