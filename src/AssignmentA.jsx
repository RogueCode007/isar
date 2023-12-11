import { apiRoutes } from "./core/routes/apiRoutes";
import { useFetch } from "./core/hooks/useFetch";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";

export default function AssignmentA() {
  const { data, isLoading, isError, refetch } = useFetch(
    apiRoutes.spectrumStatus
  );

  const handleButtonClick = () => {
    refetch();
  };

  return (
    <div className="h-full w-full bg-black pt-12 px-4">
      {isError ? (
        <p>Error fetching data</p>
      ) : (
        <div className="bg-white rounded-lg p-3 md:max-w-[400px] md:mx-auto">
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>🌡️ Temperature: </span>
            </p>
            {isLoading ? (
              <Skeleton height="20px" />
            ) : (
              <span className="font-semibold">{data.temperature}</span>
            )}
          </div>
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>🚀 Velocity: </span>
            </p>
            {isLoading ? (
              <Skeleton height="20px" />
            ) : (
              <span className="font-semibold">{data.velocity}</span>
            )}
          </div>
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>🏳️ Altitude: </span>
            </p>
            {isLoading ? (
              <Skeleton height="20px" />
            ) : (
              <span className="font-semibold">{data.altitude}</span>
            )}
          </div>
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>💬 Message: </span>
            </p>
            {isLoading ? (
              <Skeleton height="20px" />
            ) : (
              <span className="font-semibold">{data.statusMessage}</span>
            )}
          </div>
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>⚠️ Flight Status: </span>
            </p>
            <span
              className={`font-semibold ${
                data?.isAscending ? "text-green-500" : "text-red-500"
              }`}
            >
              {isLoading ? (
                <Skeleton height="20px" />
              ) : data?.isAscending ? (
                "Ascending"
              ) : (
                "Descending"
              )}
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-between">
            <Button colorScheme="teal" onClick={handleButtonClick}>
              Refresh Data
            </Button>
            <Button as={Link} to={`assignmentB`} colorScheme="teal">
              Go to Assignment B
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
