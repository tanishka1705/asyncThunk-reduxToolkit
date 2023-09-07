
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Article from './components/Article';

function App() {
  return (
   <ChakraProvider>
    <Article></Article>
   </ChakraProvider>
  );
}

export default App;
