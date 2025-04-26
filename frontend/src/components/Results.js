import React from "react";
import { Box, Typography } from "@mui/material";

const Results = ({ profile }) => {
  if (!profile) return null;

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Personality Results
      </Typography>

      <pre style={{ background: "#eee", padding: "1rem" }}>
        {JSON.stringify(profile, null, 2)}
      </pre>
    </Box>
  );
};

export default Results;
