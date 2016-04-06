var heroes = [{
    key: 'BM',
    name: 'Blade Master',
    race: 'ORC'
}, {
    key: 'DH',
    name: 'Demon Hunter',
    race: 'NE'
}, {
    key: 'MK',
    name: 'Mountain King',
    race: 'HUM'
}, {
    key: 'DK',
    name: 'Dead Knight',
    race: 'UD'
}];

ReactDOM.render(
    <div>
        {
            heroes.map(function(hero){
                //遍历时，每一个子对象都需要有一个唯一的key，否则控制台会有警告信息
                return <div key={hero.key}>I am {hero.name}. I come from {hero.race}!</div>
            })
        }
    </div>,
    document.getElementById('content')
);