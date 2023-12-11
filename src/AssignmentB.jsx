import { apiRoutes } from "./core/routes/apiRoutes";
import { Link } from "react-router-dom";
import { useWebSocket } from "./core/hooks/useWebSocket";
import { useEffect, useState } from "react";
import { OverlayModal } from "./core/components/OverlayModal";

export default function AssignmentB() {
  const { data, isActionRequired, actOnSpectrum } = useWebSocket(
    apiRoutes.webSocket
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isActionRequired) {
      setShowModal(true);
    }
  }, [isActionRequired]);

  const renderDataProperties = () => {
    if (!data) return null;

    return Object.keys(data).map((key) => (
      <p key={key}>
        {key}: {renderValue(data[key])}
      </p>
    ));
  };
  const renderValue = (value) => {
    if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    return value;
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
          {renderDataProperties()}

          {showModal && (
            <OverlayModal
              isOpen={showModal}
              onClose={closeModal}
              onAction={handleAction}
            />
          )}

          <div className="mt-4 flex justify-between">
            <Link to={`/`} className="mt-4 block bg-teal-500 p-2 rounded-lg">
              Go to Assignment A
            </Link>
            <Link to={`/`} className="mt-4 block bg-teal-500 p-2 rounded-lg">
              Go to Assignment C
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
