import vehicles from "../../data/vehicles";
import Image from "next/image";
import Link from "next/link";

export default function VehicleDetail({ params }) {
  const vehicle = vehicles.find(
    (v) => v.id === Number(params.id)
  );

  if (!vehicle) {
    return <p>Vehículo no encontrado</p>;
  }

  return (
    <main className="vehicle-detail">
      <div className="vehicle-detail-container">
        <Link href="/" className="vehicle-back">
          ← Volver al catálogo
        </Link>

        <div className="vehicle-detail-grid">
          <div className="vehicle-detail-image">
            <Image
              src={vehicle.image}
              alt={vehicle.title}
              fill
              className="vehicle-detail-img"
            />
          </div>

          <div className="vehicle-detail-info">
            <h1>{vehicle.title}</h1>
            <p className="vehicle-detail-price">
              {vehicle.price}
            </p>

            <button className="vehicle-detail-cta">
              Consultar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
