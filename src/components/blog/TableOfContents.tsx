import { useEffect, useState, useRef, memo } from "react";
import {
  Box,
  Heading,
  List,
  ListItem,
  Link,
  BoxProps,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps extends BoxProps {
  content: string;
}

export const TableOfContents = memo(({ content, ...rest }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const tocRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const activeBgColor = useColorModeValue("gray.200", "gray.600");

  // Extract headings from content
  useEffect(() => {
    if (!content) return;
    
    const extractHeadings = () => {
      // Match only lines beginning with 1-3 hash characters followed by a space
      const headingRegex = /^(#{1,3})\s+(.+)$/gm;
      const matches = Array.from(content.matchAll(headingRegex));

      const result = matches.map((match) => {
        const level = match[1].length;
        // Clean up the heading text - remove markdown formatting
        const rawText = match[2];
        const cleanText = rawText
          .replace(/\*\*(.+?)\*\*/g, "$1") // Remove bold
          .replace(/\*(.+?)\*/g, "$1") // Remove italic
          .replace(/`(.+?)`/g, "$1") // Remove code
          .replace(/~~(.+?)~~/g, "$1") // Remove strikethrough
          .trim();

        const id = cleanText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        return { id, text: cleanText, level };
      });

      setHeadings(result);
    };

    extractHeadings();
  }, [content]);

  // Set up intersection observer to highlight active heading
  useEffect(() => {
    if (typeof window === "undefined" || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const intersectingEntry = entries.find(entry => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveId(intersectingEntry.target.id);
        }
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  // Scroll active item into view
  useEffect(() => {
    if (!activeItemRef.current || !tocRef.current) return;
    
    const activeElement = activeItemRef.current;
    const container = tocRef.current;
    const activeRect = activeElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Check if active element is not visible
    const isAbove = activeRect.top < containerRect.top;
    const isBelow = activeRect.bottom > containerRect.bottom;

    if (isAbove || isBelow) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeId]);

  if (headings.length === 0) return null;

  return (
    <Box
      as="nav"
      position="sticky"
      top="100px"
      p={4}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      bg={bgColor}
      fontSize="sm"
      maxHeight="calc(100vh - 200px)"
      overflowY="auto"
      ref={tocRef}
      aria-labelledby="toc-heading"
      {...rest}
    >
      <Heading as="h2" size="sm" mb={4} id="toc-heading">
        Table of Contents
      </Heading>
      <List spacing={2} aria-label="Table of contents navigation">
        {headings.map((heading) => (
          <ListItem key={heading.id} ml={(heading.level - 1) * 4}>
            <Link
              display="block"
              py={1}
              px={2}
              borderRadius="md"
              href={`#${heading.id}`}
              bg={activeId === heading.id ? activeBgColor : "transparent"}
              _hover={{ bg: hoverBgColor, textDecoration: "none" }}
              fontWeight={activeId === heading.id ? "medium" : "normal"}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                  element.focus({ preventScroll: true });
                  setActiveId(heading.id);
                }
              }}
              ref={activeId === heading.id ? activeItemRef : null}
              aria-current={activeId === heading.id ? "true" : undefined}
            >
              {heading.text}
              {activeId === heading.id && (
                <VisuallyHidden> (current section)</VisuallyHidden>
              )}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});
