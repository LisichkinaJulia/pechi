import './TermCard.css'

export const TermCard = ({ title, description }) => {
    return (
        <div>
            <div className="test">  {title} </div>
            {description && (<div className="desc">  {description} </div>)}

        </div>
    );
};