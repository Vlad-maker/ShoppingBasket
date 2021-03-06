import * as constants from "../constants/products";

const initialState = {
    items: [
        { id: "№1", name: "Чарльз Петцольд - Код ", price: 20, count: 0 },
        { id: "№2", name: "Марейн Хавербеке - Выразительный JavaScript ", price: 25, count: 0 },
        { id: "№3", name: "Роберт Мартин - Чистый код ", price: 12, count: 0 },
        { id: "№4", name: "Джон Даккет - JavaScript и JQuery ", price: 15, count: 0 },
        { id: "№5", name: "Барбара Оакли - Думай как математик ", price: 10, count: 0 },
    ],
};

export default function productsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case constants.ADD_PRODUCT:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            count: item.count + 1,
                        };
                    }
                    return item;
                }),
            };
        
        case constants.REMOVE_PRODUCT:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            count: item.count - 1,
                        };
                    }
                    return item;
                }),
            };
            
        default:
            return state;
    }
}
