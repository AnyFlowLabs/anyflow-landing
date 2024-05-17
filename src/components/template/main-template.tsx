// import { Card } from "../ui/card";

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

      {/* Testing section - Just comment  out the below section and import statement at line 1 in order to visualize the results */}

      {/* <section className="mt-10">
        <h1 className="mb-10 text-4xl text-white">Cards</h1>
        <div className="">
          <Card
            title="My Title"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum eum, nihil totam incidunt hic perspiciatis animi sed doloremque itaque temporibus voluptates voluptatum tenetur at nam. Debitis dicta quo neque?"
            color="foreground"
            blurr="35"
            opacity={0.3}
            width={85}
            padding={5}
          />
          <Card
            title="My Title"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum eum, nihil totam incidunt hic perspiciatis animi sed doloremque itaque temporibus voluptates voluptatum tenetur at nam. Debitis dicta quo neque?"
            color="default"
            blurr="45"
            opacity={0.3}
            width={75}
            padding={2}
          />
          <Card
            title="My Title"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum eum, nihil totam incidunt hic perspiciatis animi sed doloremque itaque temporibus voluptates voluptatum tenetur at nam. Debitis dicta quo neque?"
            color="foreground"
            blurr="55"
            opacity={0.5}
            width={45}
            padding={3}
          />
          <Card
            title="My Title"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum eum, nihil totam incidunt hic perspiciatis animi sed doloremque itaque temporibus voluptates voluptatum tenetur at nam. Debitis dicta quo neque?"
            color="default"
            blurr="65"
            opacity={0.8}
            width={25}
            padding={4}
          />
        </div>
      </section> */}
    </div>
  );
}
