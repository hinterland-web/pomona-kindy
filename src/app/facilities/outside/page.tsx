import FacilitiesOutside from "@/components/facilities/facilitiesOutside";

export default function FacilitiesOutsidePage() {
  return (
    <div className="relative text-base-400">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="relative z-10">
        <FacilitiesOutside />
      </div>
    </div>
  );
}