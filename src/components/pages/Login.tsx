import React, { useState, FC, FormEvent } from "react";
import { Container, CardContent, Card, TextField, Button, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { setAuth } from "../../store/reducers/ActionCreators";

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

    dispatch(setAuth(true))
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom>
          Войти
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Логин"
            onChange={(e) => setLogin(e.target.value)}
            required
            variant="outlined"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={login}
            error={loginError}
          />
          <TextField
            label="Пароль"
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            type="password"
            value={password}
            error={passwordError}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </form>
        </CardContent>
    </Card>
    </Container>
  );
};

export default Login;
