import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function AssignmentC() {
  return (
    <div className="h-full w-full bg-black pt-12 px-4">
      <div className="bg-white rounded-lg p-3 md:max-w-[400px] md:mx-auto">
        <h1 className="font-bold text-lg my-4">
          Some observations and potential improvements based on the API
          responses I would suggest are:
        </h1>
        <ul>
          <li>
            <p className="font-bold mb-2">
              1. Consistency in Naming and Casing:{" "}
            </p>
            The keys in the API responses have varying cases (velocity and
            Velocity, altitude and Altitude, IsActionRequired, IsAscending,
            etc.). Consistency in naming conventions (camelCase, snake_case,
            etc.) helps in readability and maintenance. Standardizing naming
            conventions across all keys would enhance clarity.
          </li>
          <li className="mt-4">
            <p className="font-bold mb-2">2. Standardized Status Messages: </p>
            The statusMessage field provides information about the rocket's
            status. Standardizing the format or using predefined status
            codes/messages could enhance consistency across different responses.
            For example, using standardized codes like HTTP status codes or
            predefined messages like "Operational," "Critical," etc., could be
            more standardized and machine-readable.
          </li>
        </ul>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-between">
          <Button as={Link} to={`/`} colorScheme="teal">
            Go to AssignmentA
          </Button>
          <Button as={Link} to={`/assignmentB`} colorScheme="teal">
            Go to Assignment B
          </Button>
        </div>
      </div>
    </div>
  );
}
