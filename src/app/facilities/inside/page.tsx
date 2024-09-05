import FacilitiesInside from "@/components/facilities/facilitiesInside";

export default function FacilitiesInsidePage() {
  return (
    <div className="relative text-base-400">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="relative z-10">
        <FacilitiesInside />
      </div>
    </div>
  );
}
