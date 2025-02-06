import {useState} from 'react';

export const ExperienceItem = ({ title, content, image }) => {

    const [name, setName] = useState(props);

    return (
        <div class="">
            <img src=image />
            <h4>{props}</h4>
            <span>Item</span>
        </div>
    );
}