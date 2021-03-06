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
      selected_content_id:2,
      subject:{title:"WEB", sub:"World Wide Web"},
      welcome:{title:"Welcome", desc:"Hello React"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is HyperText Markup Language"},
        {id:2, title:"CSS", desc:"CSS id for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }

  render(){

    var _title, _desc = null;

    if (this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode ==="read"){
      var i = 0;
      while( i < this.state.contents.length){
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id){
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i += 1;
      }
    }

    //console.log('render',this);

    return(
      <div className="App">
         <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
              alert('hihihi');
              this.setState({
                mode:'welcome'
              });
            }.bind(this)}
         ></Subject>
        <TOC 

          onChangePage={function(id){
            this.setState({
              mode:"read",
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <ul>
          <li><a href="/create">create</a></li>
          <li><a href="/update">update</a></li>
          
        </ul>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
