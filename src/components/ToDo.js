import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: []
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: ""
    });
  }


  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(val, index) {
              return (
                <tr key={"item-" + index}>
                    <td>{index+1}</td>
                  <td>
                    {val}
                  </td>
                  <td>
                    <button onClick={context.handleItemDeleted.bind(context, index)}>Delete</button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
      <div>
          <h1 style={{color:"white",backgroundColor:"salmon"}}>ToDo list</h1>
                <h2>Add list</h2>
        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
        <br/>
        <button onClick={this.handleClick.bind(this)}>Add Item</button>
        <table border='1' style={{width:"100%"}}>
          <thead>
            <tr> 
            <th>
                Sr.No.
              </th> 
              <th>
                Items
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
      </div>
    );
  }
}
export default ToDo;