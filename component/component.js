
//The name of component must begin with a capital letter!
var InputState = React.createClass({

    //This function works when the component init.
    //It must have a return value such as NULL or a object.
    getInitialState: function () {
        return {enable:false};
    },

    //Use setState() to change the state of component.
    //this.render works automatically after changing the state of component.
    handleClick: function (event) {
        this.setState({enable:!this.state.enable});
    },

    render: function () {
        //1.use this.props.xxx to get the value of property
        //2.use this.state.xxx to get the state of component
        return(
            <div>
                <p>
                    My name is {this.props.name}.
                </p>
                <p>
                    <input type="text" disabled={this.state.enable}/>
                    <button onClick={this.handleClick}>Change State</button>
                </p>
            </div>
        );
    }
});

ReactDOM.render(
    <InputState name="onlyforhebe"/>,
    document.getElementById('content')
);