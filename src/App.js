// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header/Header';
// import Post from './components/Post/Post';
// import Stories from './components/Stories/Stories';
// import Posts from './components/Posts/Posts';

// function App() {
//   return (
    
      // <div>
      //   <Header />
      //   {/* <Stories /> */}
      //   <div>
      //     <Posts />
      //     {/* <Post /> */}
      //   </div>
      // </div>
      
//   );
// }

// export default App;


import React, {Component} from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Pusher from 'pusher-js';
import Router from './config/route';

import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Post from './components/Post/Post';
import CustomNavbar from "./components/CustomNavbar";

// const client = new ApolloClient({
//   uri: "http://localhost:3000/graphql"
// });


class App extends Component{
  // constructor(){
  //   super();
  //   // connect to pusher
  //   this.pusher = new Pusher("PUSHER_APP_KEY", {
  //     cluster: "eu",
  //     encrypted: true
  //   });
  // }

  // componentDidMount(){
  //   if ('actions' in Notification.prototype) {
  //     console.log('You can enjoy notification feature');
  //   } else {
  //     console.log('Sorry notifications are NOT supported on your browser');
  //   }
  // }
  render(){
    return (
      <div>
        {/* <Header/> */}
        <Router />
        {/* <CustomNavbar /> */}
        {/* <br/>
        <br/> */}
        {/* <br/> */}
        {/* <Post/> */}
      </div>
      // <div>
      //   <Header />
      //   <Stories />
      //   <div>
      //     {/* <Posts /> */}
      //     <Post />
      //   </div>
      // </div>
      // <ApolloProvider client={client}>
      //   <div className="App">
      //     <Header />
      //     <section className="App-main">
      //       {/* pass the pusher object to the posts component */}
      //       <Posts pusher={this.pusher} apollo_client={client}/>
      //     </section>
      //   </div>
      // </ApolloProvider>
    );
  }
}

export default App;