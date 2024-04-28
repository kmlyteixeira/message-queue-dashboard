import AppQueryClientProvider from "@/components/AppQueryClientProvider";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import { ConfigProvider } from "antd";
import antPtBr from 'antd/locale/pt_BR';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Message Queue Dashboard",
  description: "Generated by create next app",
};

const theme = {
  components: {
    Layout: {
      siderBg: "var(--color-secondary)"
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ConfigProvider locale={antPtBr} theme={theme}>
          <StyledComponentsRegistry>
            <AppQueryClientProvider>
              {children} 
            </AppQueryClientProvider>
          </StyledComponentsRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}