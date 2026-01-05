import vehicles from "../data/vehicles";
import VehicleCard from "./VehicleCard";

export default function VehiclesSection() {
  return (
    <section className="vehicles">
      <h2 className="vehicles-title">Vehículos destacados</h2>

      <div className="vehicles-grid">
        {vehicles.map((vehicle) => (
  <VehicleCard
    key={vehicle.id}
    id={vehicle.id}
    title={vehicle.title}
    price={vehicle.price}
    image={vehicle.image}
  />
))}
      </div>
    </section>
  );
}
