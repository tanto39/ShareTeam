import React, { useState, FC, FormEvent, ChangeEvent, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  ThemeProvider,
  Box,
  Avatar,
  FormControlLabel,
  Checkbox,
  createTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setAuth } from "../../store/reducers/ActionCreators";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ILogin, ILoginResult } from "../../models/Ilogin";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../../services/userApi";
import Loader from "../Loader/Loader";
import CardMessage from "../CardMessage/CardMessage";
import { ICustomError } from "../../models/IError";

const Login: FC = () => {
  const [userData, setUserData] = useState<ILogin>({} as ILogin);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [error, setError] = useState<ICustomError>();
  const [userDataRes, setUserDataRes] = useState<ILoginResult>(
    {} as ILoginResult
  );
  const navigate = useNavigate();

  const changeInput = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setUserData({ ...userData, [key]: event.target.value });
  };

  const dispatch = useAppDispatch();

  const [signIn, { isLoading: isLoadingSign, error: errorSign }] =
    userAPI.useSignInMutation();

  const {
    data: dataUser,
    error: errorUser,
    isLoading: isLoadingUser,
  } = userAPI.useFetchUserQuery(userDataRes.id, {
    skip: !userDataRes.id,
  });

  if (dataUser) {
    dispatch(
      setAuth({
        isAuth: true,
        accessToken: userDataRes.accessToken,
        user: dataUser,
      })
    );
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError(false);
    setPasswordError(false);

    if (userData.username == "") {
      setLoginError(true);
      return;
    }
    if (userData.password == "") {
      setPasswordError(true);
      return;
    }

    try {
      const signUpResult = await signIn(userData).unwrap();
      signUpResult && setUserDataRes(signUpResult);
    } catch (e: any) {
      setError(e as ICustomError);
    }
  };

  useEffect(() => {
    if (errorSign) {
      setError(errorSign as ICustomError);
    }
    if (errorUser) {
      setError(errorUser as ICustomError);
    }
  }, [errorSign, errorUser]);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {(isLoadingSign || isLoadingUser) && <Loader />}
        {error && (
          <CardMessage severity="error" error={error as ICustomError} />
        )}
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
            Вход
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={(event) => changeInput(event, "username")}
              value={userData.username}
              error={loginError}
              margin="normal"
              required
              fullWidth
              id="login"
              label="Логин"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              onChange={(event) => changeInput(event, "password")}
              value={userData.password}
              error={passwordError}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Забыли пароль?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  onClick={() => navigate("/signup")}
                  variant="body2"
                >
                  Зарегистрироваться
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
