import margerita from '../assets/images/margerita.jpg';
import capriciosa from '../assets/images/capriciosa.jpg';
import peperoni from '../assets/images/peperoni.jpg';

const pizzaData = [
    {
        label:"Margerita", 
        id:1,
        value:'margerita',
        ingredients: [
            "chees, ",
            "tomato sauce, ",
            "basil, "
        ],
        image:margerita,
    },
    {
        label:"Capriciosa", 
        id:2,
        value:'capriciosa',
        ingredients: [
            "chees, ",
            "ham, ",
            "muschroms, ",
            "tomato souce, "
        ],
        image:capriciosa,
    },
    {
        label:"Peperoni", 
        id:3,
        value:'peperoni',
        ingredients: [
            "peperoni, ",
            "olive, ",
            "tomato souce, ",
        ],
        image:peperoni,
    },
]

export default pizzaData;