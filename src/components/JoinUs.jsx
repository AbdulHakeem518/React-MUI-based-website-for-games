/* eslint-disable no-useless-computed-key */
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  styled,
  FormControl,
  FormHelperText,
  useTheme,
  useMediaQuery,
  Fade,
  Link as MuiLink,
} from "@mui/material";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import toast from "react-hot-toast";

import { SvgIcon } from "../assets/svgs";

import "../styles/jerry.css";

export default function JoinUs() {
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid;
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const handleClearInput = () => {
    setEmail("");
    setEmailError("");
  };

  const handleSubscribeClick = () => {
    if (validateEmail(email)) {
      toast("Thanks for your subscription!");
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Main sx={{ flex: 1, maxWidth: "564px !important" }}>
        <Heading className="adventure_title">Join Us</Heading>

        <MuiLink
          href="https://discord.com/invite/FYnhV9PH9S"
          target="_blank"
          underline="none"
          sx={{ display: "block", width: "100%" }}
        >
          <CallToActionButton
            fullWidth
            variant="contained"
            startIcon={<SvgIcon name="discord" />}
          >
            Discord
          </CallToActionButton>
        </MuiLink>

        <MuiLink
          href="https://x.com/NeurealDev"
          target="_blank"
          underline="none"
          sx={{ display: "block", width: "100%" }}
        >
          <CallToActionButton
            fullWidth
            variant="contained"
            startIcon={<SvgIcon name="twitter" />}
          >
            X
          </CallToActionButton>
        </MuiLink>

        <Divider
          component="li"
          sx={{
            borderColor: "#fff",
            width: "100%",
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(6),
          }}
        />

        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          Subscribe to track our latest and coolest release!
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Form>
            <InputBox>
              <FormControl fullWidth error={emailError}>
                <Box sx={{ position: "relative" }}>
                  <StyledInput
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    error={email ? emailError : ""}
                  />

                  <Fade in={!!email}>
                    <ClearButton onClick={handleClearInput}>
                      <HighlightOffIcon />
                    </ClearButton>
                  </Fade>
                </Box>
                {emailError && (
                  <FormHelperText>Invalid email format</FormHelperText>
                )}
              </FormControl>
            </InputBox>

            <SubscribeButton
              variant="contained"
              onClick={handleSubscribeClick}
              fullWidth={isExtraSmallScreen}
            >
              Subscribe
            </SubscribeButton>
          </Form>
        </Box>
      </Main>
    </Box>
  );
}

const Main = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2.5),
}));

const Heading = styled("span")(({ theme }) => ({
  color: "#fff",
  fontWeight: "700",
  marginBottom: theme.spacing(2),
  fontFamily: "Orbitron, Poppins, sans-serif",
}));

const CallToActionButton = styled(Button)(({ theme }) => ({
  position: "relative",
  display: "flex",
  backgroundColor: "#218AFF",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  fontFamily: "Poppins, sans-serif",
  textTransform: "capitalize",
  fontWeight: 700,
  fontSize: theme.spacing(2),

  ["&>span"]: {
    position: "absolute",
    top: "50%",
    left: theme.spacing(2),
    transform: "translateY(-50%)",
  },
}));

const Form = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: theme.spacing(1),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const InputBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  position: "relative",
  alignItems: "center",
}));

const StyledInput = styled("input")(({ theme, error }) => ({
  color: "#fff",
  backgroundColor: "transparent",
  border: `1px solid ${error ? "red" : "#fff"}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0, 2),
  width: "100%",
  height: "48px",
  fontFamily: "Poppins, sans-serif",
}));

const ClearButton = styled("button")(({ theme }) => ({
  color: "#fff",
  fontSize: theme.spacing(4),
  position: "absolute",
  right: theme.spacing(1),
  background: "transparent",
  border: "none",
  top: "50%",
  cursor: "pointer",
  transform: "translateY(-40%)",
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  fontWeight: 700,
  color: "#fff",
  backgroundColor: "#218AFF",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0, 2),
  height: theme.spacing(6),
  minWidth: theme.spacing(14.3),
  maxWidth: theme.spacing(15),
  marginTop: theme.spacing(0.9),
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
}));
