import { useSlider } from "../../../hooks/useSlider";
import { useResponsiveVisibleCount } from "../../../hooks/useResponsiveVisibleCount";
import NavigationButton from "./navigationButton/NavigationButton";
import ActorCard from "./actorCard/ActorCard";

const MovieDetrailsSliderSection = ({ cast }) => {
  const visibleCount = useResponsiveVisibleCount();
  const actors = cast.filter(
    (actor) => actor.known_for_department === "Acting",
  );
  const { visibleItems, next, previous, isPrevDisabled, isNextDisabled } =
    useSlider(actors, visibleCount);

  return (
    <div className="bg-white flex flex-col p-4">
      <h3 className="text-center text-3xl font-bold mb-4">Актерский состав</h3>
      <div className="w-full">
        <ul className="flex justify-center gap-4 transition-all duration-500 ease-in-out relative">
          <NavigationButton
            disabled={isPrevDisabled}
            onClick={previous}
            direction={"left"}
          />
          {visibleItems.map((actor) => (
            <ActorCard
              key={actor.id}
              id={actor.id}
              name={actor.name}
              profilePath={actor.profile_path}
            />
          ))}
          <NavigationButton
            disabled={isNextDisabled}
            onClick={next}
            direction={"right"}
          />
        </ul>
      </div>
    </div>
  );
};

export default MovieDetrailsSliderSection;
