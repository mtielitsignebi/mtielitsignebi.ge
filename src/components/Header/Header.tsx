import { useState } from "react";
import {
  Button,
  Center,
  Divider,
  Drawer,
  SegmentedControl,
  Space,
  Text,
} from "@mantine/core";
import { useLocation, useNavigate } from "react-router";
import { usePlatform } from "../../hooks";
import {
  StyledHeader,
  Logo,
  LeftSection,
  CenterSection,
  RightSection,
  MobileMenuButton,
} from "./styles";
import { theme } from "../../theme";
import { useTranslation } from "react-i18next";

const menuItems = [
  { path: "/home", labelKey: "menu.home" },
  { path: "/about", labelKey: "menu.about" },
  { path: "/events", labelKey: "menu.events" },
];

export const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const platform = usePlatform();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const reloadPage = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const handleLanguageChange = (value: string | null) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <StyledHeader>
      <LeftSection>
        <Logo
          alt="Logo"
          src="https://c.animaapp.com/9E1pYK5V/img/logo-2.svg"
          onClick={reloadPage}
        />
      </LeftSection>
      {platform === "web" ? (
        <>
          <CenterSection>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "filled" : "subtle"}
                onClick={() => navigate(item.path)}
                radius="8px"
                color="var(--background-100)"
                styles={{
                  label: {
                    color: "var(--text)",
                    fontFamily: "var(--body-m-regular-font-family)",
                    fontSize: "var(--body-m-regular-font-size)",
                    fontStyle: "var(--body-m-regular-font-style)",
                    fontWeight: "var(--body-m-regular-font-weight)",
                  },
                }}
              >
                {t(item.labelKey)}
              </Button>
            ))}
          </CenterSection>

          <RightSection>
            <SegmentedControl
              style={{ background: "transparent" }}
              size="sm"
              color={theme.colors.green[200]}
              value={i18n.language}
              onChange={handleLanguageChange}
              data={[
                { value: "ka", label: "GEO" },
                { value: "en", label: "ENG" },
              ]}
            />

            <Button
              variant="filled"
              onClick={() => navigate(`/donate`)}
              radius="8px"
              color="var(--accent)"
              styles={{
                label: {
                  color: "#ffffff",
                  fontFamily: "var(--body-m-regular-font-family)",
                  fontSize: "var(--body-m-regular-font-size)",
                  fontStyle: "var(--body-m-regular-font-style)",
                  fontWeight: "var(--body-m-regular-font-weight)",
                },
              }}
            >
              დონაცია
            </Button>
          </RightSection>
        </>
      ) : (
        <MobileMenuButton opened={menuOpen} onClick={toggleMenu} size="sm" />
      )}
      <Drawer
        opened={menuOpen}
        onClose={toggleMenu}
        padding="md"
        position="right"
        offset="64px 0"
        withCloseButton={false}
        styles={{
          body: {
            backgroundColor: theme.colors.background,
            paddingBottom: 48,
          },
        }}
        transitionProps={{
          transition: "fade-down",
          duration: 200,
          timingFunction: "linear",
        }}
      >
        {menuItems.map((item) => (
          <>
            <Button
              key={item.path}
              fullWidth
              mt="sm"
              justify="flex-start"
              variant={location.pathname === item.path ? "filled" : "subtle"}
              onClick={() => {
                navigate(item.path);
                toggleMenu();
              }}
              radius="8px"
              color="var(--background-100)"
              styles={{
                label: {
                  color: "var(--text)",
                  fontFamily: "var(--body-m-regular-font-family)",
                  fontSize: "var(--body-m-regular-font-size)",
                  fontStyle: "var(--body-m-regular-font-style)",
                  fontWeight: "var(--body-m-regular-font-weight)",
                },
              }}
            >
              {t(item.labelKey)}
            </Button>

            <Divider color="#78D080" mt="sm" />
          </>
        ))}

        <Space h="lg" />
        <Center>
          <SegmentedControl
            style={{ background: "transparent" }}
            size="sm"
            color={theme.colors.green[200]}
            value={i18n.language}
            onChange={handleLanguageChange}
            data={[
              { value: "ka", label: "GEO" },
              { value: "en", label: "ENG" },
            ]}
          />
        </Center>

        <Button
          fullWidth
          variant="filled"
          onClick={() => navigate(`/donate`)}
          color="var(--accent)"
          mt="xl"
          styles={{
            label: {
              color: "#ffffff",
              fontFamily: "var(--body-m-regular-font-family)",
              fontSize: "var(--body-m-regular-font-size)",
              fontStyle: "var(--body-m-regular-font-style)",
              fontWeight: "var(--body-m-regular-font-weight)",
            },
          }}
        >
          დონაცია
        </Button>

        <Center mt="xl">
          <Text size="sm">© 2022-2024 ყველა უფლება დაცულია.</Text>
        </Center>
      </Drawer>
    </StyledHeader>
  );
};
