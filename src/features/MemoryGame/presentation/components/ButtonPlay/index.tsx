export const ButtonAction = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button className="btn-play" onClick={onClick}>
      {text}
    </button>
  );
};
