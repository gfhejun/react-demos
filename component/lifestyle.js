//The lifestyle of component includes 3 states:
//1.Mounting:already insert the real DOM;
//2.Updating:restart to render;
//3.Unmounting:already remove the real DOM;

var Hello = React.createClass({
    getInitialState: function () {
        return{
            opacity:1.0
        };
    },

    //Function aaaWillbbb called before entering the state of bbb.
    //Function aaaDidbbb called after entering the state of bbb.
    componentDidMount: function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= 0.05;
            if (opacity < 0.1){
                opacity = 1.0;
            }
            this.setState({
                opacity:opacity
            });
        }.bind(this),100);
    },

    render: function () {
        return(
            <div style={{opacity:this.state.opacity}}>
                {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="onlyforhebe"/>,
    document.getElementById('content')
);