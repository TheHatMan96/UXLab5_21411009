import React, { Component } from 'react';

class Students extends Component {
    constructor(props){
        super(props);
        this.listItem = this.listItem.bind(this);
        this.state = {
            studentlist:[
                {name:'Daniel ',LastName:'Medina ',Ncuenta:'21411009 '},
                {name:'Alejandro ',LastName:'Valladares ',Ncuenta:'213232121 '},
                {name:'Mario ',LastName:'Flores ',Ncuenta:'21332132 '}
            ]
        };
    }

    listItem(item){return(<li key ={item.Ncuenta}>{item.Ncuenta}{item.name}{item.LastName} </li>);}

  render() {
    return (
      <div>
        
          <li>{this.state.studentlist.map(this.listItem)}</li>
        
      </div>
    );
  }
}

export default Students;
