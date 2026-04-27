const ActorCard = ({id, name, profilePath}) => {
  return (
    <li key={id} className="transition-all duration-300 hover:scale-105">
      <img
        className="w-30 h-30 lg:w-35 lg:h-35 rounded-t-2xl"
        src={`https://bold-hall-9b8a.r1plcops.workers.dev/t/p/original${profilePath}`}
        alt="actor"
      />
      <p className="text-center text-[10px] lg:text-[14px]">{name}</p>
    </li>
  );
};
export default ActorCard;
