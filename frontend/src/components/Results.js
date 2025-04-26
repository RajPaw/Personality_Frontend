import React from "react";
import { Box, Typography } from "@mui/material";

const Results = ({ profile }) => {
    if (!profile) return null;

    const formattedText = profile.raw_analysis
        .split("\n")
        .map((line, index) => {
            const boldMatch = line.match(/\*\*(.+?)\*\*/); // Match **bold**
            if (boldMatch) {
                const beforeBold = line.split("**")[0];
                const boldText = boldMatch[1];
                const afterBold = line.split("**")[2] || "";
                return (
                    <Typography key={index} sx={{ mt: 1 }}>
                        {beforeBold}
                        <strong>{boldText}</strong>
                        {afterBold}
                    </Typography>
                );
            }
            return (
                <Typography key={index} sx={{ mt: 1 }}>
                    {line}
                </Typography>
            );
        });

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                Personality Results
            </Typography>
            <Box>{formattedText}</Box>
        </Box>
    );
};

export default Results;
