// src/components/Questionnaire.js
import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import API from "../api";

const Questionnaire = ({ onResult }) => {
    const [candidateId, setCandidateId] = useState("");
    const [answers, setAnswers] = useState({
        stressManagement: "",
        conflictResolution: "",
        failureExperience: "",
        goalSetting: "",
        taskOverload: "",
    });

    const handleChange = (field) => (event) => {
        setAnswers((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    //   const handleSubmit = async () => {
    //     try {
    //       const res = await API.post("/submit-response", {
    //         candidate_id: candidateId,
    //         responses: answers,
    //       });
    //       onResult(res.data.profile);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    const handleSubmit = async () => {
        try {
            const combinedResponses = Object.values(answers).join("\n\n");

            const payload = {
                candidate_id: candidateId,
                responses: combinedResponses, // now a single string
            };

            const res = await API.post("/submit-response", payload);
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
                minRows={3}
                label="How do you manage stress on the job?"
                margin="normal"
                value={answers.stressManagement}
                onChange={handleChange("stressManagement")}
            />

            <TextField
                fullWidth
                multiline
                minRows={3}
                label="Tell me about a time when you had a conflict with a coworker. How did you navigate the situation?"
                margin="normal"
                value={answers.conflictResolution}
                onChange={handleChange("conflictResolution")}
            />

            <TextField
                fullWidth
                multiline
                minRows={3}
                label="Can you tell me about a time when you failed on the job?"
                margin="normal"
                value={answers.failureExperience}
                onChange={handleChange("failureExperience")}
            />

            <TextField
                fullWidth
                multiline
                minRows={3}
                label="How do you approach goal-setting?"
                margin="normal"
                value={answers.goalSetting}
                onChange={handleChange("goalSetting")}
            />

            <TextField
                fullWidth
                multiline
                minRows={3}
                label="What do you do when you have more on your to-do list than you can manage?"
                margin="normal"
                value={answers.taskOverload}
                onChange={handleChange("taskOverload")}
            />

            <Box mt={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit Responses
                </Button>
            </Box>
        </Box>
    );
};

export default Questionnaire;
