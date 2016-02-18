var heroes = [
    {key:'BM',name:'Blade Master',race:'ORC'},
    {key:'DH',name:'Demon Hunter',race:'NE'},
    {key:'MK',name:'Mountain King',race:'HUM'},
    {key:'DK',name:'Dead Knight',race:'UD'}
];

//React.render is deprecated.
//Now we can use ReactDOM.render instead.
ReactDOM.render(
    <div>
        {
            heroes.map(function(hero){
                //Each child in an array or iterator should have a unique "key" prop.
                return <div key={hero.key}>I am {hero.name}. I come from {hero.race}!</div>
            })
        }
    </div>,
    document.getElementById('content')
);