import React, { useState } from 'react';
import '../CSS/Header.css'; // Import the CSS file for styles
import cardImage1 from '../Images/cotton fancy saree1.png';
import cardImage2 from '../Images/Kanchipuram pur silk.png';
import cardImage3 from '../Images/cotton fancy saree5.png';

const CardPage = () => {
    const [addedCardId, setAddedCardId] = useState(null);
    const [viewCard, setViewCard] = useState(null);
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleAddCard = (id) => {
        setAddedCardId(id);
        setTimeout(() => {
            setAddedCardId(null); // Reset after 3 seconds
        }, 3000);
    };

    const handleViewCard = (details) => {
        setViewCard(details);
    };

    const sarees = [
        {
            id: 1,
            image: cardImage1,
            description: "Beautiful silk saree with intricate designs.",
            price: "$120",
            fabric: "Silk",
            color: "Red",
        },
        {
            id: 2,
            image: cardImage2,
            description: "Elegant cotton saree.",
            price: "$120",
            fabric: "Cotton",
            color: "Blue",
        },
        {
            id: 3,
            image: cardImage3,
            description: "Fancy cotton saree.",
            price: "$950",
            fabric: "Cotton",
            color: "Green",
        },
    ];

    return (
        <div className="card-page">
            {viewCard && (
                <div className="side-details">
                    <h3>Saree Details</h3>
                    <p>Fabric: {viewCard.fabric}</p>
                    <p>Color: {viewCard.color}</p>
                    <p>Price: {viewCard.price}</p>
                </div>
            )}

<div className="images-container">
    {sarees.map((saree) => (
        <div 
            key={saree.id} 
            className="imagebackground"
            onMouseEnter={() => setHoveredImage(saree.id)} 
            onMouseLeave={() => setHoveredImage(null)}
        >
            <img src={saree.image} alt="Saree" />
            <div className="content">
                <h2>Available Sarees</h2>
                <p>Description: {saree.description}</p>
                <p>Price: {saree.price}</p>
                {hoveredImage === saree.id && (
                    <div className="button-container">
                        <button onClick={() => handleAddCard(saree.id)} className="add-card-button">
                            Add Card
                        </button>
                        <button onClick={() => handleViewCard(saree)} className="view-card-button">
                            View Card
                        </button>
                    </div>
                )}
                {addedCardId === saree.id && (
                    <p className="message">Card has been added!</p>
                )}
            </div>
        </div>
    ))}
</div>
        </div>
    );
};

export default CardPage;
