import {
    HStack,
    Box,
    Button,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    useDisclosure,
    Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { APP_URL, DOCS_URL } from "@/const";
import { Logo } from "./Logo";
import GithubIcon from "./Icons/Github";
import { StarIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

/**
 * Navbar component with responsive design
 * 
 * Features:
 * - Responsive layout that adapts to mobile and desktop views
 * - Mobile view includes a hamburger menu that opens a drawer with navigation options
 * - Desktop view shows all navigation links inline
 * - Includes links to app, docs, chains, blog, and rewards program
 */
export const Navbar = () => {
    const { t } = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    /**
     * Handles closing the mobile drawer when a navigation link is clicked
     */
    const handleNavigation = () => {
        if (isOpen) {
            onClose();
        }
    };

    return (
        <HStack
            as="header"
            role="banner"
            flexDir={{ base: "row", sm: "row" }}
            bg="transparent"
            justify="space-between"
            p={4}
            gap={{ base: 4, md: 0 }}
            w="full"
        >
            {/* Logo and Rewards Link (desktop only) */}
            <HStack gap={8}>
                <Logo />
                <Box display={{ base: "none", lg: "block" }}>
                    <Link
                        to={"/rewards"}
                        style={{
                            color: "var(--anyflow-colors-warning-500)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            gap: "8px",
                        }}
                    >
                        <Button variant="ghost" p={2}>
                            <StarIcon w="12px" h="12px" mr={2} color="var(--anyflow-colors-warning-500)" />
                            <Text color="var(--anyflow-colors-warning-500)">Join on our rewards program</Text>
                        </Button>
                    </Link>
                </Box>
            </HStack>

            {/* Desktop Navigation */}
            <HStack justify="center" display={{ base: "none", md: "flex" }}>
                <nav aria-label="Main Navigation">
                    <HStack>
                        <Button
                            as="a"
                            variant="ghost"
                            target="_blank"
                            className="hidden text-white lg:inline"
                            href={DOCS_URL}
                            referrerPolicy="no-referrer"
                            p={2}
                        >
                            Docs
                        </Button>
                        <Link to="/chains">
                            <Button p={2} variant="ghost">
                                Chains
                            </Button>
                        </Link>
                        <Link to="/blog">
                            <Button p={2} variant="ghost">
                                Blog
                            </Button>
                        </Link>
                    </HStack>
                </nav>
                <Button
                    as="a"
                    variant="outline"
                    href={APP_URL}
                    ml={2}
                    p={2}
                    leftIcon={<GithubIcon width={18} height={18} />}
                    justifyContent="center"
                >
                    {t("header.button_github")}
                </Button>
            </HStack>

            {/* Mobile Hamburger Button */}
            <IconButton
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                variant="outline"
                display={{ base: "flex", md: "none" }}
                ref={btnRef}
                onClick={onOpen}
            />

            {/* Mobile Drawer */}
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="xs"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton aria-label="Close menu" />
                    <DrawerHeader borderBottomWidth="1px">
                        <Logo />
                    </DrawerHeader>

                    <DrawerBody py={4}>
                        <VStack align="start" spacing={6} as="nav" aria-label="Mobile Navigation">
                            <Link to="/rewards" onClick={handleNavigation}>
                                <Button variant="ghost" p={2} w="full" justifyContent="start">
                                    <StarIcon w="12px" h="12px" mr={2} color="var(--anyflow-colors-warning-500)" />
                                    <Text color="var(--anyflow-colors-warning-500)">Rewards Program</Text>
                                </Button>
                            </Link>

                            <Button
                                as="a"
                                variant="ghost"
                                target="_blank"
                                href={DOCS_URL}
                                referrerPolicy="no-referrer"
                                p={2}
                                w="full"
                                justifyContent="start"
                                onClick={handleNavigation}
                            >
                                Docs
                            </Button>

                            <Link to="/chains" style={{ width: "100%" }} onClick={handleNavigation}>
                                <Button p={2} variant="ghost" w="full" justifyContent="start">
                                    Chains
                                </Button>
                            </Link>

                            <Link to="/blog" style={{ width: "100%" }} onClick={handleNavigation}>
                                <Button p={2} variant="ghost" w="full" justifyContent="start">
                                    Blog
                                </Button>
                            </Link>

                            <Button
                                as="a"
                                variant="outline"
                                href={APP_URL}
                                p={2}
                                leftIcon={<GithubIcon width={18} height={18} />}
                                justifyContent="center"
                                w="full"
                                mt={4}
                            >
                                {t("header.button_github")}
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </HStack>
    );
}; 