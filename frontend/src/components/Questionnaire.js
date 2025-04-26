// src/components/Questionnaire.js
import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import API from "../api";

const Questionnaire = ({ onResult }) => {
  const [responses, setResponses] = useState("");
  const [candidateId, setCandidateId] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await API.post("/submit-response", {
        candidate_id: candidateId,
        responses,
      });
      onResult(res.data.profile);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Personality Assessment
      </Typography>

      <TextField
        fullWidth
        label="Candidate ID"
        margin="normal"
        value={candidateId}
        onChange={(e) => setCandidateId(e.target.value)}
      />

      <TextField
        fullWidth
        multiline
        minRows={6}
        label="Write your answers to behavioral questions here..."
        margin="normal"
        value={responses}
        onChange={(e) => setResponses(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Responses
      </Button>
    </Box>
  );
};

export default Questionnaire;
