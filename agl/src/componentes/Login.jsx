import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, {useState} from "react";
import Axios from 'axios';
import Swal from 'sweetalert2';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const [cedula,setCedula]=useState('')
  const [contrasena,setContrasena]=useState('')

  const login = async (e)=>{
    e.preventDefault();
    const usuario = {cedula,contrasena}
    const respuesta =await Axios.post('/conductor/login', usuario)
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje
    if(mensaje!=='Bienvenido'){
      
      Swal.fire({
        icon:'error',
        tittle:mensaje,
        showConfirmButton:false,
        timer:1500
      })
      }
  
      else{
        const token = respuesta.data.token
        const nombre = respuesta.data.nombre
        const id_usuario = respuesta.data.id

        sessionStorage.setItem('token', token)
        sessionStorage.setItem('nombre', nombre)
        sessionStorage.setItem('id_usuario', id_usuario)
        Swal.fire({
          icon:'success',
          tittle:mensaje,
          showConfirmButton:false,
          timer:1500
        })
        window.location.href = '/index'
      }
  }
  

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="cedula"
              label="Cedula"
              name="cedula"
             
              autoFocus
              onChange={(e) => setCedula(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setContrasena(e.target.value)}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}