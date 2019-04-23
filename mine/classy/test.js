const cars = [{mazda:     [{model:'miata'   ,price: 25000 },
        {model:'3'        ,price:21000  },
        {model:'6'        ,price:23000  },
        {model:'cx-5'     ,price:24000  },
        {model:'cx-3'     ,price:20000  },
        {model:'cx-9'     ,price:32000  } ] },

    {subaru:  [{model:'impreza'   ,price:18595},
            {model:'outback'   ,price:26345},
            {model:'forester'  ,price:24295},
            {model:'legacy'    ,price:22545},
            {model:'brz'       ,price:25795},
            {model:'crosstrek' ,price:21895},
            {model:'ascent'    ,price:31995}]},

    {ford:    [{model:'focus'      ,price:17950},
            {model:'mustang'    ,price:26395},
            {model:'explorer'   ,price:32365},
            {model:'fiesta'     ,price:14260},
            {model:'f150'       ,price:28155},
            {model:'taurus'     ,price:27800},
            {model:'fusion'     ,price:22840}]},

    {dodge:   [{model:'viper'      ,price:90000},
            {model:'dart'       ,price:15000},
            {model:'charger'    ,price:28995},
            {model:'challenger' ,price:27295},
            {model:'durango'    ,price:29995},
            {model:'caravan'    ,price:26250},
            {model:'ram'        ,price:27395}]},

    {toyota:  [{model:'86'         ,price:26505},
            {model:'prius'      ,price:23770},
            {model:'corolla'    ,price:19500},
            {model:'avalon'     ,price:35550},
            {model:'yaris'      ,price:15450},
            {model:'camry'      ,price:23945}]}]

const newData =  (function flatten(list) {
    const newList = list.map(item => {
        const key = Object.keys(item)[0];
        return item[key].map(item2 => {
            return {...item2, make: key};
        });
    }).flat();
    console.log(JSON.stringify(newList));
    return newList;
})(cars);
console.log('new data', newData);
const filteredItem = cars.filter((items) => {
    console.log('items', items);
    return items.subaru
})
const specificItem = filteredItem.filter((sItems) => {
    console.log('s', sItems)
    return sItems.price
})
console.log(specificItem)
console.log('filtered Item', filteredItem)
//trying to log the specific price of a specific car and each price of each car in its 'make'
//console.log(cars)
