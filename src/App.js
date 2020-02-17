import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Graph from './components/Graph';
import SearchBar from "./components/SearchBar";
import ListMetrics from "./components/ListMetrics";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: "https://react.eogresources.com/graphql",
});

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});

const App = props => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <div>
            <Header />
            
            <div className='container'>
              <div className='mt-5 d-flex justify-content-center'>
                <SearchBar />
              </div>
              <div className='d-flex justify-content-center'>
                <ListMetrics />
              </div>
              <div className='mt-5 mb-5 d-flex justify-content-center'>
                <Graph />
              </div>
            </div>
          </div>

        </Provider>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default App;
