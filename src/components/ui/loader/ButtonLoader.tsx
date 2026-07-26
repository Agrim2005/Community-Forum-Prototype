import Spinner from "./Spinner";

const ButtonLoader = () => {
  return (
    <div className="inline-flex items-center gap-2">
      <Spinner />
      <span>Loading...</span>
    </div>
  );
};

export default ButtonLoader;