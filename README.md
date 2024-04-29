### :sparkles: Message Queue Dashboard
This project was created w/ to learning more about React using the Next.JS framework.

### :eyes: __Overview__
![image](https://github.com/kmlyteixeira/message-queue-dashboard/assets/101020416/d936686c-78d5-475a-9008-6a19b32cbc41)

### :hammer: Build w/
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)


### :runner: Installing and Running

You can integrate this project with: [kmlyteixeira/message-queue](https://github.com/kmlyteixeira/message-queue)) - or create your own APIs
1.  Clone this repo `https://github.com/kmlyteixeira/message-queue-dashboard.git`
4.  Run `npm install` to install the dependencies 
5.  Run `npm run dev`
6.  Open `http://localhost:3000` and be happy! :)

### Here you'll find:

```
message-queue-dashboard
|
├── src
│   ├── app
|   |   ├── layout.tsx
|   |   └── page.tsx
|   ├── commons
|   |   └── hooks
|   |       ├── notification/useCustomNotification.ts
|   |       └── search-filter/useSearchFilter.tsx
|   |
|   ├── components
|   |   ├── card/MessageCard.tsx
|   |   ├── chart/MessageChart.tsx
|   |   ├── drawer
|   |   |   ├── hooks/useSendMessage.ts
|   |   |   └── MessageDrawer.tsx
|   |   ├── form/MessageForm.tsx
|   |   ├── grid/MessageGrid.tsx
|   |   ├── layouts
|   |   |   ├── app
|   |   |   |   ├── hooks/useReceiveMessages.ts
|   |   |   |   └── AppPage.tsx
|   |   |   ├── main-header
|   |   |   |   ├── main-toolbar/MainToolbar.tsx
|   |   |   |   ├── notification-popover/NotificationPopover.tsx
|   |   |   |   └── MainHeader.tsx
|   |   |   ├── main-sidebar/MainSidebar.tsx
|   |   |   └── MainLayout.tsx
|   |   ├── AppQueryClientProvider.tsx
|   |   └── StyledComponentsRegistry.tsx
|   |
|   ├── interfaces
|   |   └── message
|   |       ├── MessageBodyType.ts
|   |       └── MessageType.ts
│   └── services
|       └── messages/messages-api.ts
|
├── .eslintrc.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---
## :books: __Learn more__
:one: [React Learn](https://react.dev/learn)

:two: [Learn Next.js: Getting Started | Next.js](nextjs.org)

:three: [Ant Design - Components Overview](https://ant.design/components/overview)

:four: [React for the Haters in 100 Seconds](https://www.youtube.com/watch?v=HyWYpM_S-2c)

:five: [The React Ecosystem in 2023](https://www.youtube.com/watch?v=6j9tnGMbm2c)

:six: [How A Small Team of Developers Created React at Facebook | React.js: The Documentary](https://www.youtube.com/watch?v=8pDqJVdNa44&list=PLtEPUaeDclku1ECmuN3IsUimHApukWIOf)
