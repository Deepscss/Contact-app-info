import React from "react";

class AddContact extends React.Component {
    state = {
        name : "",
        email: "",
    }
  
    add = (e) => {
       e.preventDefault();
       if(this.state.name=== '' || this.state.email === '' ){
        alert(' Please enter contact info ');
        return;
       } 
       this.props.AddContactHandler(this.state);
       this.setState({ name: "", email: "" });
    //    console.log(this.state);

    }

    render (){
       return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form action="" className="ui form" onSubmit={ this.add }>
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" name="Name" placeholder="Enter Name"
                         value= {this.state.name }
                         onChange = {(e) => this.setState({name: e.target.value }) }
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input type="email" name="Email" placeholder="Enter Email"
                         value= {this.state.email }
                         onChange = {(e) => this.setState({email: e.target.value }) }
                        />
                    </div>
                    <button className="ui button blue">
                        Add Contact
                    </button>
                </form>
            </div>
       );
    }
}

export default AddContact;