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
import { useTranslation } from "react-i18next";

export default function FacSection() {
  const { t } = useTranslation();

  return (
    <Container
      maxW={{ base: "container.sm", md: "container.lg" }}
      my={{ base: 8, md: 16 }}
    >
      <VStack spacing={{ base: 6, md: 8 }} align="stretch">
        <VStack spacing={4} align="center" mb={{ base: 6, md: 8 }}>
          <Text textStyle="section" data-aos="fade-up">
            {t("home.faq.section")}
          </Text>
          <Heading textStyle="title" data-aos="fade-up">
            {t("home.faq.title")}
          </Heading>
          <Text textStyle="subtitle" data-aos="fade-up">
            {t("home.faq.subtitle")}
          </Text>
        </VStack>

        <Accordion
          allowMultiple
          variant="custom"
          data-aos="fade-up"
          boxShadow="2xl"
        >
          {[
            {
              question: t("home.faq.questions.what.question"),
              answer: t("home.faq.questions.what.answer"),
            },
            {
              question: t("home.faq.questions.how.question"),
              answer: t("home.faq.questions.how.answer"),
            },
            {
              question: t("home.faq.questions.tokens.question"),
              answer: t("home.faq.questions.tokens.answer"),
            },
            {
              question: t("home.faq.questions.security.question"),
              answer: t("home.faq.questions.security.answer"),
            },
            {
              question: t("home.faq.questions.chains.question"),
              answer: t("home.faq.questions.chains.answer"),
            },
            {
              question: t("home.faq.questions.cost.question"),
              answer: t("home.faq.questions.cost.answer"),
            },
            {
              question: t("home.faq.questions.integrate.question"),
              answer: t("home.faq.questions.integrate.answer"),
            },
          ].map((item, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Container>
  );
}
