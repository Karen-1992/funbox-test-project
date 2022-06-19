import React, { useState } from "react";
import food from "../../api/food";
import CardItem from "../cardItem";
import foodSize from "../../api/foodSize";

const Main = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleSelect = (id) => {
        const newArr = [...selectedItems];
        const itemIndex = newArr.findIndex(i => i === id);
        if (itemIndex === -1) {
            newArr.push(id);
        } else {
            newArr.splice(itemIndex, 1);
        }
        setSelectedItems(newArr);
    };
    return (
        <div className="container">
            <h1 className="title">Ты сегодня покормил кота?</h1>
            <section>
                {food.map(f => (
                    <CardItem
                        key={f.id}
                        item={f}
                        foodSize={foodSize}
                        onSelect={handleSelect}
                        selectedItems={selectedItems}
                    />
                ))}
            </section>
        </div>
    );
};

export default Main;
