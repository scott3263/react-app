//import logo from './logo.svg';
import React, {Component} from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:"welcome",
      subject:{title:"WEB", sub:"World Wide Web"},
      welcome:{title:"Welcome", desc:"Hello React!"},
      contents:[
        {id:1, title:"HTML", desc:"가나다"},
        {id:2, title:"CSS", desc:"라마바"},
        {id:3, title:"JavaScript", desc:"사아자"}
      ]
    }
  }

  render(){

    var _title, _desc = null;

    if (this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode ==="read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return(
      <div className="App">
        {/* { <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>} */}

        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            debugger;
          }}>{this.state.subject.title}</a></h1>
        </header>
                <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;