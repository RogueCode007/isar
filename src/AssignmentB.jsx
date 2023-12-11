import { apiRoutes } from "./core/routes/apiRoutes";
import { Link } from "react-router-dom";
import { useWebSocket } from "./core/hooks/useWebSocket";
import { useEffect, useRef, useState } from "react";
import { OverlayModal } from "./core/components/OverlayModal";
import { ArrowUp, ArrowDown } from "iconsax-react";
import { Button } from "@chakra-ui/react";

export default function AssignmentB() {
  const { data, isActionRequired, actOnSpectrum } = useWebSocket(
    apiRoutes.webSocket
  );
  const prevDataRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isActionRequired) {
      setShowModal(true);
    }
  }, [isActionRequired]);

  useEffect(() => {
    prevDataRef.current = data;
  }, [data]);

  const renderValueWithIcon = (currentValue, prevValue) => {
    if (currentValue > prevValue) {
      return (
        <span className="font-semibold">
          {currentValue}{" "}
          <ArrowUp className="inline" color="green" variant="Bulk" size={20} />
        </span>
      );
    } else if (currentValue < prevValue) {
      return (
        <span className="font-semibold">
          {currentValue}{" "}
          <ArrowDown className="inline" color="red" variant="Bulk" size={20} />
        </span>
      );
    }
    return <span className="font-semibold">{currentValue}</span>;
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleAction = () => {
    actOnSpectrum();
    setShowModal(false);
  };

  return (
    <div className="h-full w-full bg-black pt-12 px-4">
      {data && (
        <div className="bg-white rounded-lg p-3 md:max-w-[400px] md:mx-auto">
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>🌡️ Temperature: </span>
            </p>
            {renderValueWithIcon(
              data.Temperature,
              prevDataRef.current?.Temperature
            )}
          </div>
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>🚀 Velocity: </span>
            </p>
            {renderValueWithIcon(data.Velocity, prevDataRef.current?.Velocity)}
          </div>
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>🏳️ Altitude: </span>
            </p>
            {renderValueWithIcon(data.Altitude, prevDataRef.current?.Altitude)}
          </div>
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>💬 Message: </span>
            </p>
            <span className="font-semibold">{data.StatusMessage}</span>
          </div>
          <div className="mb-4">
            <p className="flex items-center gap-2 font-semibold">
              <span>⚠️ Flight Status: </span>
            </p>
            <span
              className={`font-semibold ${
                data.IsAscending ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.IsAscending ? "Ascending" : "Descending"}
            </span>
          </div>

          {showModal && (
            <OverlayModal
              isOpen={showModal}
              onClose={closeModal}
              onAction={handleAction}
            />
          )}

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-between">
            <Button as={Link} to={`/`} colorScheme="teal">
              Go to Assignment A
            </Button>
            <Button as={Link} to={`/assignmentC`} colorScheme="teal">
              Go to Assignment C
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
