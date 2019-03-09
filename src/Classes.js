import React, { Component } from 'react';

class Classes extends Component {
    constructor(props){
        super(props);
        this.listItem = this.listItem.bind(this);
        this.state = {
            classeslist:[
                {codigoClase:'PG30 ',nombre:'Ingles 1'},
                {codigoClase:'GZ10 ',nombre:'Fisica 3'}                
            ]
        };
    }

    listItem(item) { return (<li key ={item.codigoClase}>{item.codigoClase}{item.nombre}</li>);}

  render() {
    return (
      <div>
        
          <li>{this.state.classeslist.map(this.listItem)}</li>
        
      </div>
    );
  }
}

export default Classes;