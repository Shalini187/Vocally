export let data = [
    {
        title: 'The Den Bengaluru',
        name: 'Hotel',
        coordinate: { latitude: 12.98, longitude: 77.73 },
        image: require('../assets/images/hotel.jpeg')
    },
    {
        title: 'Lakshmi Gold Paradise',
        name: 'Pub',
        coordinate: { latitude: 13.02, longitude: 77.60 },
        image: require('../assets/images/pub.webp')
    },
    {
        title: 'Cubbon Park',
        name: 'Park',
        coordinate: { latitude: 12.97, longitude: 77.59},
        image: require('../assets/images/park.jpeg')
    },
    {
        title: 'Ashoka Fast Food',
        name: 'Restaurant',
        coordinate: { latitude: 12.96, longitude: 77.55},
        image: require('../assets/images/restaurant.jpeg')
    }
];

export let themeGetter = (theme: string) => {
    let obj: any = {
        color: theme == 'dark' ? '#000' : '#fff',
        borderColor: theme == 'dark' ? '#fff' : '#000'
    };
    return obj;
}