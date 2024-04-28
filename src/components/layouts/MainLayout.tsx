'use client';

import { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const MainLayoutGlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #f0f2f5;
    --color-secondary: #fff;
    --color-blue: #1890ff;
  }
  
  body, main {
    background-color: var(--color-primary);
    overflow: hidden;
  }
`;

const LayoutContainer = styled.div`
  
`;

export const LayoutMainPanel = styled.main`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 1rem;
`;

export type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  if (!children) throw new Error('MainLayout must have children');

  return (
    <>
      <MainLayoutGlobalStyles />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
}
