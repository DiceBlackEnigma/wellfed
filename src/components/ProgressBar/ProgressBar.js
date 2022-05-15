import classes from './ProgressBar.module.css';

export const ProgressBar = props => {
  const radius = (+props.height / 2) - (+props.stroke * 2);
  const circumference = radius * 2 * Math.PI;

  return (
    <svg
      className="progress-ring"
      height={props.height}
      width={props.height}
    >
      {/*<defs>*/}
      {/*  <clipPath id="myCircle">*/}
      {/*    <circle*/}
      {/*      fill="#FFF"*/}
      {/*      r="100"*/}
      {/*      cx="100"*/}
      {/*      cy="90"*/}
      {/*    />*/}
      {/*  </clipPath>*/}
      {/*</defs>*/}
      {/*<image width="100" height="100" href={props.image} clip-path="url(#myCircle)" />*/}
      <circle
        style={{'stroke-dasharray': `${circumference}px ${circumference}px`, 'stroke-dashoffset': props.progressState ? `${circumference * 0.48}px`: `${circumference}px`}}
        className={`${classes['progress-ring__circle']} ${props.progressState ? classes.active : ''}`}
        stroke-width={props.stroke}
        stroke-linecap="round"
        stroke={props.color}
        fill="transparent"
        r={radius}
        cx={props.widthFromCenter}
        cy={props.widthFromCenter}
      />

    </svg>
  );
};
