import '../App.css';

export const ExperienceItem = ({ title, content, image }) => {

    return (
        <div class="item-exp">
            <img class="image-exp" src={image} alt={title}/>
            <div class="content-exp">
                <h4>{title}</h4>
                <span>{content}</span>
            </div>
        </div>
    );
}