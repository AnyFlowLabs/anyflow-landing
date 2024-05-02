export function GlassCard() {
  return (
    <div className="glass">
      <h3 className="text-white">Alguma coisa aqui</h3>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        laborum eum, nihil totam incidunt hic perspiciatis animi sed doloremque
        itaque temporibus voluptates voluptatum tenetur at nam. Debitis dicta
        quo neque?
      </p>
    </div>
  );
}

export default function MainTemplate() {
  return (
    <div className="flex flex-grow flex-col pb-10">
      <section className="w-full">
        <h1 className="text-center text-5xl text-white">AnyFlow</h1>
        <h3 className="text-center text-3xl text-white">AnyFlow Subtitle</h3>
      </section>
      <section className="flex gap-10 p-8">
        <div className="border">
          <h3 className="text-white">Alguma coisa aqui</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laborum eum, nihil totam incidunt hic perspiciatis animi sed
            doloremque itaque temporibus voluptates voluptatum tenetur at nam.
            Debitis dicta quo neque?
          </p>
        </div>
        <div className="size-80 border">imagem</div>
      </section>

      <GlassCard />
    </div>
  );
}
