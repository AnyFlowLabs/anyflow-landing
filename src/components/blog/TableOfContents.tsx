import { useEffect, useState, useRef } from 'react';
import {
    Box,
    Heading,
    List,
    ListItem,
    Link,
    BoxProps,
    useColorModeValue,
} from '@chakra-ui/react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps extends BoxProps {
    content: string;
}

export const TableOfContents = ({ content, ...rest }: TableOfContentsProps) => {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>('');
    const tocRef = useRef<HTMLDivElement>(null);
    const activeItemRef = useRef<HTMLAnchorElement>(null);
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const bgColor = useColorModeValue('gray.50', 'gray.800');
    const hoverBgColor = useColorModeValue('gray.100', 'gray.700');
    const activeBgColor = useColorModeValue('gray.200', 'gray.600');

    // Extract headings from content
    useEffect(() => {
        const extractHeadings = () => {
            // Match only lines beginning with 1-3 hash characters followed by a space
            // This ensures we only get actual markdown headers, not text with # in the middle
            const headingRegex = /^(#{1,3})\s+(.+)$/gm;
            const matches = Array.from(content.matchAll(headingRegex));

            const result = matches.map((match) => {
                const level = match[1].length;
                // Clean up the heading text - remove markdown formatting like asterisks
                const rawText = match[2];
                const cleanText = rawText
                    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold markers **text**
                    .replace(/\*(.+?)\*/g, '$1')     // Remove italic markers *text*
                    .replace(/`(.+?)`/g, '$1')       // Remove code markers `text`
                    .replace(/~~(.+?)~~/g, '$1')     // Remove strikethrough ~~text~~
                    .trim();

                const id = cleanText
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-');

                return { id, text: cleanText, level };
            });

            setHeadings(result);
        };

        if (content) {
            extractHeadings();
        }
    }, [content]);

    // Set up intersection observer to highlight active heading
    useEffect(() => {
        if (typeof window === 'undefined' || headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        // Observe all heading elements
        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            headings.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, [headings]);

    // Scroll to active item within the table of contents
    useEffect(() => {
        if (activeItemRef.current && tocRef.current) {
            const activeElement = activeItemRef.current;
            const container = tocRef.current;

            // Calculate positions
            const activeRect = activeElement.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Check if active element is not visible in the viewport
            const isAbove = activeRect.top < containerRect.top;
            const isBelow = activeRect.bottom > containerRect.bottom;

            if (isAbove || isBelow) {
                // Scroll the active element into view with some padding
                const scrollOptions = {
                    behavior: 'smooth' as ScrollBehavior,
                    block: 'nearest' as ScrollLogicalPosition
                };

                activeElement.scrollIntoView(scrollOptions);

                // Add a small offset to avoid the element being right at the edge
                // if (isAbove) {
                //     container.scrollTop -= 20;
                // } else if (isBelow) {
                //     container.scrollTop += 20;
                // }
            }
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
            borderRadius="md"
            bg={bgColor}
            fontSize="sm"
            maxHeight="calc(100vh - 200px)"
            overflowY="auto"
            ref={tocRef}
            {...rest}
        >
            <Heading as="h2" size="sm" mb={4}>
                Table of Contents
            </Heading>
            <List spacing={2}>
                {headings.map((heading) => (
                    <ListItem
                        key={heading.id}
                        ml={(heading.level - 1) * 4}
                    >
                        <Link
                            display="block"
                            py={1}
                            px={2}
                            borderRadius="md"
                            href={`#${heading.id}`}
                            bg={activeId === heading.id ? activeBgColor : 'transparent'}
                            _hover={{ bg: hoverBgColor, textDecoration: 'none' }}
                            fontWeight={activeId === heading.id ? 'medium' : 'normal'}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                                setActiveId(heading.id);
                            }}
                            ref={activeId === heading.id ? activeItemRef : null}
                        >
                            {heading.text}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}; 