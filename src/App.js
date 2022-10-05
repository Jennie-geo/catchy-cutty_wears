import Homepage from './Routes/Home/homepage';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation/navigation.component';
import Signin from './Routes/Signin/signin-component';
const Login = () => {
  return <h1>I am Logged in</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path='login' element={<Login />} />
        <Route path='sign-in' element={<Signin />} />
      </Route>
    </Routes>
  )
}

export default App;
