"use client";

import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, LinearProgress } from "@mui/material";

const SessionTimeoutModal = () => {
    const sessionLifetime = 4 * 60 * 60; // 4 hours in seconds
    const warningTime = 2 * 60; // show modal 2 minutes before expiry    

  const [countdown, setCountdown] = useState(sessionLifetime);
  const [open, setOpen] = useState(false);

  // Reset countdown on user activity
  const resetCountdown = () => setCountdown(sessionLifetime);

  useEffect(() => {
    window.addEventListener("mousemove", resetCountdown);
    window.addEventListener("keydown", resetCountdown);
    return () => {
      window.removeEventListener("mousemove", resetCountdown);
      window.removeEventListener("keydown", resetCountdown);
    };
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setOpen(true); // show modal on timeout
          return 0;
        }
        if (prev <= warningTime) setOpen(true);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progressPercent = (countdown / sessionLifetime) * 100;

  return (
    <Modal
      open={open}
      onClose={() => {}}
      closeAfterTransition
      sx={{
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(255,255,255,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none", // disables click outside
      }}
    >
      <Box
        sx={{
          width: { xs: 300, sm: 400 },
          bgcolor: "#fefefe",
          borderRadius: 3,
          p: 4,
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
          color: "#333",
          overflow: "hidden",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          ⏰ Session Expiring
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            height: 10,
            borderRadius: 5,
            mb: 3,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              background: `linear-gradient(90deg, #42a5f5, #7e57c2)`,
              transition: "width 1s linear",
            },
          }}
        />

        <Typography variant="body1">
          Your session is expiring. Please refresh the page.
        </Typography>
      </Box>
    </Modal>
  );
};

export default SessionTimeoutModal;
