import { useState } from "react";
import "./AddEntity.css"; 

const AddEntity = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [entities, setEntities] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntity = { name, description };

        setEntities([...entities, newEntity]); 
        
        setName(""); 
        setDescription(""); 
    };


    return (
        <div className="add-entity-container">
            <form className="add-entity-form" onSubmit={handleSubmit}>
                <h2>Add New Entity</h2>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className="input-field"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button className="submit-button" type="submit">Add Entity</button>
            </form>

            <div className="entity-list">
                <h3>Entities List</h3>
                <ul>
                    {entities.map((entity, index) => (
                        <li className="entity-item" key={index}>
                            {entity.name} - {entity.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddEntity;
