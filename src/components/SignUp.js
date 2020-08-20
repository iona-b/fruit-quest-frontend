import React from 'react';

class SignUp extends React.Component {

    state = {
        username:'',
        password:''
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
          [name]: value
        })
    }
      

    render() {
        return (
            <div>
                <div className="login-welcome">
                    <img src={require("../welcome-to.png")} alt='' id="welcome-to"/>
                </div>
                <div className="login-signup-form-div">
                    <form className="signup-form" onSubmit={(event) => this.props.handleSignUp(event, this.state)}>
                        <input type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.handleChange} className="input-text"/>
                        <br/>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} className="input-text"/>
                        <br/>
                        <input type="submit" name="submit" value="Sign Up" className="submit"/>
                    </form>
                </div>
            </div>
        )
    }

}

export default SignUp;