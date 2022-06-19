import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import catImage from "../img/cat_image.jpg";

const CardItem = ({ item, foodSize, onSelect, selectedItems }) => {
    const isSelectedItem = selectedItems.find(i => i === item.id);
    const [isSelectedHover, setSelectedHover] = useState(false);
    const [isDefaultHover, setDefaultHover] = useState(false);
    function getSizeData(size) {
        return foodSize.find(i => i.id === size);
    }
    const { bonus, quantity, weight } = getSizeData(item.size);
    const classes = !item.inStock
        ? "disabled"
        : isSelectedHover
            ? "selected-hover"
            : isSelectedItem
                ? "selected"
                : isDefaultHover
                    ? "default-hover"
                    : "default";

    const handleMouseLeave = () => {
        setDefaultHover(false);
        if (isSelectedItem) {
            setSelectedHover(false);
        }
    };
    const handleMouseEnter = () => {
        setDefaultHover(true);
        if (isSelectedItem) {
            setSelectedHover(true);
        }
    };
    useEffect(() => {
        setSelectedHover(false);
    }, [isSelectedItem]);
    const description = !item.inStock
        ? (
            <p className="card__item__description out-of-stock">Печалька, {item.taste} закончился</p>
        ) : !isSelectedItem
            ? (
                <p className="card__item__description">
                    Чего сидишь? Порадуй котэ,
                    <span
                        className="card__item__buy"
                        onClick={() => onSelect(item.id)}> купи.
                    </span>
                </p>
            )
            : (
                <p className="card__item__description">
                    {item.description}
                </p>
            );
    return (
        <div key={item.id} className="card__item__container">
            <div className="card__item__back" >
                <div
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={() => (item.inStock && onSelect(item.id))}
                    className={"card__item " + classes}
                >
                    <div className="card__item__text">
                        {!isSelectedHover ? (
                            <p className="card__item__text__title">Сказочное заморское явство</p>
                        ) : (
                            <p className="selected-hover__text">Котэ не одобряет?</p>
                        )}
                        <h1>Нямушка</h1>
                        <h3>{item.taste}</h3>
                        <p className="card__item__bonus">
                            <span className="card__item__bonus-number">
                                {quantity.value}
                            </span>
                            <span>{quantity.portion}</span>
                        </p>
                        <p className="card__item__bonus">
                            <span className="card__item__bonus-number">
                                {bonus.value > 0 && bonus.value}
                            </span>
                            <span>{bonus.text}</span>
                        </p>
                        <p className="card__item__bonus">
                            {bonus.status && bonus.status}
                        </p>
                    </div>
                    <div className="card__item__image">
                        <img src={catImage} alt="card__image" />
                    </div>
                    <div className={"card__item__weight " + "back-" + classes}>
                        <p className="card__item__weight__value">{weight.value}</p>
                        <p className="card__item__weight__symbol">{weight.symbol}</p>
                    </div>
                </div>
            </div>
            {description}
        </div>
    );
};

CardItem.propTypes = {
    item: PropTypes.object,
    foodSize: PropTypes.array,
    onSelect: PropTypes.func,
    selectedItems: PropTypes.array
};

export default CardItem;
