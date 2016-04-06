//组件名字必须以大写字母开头，否则报错
var InputState = React.createClass({

    //当组件初始化时会调用此函数，函数必须有一个返回值
    getInitialState: function() {
        return {
            enable: false
        };
    },

    //利用此函数来改变组件的状态，状态改变后，会自动执行render方法
    handleClick: function(event) {
        this.setState({
            enable: !this.state.enable
        });
    },

    render: function() {
        //利用this.props.xxx获取属性值
        //利用this.state.xxx获取属性状态
        return (
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