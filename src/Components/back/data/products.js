import image1 from '../images/products/juoduju-serbentu-ir-metos.jpg';
import image2 from '../images/products/kompoto.jpg';
import image3 from '../images/products/obuoliu.jpg';
import image4 from '../images/products/obuoliu-aroniju.jpg';

const products = {
    productItems: [
        {
            id: '1',
            title: 'Juodųjų serbentų ir mėtos',
            image: image1,
            description: 'Naminis probiotinis limonadas su naturalia daržo mėta ir juodųjų serbentų sultimis. Gyvas, todėl sveikas kūnui bei mintims. Lėtos fermentacijos, plataus skonio, iš vietinių ingredientų. Be laktozės ir glitimo, be kofeino ir saldiklių. Tinka veganams.',
            price: parseFloat('3.5').toFixed(2),
        },
        {
            id: '2',
            title: 'Kompoto',
            image: image2,
            description: 'Naminis probiotinis limonadas su naturalia daržo mėta ir juodųjų serbentų sultimis. Gyvas, todėl sveikas kūnui bei mintims. Lėtos fermentacijos, plataus skonio, iš vietinių ingredientų. Be laktozės ir glitimo, be kofeino ir saldiklių. Tinka veganams.',
            price: parseFloat('3.5').toFixed(2),
        },
        {
            id: '3',
            title: 'Obuolių',
            image: image3,
            description: 'Naminis probiotinis limonadas su naturalia daržo mėta ir juodųjų serbentų sultimis. Gyvas, todėl sveikas kūnui bei mintims. Lėtos fermentacijos, plataus skonio, iš vietinių ingredientų. Be laktozės ir glitimo, be kofeino ir saldiklių. Tinka veganams.',
            price: parseFloat('3.5').toFixed(2),
        },
        {
            id: '4',
            title: 'Obuolių - aronijų',
            image: image4,
            description: 'Naminis probiotinis limonadas su naturalia daržo mėta ir juodųjų serbentų sultimis. Gyvas, todėl sveikas kūnui bei mintims. Lėtos fermentacijos, plataus skonio, iš vietinių ingredientų. Be laktozės ir glitimo, be kofeino ir saldiklių. Tinka veganams.',
            price: parseFloat('3.5').toFixed(2),
        },
    ]
}

export default products;