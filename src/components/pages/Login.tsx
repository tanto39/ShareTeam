import React, { useState, FC, FormEvent } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  ThemeProvider,
  CssBaseline,
  Box,
  Avatar,
  FormControlLabel,
  Checkbox,
  createTheme,
} from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { setAuth } from "../../store/reducers/ActionCreators";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoginError(false);
    setPasswordError(false);

    if (login == "") {
      setLoginError(true);
      return;
    }
    if (password == "") {
      setPasswordError(true);
      return;
    }

    dispatch(
      setAuth({
        isAuth: true,
        userName: "Гутнев Андрей",
        team: "Команда 1",
      })
    );
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={(e) => setLogin(e.target.value)}
            value={login}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
              <Link href="/signup" variant="body2">
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
