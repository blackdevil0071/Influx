import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Accordin.css';

const Accordin = () => {
    const [data, setData] = useState([]);
    const [openId, setOpenId] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching the data:', error));
    }, []);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="accordion">
            <h1>Frequently asked questions</h1>
            {data.map((item) => (
                <div key={item.id} className="accordion-item">
                    <div className="accordion-title" onClick={() => toggleAccordion(item.id)}>
                        {openId === item.id ? (
                            <FaChevronUp className="accordion-icon" />
                        ) : (
                            <FaChevronDown className="accordion-icon" />
                        )}
                        <h4>{item.title}</h4>
                    </div>
                    {openId === item.id && (
                        <div className="accordion-content">
                            <h5>{item.content}</h5>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordin;
