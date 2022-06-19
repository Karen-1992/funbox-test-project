const foodSize = [
    {
        id: "min",
        weight: {
            value: 0.5,
            symbol: "кг"
        },
        quantity: {
            value: 10,
            portion: "порций"
        },
        bonus: {
            value: 0,
            text: "мышь в подарок"
        }
    },
    {
        id: "medium",
        weight: {
            value: 2,
            symbol: "кг"
        },
        quantity: {
            value: 40,
            portion: "порций"
        },
        bonus: {
            value: 2,
            text: "мыши в подарок"
        }
    },
    {
        id: "max",
        weight: {
            value: 5,
            symbol: "кг"
        },
        quantity: {
            value: 100,
            portion: "порций"
        },
        bonus: {
            value: 5,
            text: "мышей в подарок",
            status: "заказчик доволен"
        }
    }
];

export default foodSize;
