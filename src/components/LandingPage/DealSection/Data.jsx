import { featImg1, featImg2 } from '../../../assets'
import { dImg1, dImg2, dImg3, dImg4 } from '../../../assets'

const Data = [{
    'prodClass': 'Luxurious',
    'prodGenre': 'Eyewear',
    'prodTagLine': 'See the beauty of exotic world with the luxurious glasses',
    'prodAction': 'Discover Now',
    'prodImg': featImg1
},
{
    'prodClass': 'Comfortable',
    'prodGenre': 'Watches',
    'prodTagLine': 'Feels the balancing function and beauty in our wooden watches',
    'prodAction': 'Discover Now',
    'prodImg': featImg2
}]

const DealsData = [{
    'key': 1,
    'prodImg': dImg1,
    'prodTitle': 'Singo Maple',
    'prodDisc': '20% off',
    'prodPrePrice': '15,000',
    'prodDiscPrice': '12,000',
    'wishlisted' : false
},
{
    'key': 2,
    'prodImg': dImg2,
    'prodTitle': 'Singo Ebony',
    'prodDisc': '22% off',
    'prodPrePrice': '25,000',
    'prodDiscPrice': '22,000',
    'wishlisted' : false
},
{
    'key': 3,
    'prodImg': dImg3,
    'prodTitle': 'Rakai Ebony',
    'prodDisc': '15% off',
    'prodPrePrice': '19,500',
    'prodDiscPrice': '15,000',
    'wishlisted' : false
}
]

export { Data, DealsData } 