import falcon from '../assests/millennium-falconx400.jpg';
import chewbacca from '../assests/Chewbaccax400.jpg';

const initialState = {
  categories: [
    {
      title: 'starships',
      imageSrc: falcon,
      items: [],
      filter: {
        title: 'Filter by length',
        keyName: 'length',
        bands: [
          { min: 0, max: 10 },
          { min: 11, max: 30 },
          { min: 31, max: 100 },
          { min: 101, max: Infinity, label: '> 100' },
        ],
      },
    },
    {
      title: 'species',
      imageSrc: chewbacca,
      items: [],
      filter: {
        title: 'Filter by height',
        keyName: 'average_height',
        bands: [
          { min: 0, max: 100 },
          { min: 101, max: 200 },
          { min: 201, max: 300 },
        ],
      },
    },
  ],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-ITEMS':
      return {
        ...state,
        categories: [
          ...state.categories.map((cat) => {
            if (cat.title === action.catTitle) {
              return { ...cat, items: [...cat.items, ...action.payload] };
            }
            return { ...cat };
          }),
        ],
      };
    default:
      return state;
  }
};

export { rootReducer };
