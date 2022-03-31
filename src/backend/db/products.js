import { v4 as uuid } from "uuid";

import { 
  iImg1, iImg2, iImg3, 
  iImg4, iImg5, iImg6, 
  iImg7, iImg8, iImg9
} from '../../assets'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    product1:{
        id:uuid(),
        img:iImg1,
        prodTitle:'Way Kambas Maple',
        prodRating:'4.1',
        prodBought:'(49)',
        prodPrePrice:'Rs 36,000',
        prodDiscPrice:'Rs 25,000',
        prodDisc:'16% off'
    },
    product2:{
        id:uuid(),
        img:iImg1,
        prodTitle:'Way Kambas Maple',
        prodRating:'4.1',
        prodBought:'(49)',
        prodPrePrice:'Rs 36,000',
        prodDiscPrice:'Rs 25,000',
        prodDisc:'16% off'
    },
    product3:{
        id:uuid(),
        img:iImg1,
        prodTitle:'Way Kambas Maple',
        prodRating:'4.1',
        prodBought:'(49)',
        prodPrePrice:'Rs 36,000',
        prodDiscPrice:'Rs 25,000',
        prodDisc:'16% off'
    },
    product4:{
        id:uuid(),
        img:iImg1,
        prodTitle:'Way Kambas Maple',
        prodRating:'4.1',
        prodBought:'(49)',
        prodPrePrice:'Rs 36,000',
        prodDiscPrice:'Rs 25,000',
        prodDisc:'16% off'
    },
    
}
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   _id: uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   _id: uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },
];

export default products

