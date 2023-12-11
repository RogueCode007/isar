import { apiRoutes } from "./core/routes/apiRoutes";
import { useFetch } from "./core/hooks/useFetch";
import { Link } from "react-router-dom";

export default function AssignmentA() {
  const { data, isLoading, isError, refetch } = useFetch(
    apiRoutes.spectrumStatus
  );

  const handleButtonClick = () => {
    refetch();
  };

  return (
    <div className="h-full w-full bg-black pt-12 px-4">
      {isLoading ? (
        <p className="text-white text-center text-lg">Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : (
        <div className="bg-white rounded-lg p-3 md:max-w-[400px] md:mx-auto">
          <button
            onClick={handleButtonClick}
            className="mb-4 block mx-auto bg-teal-500 p-2 rounded-lg"
          >
            Refresh Data
          </button>
          <p>Velocity: {data.velocity}</p>
          <p>Altitude: {data.altitude}</p>
          <p>Temperature: {data.temperature}</p>
          <p>IsAcending: {data.isAscending ? "true" : "false"}</p>
          <p>Message: {data.statusMessage}</p>

          <div className="mt-4 flex justify-between">
            <Link
              to={`assignmentB`}
              className="mt-4 block bg-teal-500 p-2 rounded-lg"
            >
              Go to Assignment B
            </Link>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
