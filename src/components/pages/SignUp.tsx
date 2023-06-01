import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ISignUp } from "../../models/ISignUp";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../../services/userApi";
import Loader from "../Loader/Loader";
import CardMessage from "../CardMessage/CardMessage";
import { ICustomError } from "../../models/IError";

const SignUp: FC = () => {
  const [userData, setUserData] = useState<ISignUp>({} as ISignUp);
  const navigate = useNavigate();

  const changeInput = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setUserData({ ...userData, [key]: event.target.value });
  };

  const theme = createTheme();

  const [signUp, { isLoading: isLoading, error: error }] = userAPI.useSignUpMutation();

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signUpResult = await signUp(userData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {isLoading && <Loader />}
        {error && <CardMessage severity="error" message={error as ICustomError}/>}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Зарегистрироваться
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Имя"
                  autoFocus
                  value={userData.firstname}
                  onChange={(event) => changeInput(event, "firstname")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Фамилия"
                  name="lastName"
                  autoComplete="family-name"
                  value={userData.lastname}
                  onChange={(event) => changeInput(event, "lastname")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Электронная почта"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={(event) => changeInput(event, "email")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="Логин"
                  type="text"
                  id="username"
                  autoComplete="new-username"
                  value={userData.username}
                  onChange={(event) => changeInput(event, "username")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userData.password}
                  onChange={(event) => changeInput(event, "password")}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => navigate("/login")}
                >
                  Уже есть аккаунт? Войти.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
