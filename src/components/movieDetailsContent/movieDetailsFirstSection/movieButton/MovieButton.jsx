const MovieButton = ({ onClick, children }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="cursor-pointer border bg-black text-white w-16 h-8 rounded"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default MovieButton;
