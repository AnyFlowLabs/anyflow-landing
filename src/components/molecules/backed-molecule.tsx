import KhizaLogo from "@/assets/khiza.svg";

export function BackedByMolecule() {
  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-blue-8 text-sm">Backed By</p>
      <img src={KhizaLogo} alt="Khiza logo" className="h-5" />
    </div>
  );
}
