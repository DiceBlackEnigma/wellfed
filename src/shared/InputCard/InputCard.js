import classes from './InputCard.module.css';

export const InputCard = props => {
  return (
    <div className={`d-flex ${classes.InputCardGroup}`}>
      <div className={`d-flex align-items-center justify-content-center ${classes.imgWrapper}`}>
        <img src={props.img} alt={props.alt}/>
      </div>
      <div className={`d-flex flex-column flex-grow-1 ${classes.InputCardContent}`}>
        <span className={`text--primary input-card-title`}>{props.title}</span>
        <span className={`text--primary bold-font font-size-2`}>{props.value}</span>
      </div>
    </div>
  );
};
