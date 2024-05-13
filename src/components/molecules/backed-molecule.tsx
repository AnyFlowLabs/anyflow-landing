import KhizaLogo from "@/assets/khiza.svg";

export function BackedByMolecule() {
  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-2xl font-bold text-white">Backed By </p>
      <img src={KhizaLogo} alt="Khiza logo" className="h-10" />
    </div>
  );
}
