//组件生命周期包含三个状态
//1.Mounting:已经插入真实DOM
//2.Updating:重新渲染
//3.Unmounting:已经删除真实DOM

var Hello = React.createClass({
    getInitialState: function() {
        return {
            opacity: 1.0
        };
    },

    //Function aaaWillbbb do it before bbb
    //Function aaaDidbbb do it after bbb.
    componentDidMount: function() {
        this.timer = setInterval(function() {
            var opacity = this.state.opacity;
            opacity -= 0.05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },

    render: function() {
        return (
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