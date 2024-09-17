import AnimatedNumbers from "react-animated-numbers";

export default function AnimatedNum({ value, suffix, fontStyle }) {
  return (
    <div>
      <div style={{ display: "inline-flex", alignItems: "baseline" }}>
        <AnimatedNumbers
          transitions={(index) => ({
            type: "just",
            duration: index + 0.3,
          })}
          animateToNumber={parseInt(value, 10)}
          fontStyle={fontStyle}
        />
        <span style={{ ...fontStyle, marginLeft: 4 }}>{suffix}</span>
      </div>
    </div>
  );
}
