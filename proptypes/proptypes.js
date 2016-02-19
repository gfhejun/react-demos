var Title = React.createClass({
    //title is required and should be a string.
    //mobile is required and should be a number.
    propTypes :{
        title: React.PropTypes.string.isRequired,
        mobile: React.PropTypes.number.isRequired
    },

    render: function () {
        return <h1>{this.props.title}</h1>
    }
});

var inputTitle = 123;
var inputMobile = 'mobile';

//console will output error message.
ReactDOM.render(
    <Title title={inputTitle} mobile={inputMobile}/>,
    document.getElementById('content')
);