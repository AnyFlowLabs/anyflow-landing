/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { TitleSection } from "./Components";

export default function RewardsFaqSection() {
  return (
    <Container
      maxW={{ base: "container.sm", md: "container.lg" }}
      my={{ base: 0, md: 16 }}
    >
      <VStack spacing={{ base: 4, md: 8 }} align="stretch">
        <TitleSection title="Frequently Asked Questions" />
        <Accordion allowMultiple variant="custom" boxShadow="2xl">
          {[
            {
              question: "How do I get started with the program?",
              answer:
                "Getting started is easy! First, follow us on Twitter <a href='https://x.com/anyflow_' target='_blank' rel='noopener noreferrer'>https://x.com/anyflow_</a> and join our Discord <a href='https://discord.gg/TbARmXUXSM' target='_blank' rel='noopener noreferrer'>https://discord.gg/TbARmXUXSM</a>. Then, create an account using your GitHub credentials. Once set up, you can make your first deployment on the XDC network and earn rewards.",
            },
            {
              question: "How and when do I receive the rewards?",
              answer:
                "Rewards are paid out at the end of each month after completing each milestone. You'll receive your first $10 after completing your first deployment and providing initial feedback. Additional rewards are paid upon completion of the feedback form and interview if selected.",
            },
            {
              question: "Do I need to complete all steps of the program?",
              answer:
                "No, you can participate in as many steps as you like. Each step has its reward, and you're not obligated to complete all of them. However, completing more steps increases your total earnings and helps us improve the platform.",
            },
            {
              question:
                "How are participants selected for the interview stage?",
              answer:
                "Interview participants are selected based on their experience with web3 development and the quality of their initial feedback. If selected, you'll be invited to a 15-minute call and earn an additional $20 reward.",
            },
            {
              question: "How does the referral program work?",
              answer:
                "You can earn $10 for each friend you refer who completes the initial deployment and feedback form stages. There's no limit to how many friends you can refer, making it a great way to earn additional rewards. There is however a limit of $70 per participant in total rewards.",
            },
            {
              question: "How does AnyFlow work?",
              answer:
                "For a detailed technical explanation of how our platform operates, please visit our documentation: <a href='https://docs.anyflow.pro/docs/how_it_works/' target='_blank' rel='noopener noreferrer'>https://docs.anyflow.pro/docs/how_it_works/</a>.",
            },
            {
              question: "What conditions apply to participation?",
              answer:
                "This program is designed for developers, tech leads, and CTOs. To ensure we are engaging with real, active individuals in the web3 space, we perform both automated and manual checks. Below are the specific eligibility criteria:<br><br><ul><li><strong>GitHub:</strong> The account must be at least six months old and have at least one public repository with recent activity.</li><li><strong>Twitter/X:</strong> The account must have at least 100 followers, be at least six months old, and show authentic, human-generated content. The account must also follow AnyFlow's account for the duration of the program.</li><li><strong>Discord:</strong> The account must pass our anti-bot system and remain a member of AnyFlow's Discord server until the program concludes.</li></ul><br>Each account and interaction will be manually verified to ensure fair participation. Any suspicious activity may result in disqualification at our discretion.",
            },
          ].map((item, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              ></AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Container>
  );
}
