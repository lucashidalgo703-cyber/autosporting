import Link from "next/link";

export default function VehicleCard({ title, price, image, id }) {
  return (
    <Link href={`/catalogo/${id}`} className="vehicle-card">
      <div className="vehicle-image">
        <img
          src={image}
          alt={title}
          className="vehicle-img"
        />
      </div>

      <div className="vehicle-info">
        <h3 className="vehicle-title">{title}</h3>
        <p className="vehicle-price">{price}</p>
      </div>
    </Link>
  );
}
