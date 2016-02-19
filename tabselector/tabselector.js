var race = [
    {name: 'ORC', value: 'ORC'},
    {name: 'UD', value: 'UD'},
    {name: 'HUM', value: 'HUM'},
    {name: 'NE', value: 'NE'}
];

var TabSelector = React.createClass({
    getInitialState: function () {
        return {selected:this.props.selected}
    },

    handleOnClick: function (event) {
        this.setState({selected: event.target.getAttribute('data-value')})
    },

    render: function () {
        var tabs = this.props.data.map(function (item) {
            var selected = item.value == this.state.selected ? 'selected': '';
            return <li key={item.value}
                    data-value={item.value}
                    className={selected}
                    onClick={this.handleOnClick}>
                    {item.name}
                </li>;
        },this);

        return <div className="tab-selector">
            <label>{this.props.label}</label>
            <ul>
                {tabs}
            </ul>
        </div>
    }
});

ReactDOM.render(
    <TabSelector label='Race' data={race} selected=''/>,
    document.getElementById('content')
);