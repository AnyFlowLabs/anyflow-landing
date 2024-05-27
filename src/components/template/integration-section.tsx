import { IntegrationDisplay } from "@/components/organisms/integration-display";

const IntegrationSection = () => (
  <section className="mt-20">
    <IntegrationDisplay
      title="Continuous Integration Made Easy"
      description="Integrate AnyFlow with your CI tools like GitHub Actions or Jenkins for seamless smart contract deployments. Automate the tedious parts of deployment and focus more on innovation and less on infrastructure."
    />
    <IntegrationDisplay
      title="Hands-Off Deployment Process"
      description="Forget about gas calculations and private key management. AnyFlow automates these complexities, allowing you to deploy without directly handling sensitive elements or incurring unexpected costs."
    />
    <IntegrationDisplay
      title="Trust and Control in Your Hands"
      description="Every deployment through AnyFlow requires explicit approval from your team, ensuring a trustless operation where only authorized actions are executed, and maintaining the integrity and security of your deployments."
    />
    <IntegrationDisplay
      title="Unified Operational Costs"
      description="Simplify your billing with AnyFlow’s straightforward financial model. All deployment costs are consolidated and billed in USD, freeing you from managing multiple native tokens across blockchains."
    />
  </section>
);

export default IntegrationSection;
