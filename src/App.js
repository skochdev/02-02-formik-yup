import './App.css';
import { Box } from 'components/Box';
import { LoginForm } from './components/LoginForm/LoginForm';

function App() {
  return (
    <Box as="main" bg="white" px={4} py={4}>
      <LoginForm />
    </Box>
  );
}

export default App;
