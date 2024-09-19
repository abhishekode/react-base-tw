import AboutPage from "./page/about";
import LoginPage from "./page/auth/login";
import HomePage from "./page/home";

export type RouteObject = {
    path: string;
    element: React.ReactNode;
};


export const privateRoutes: RouteObject[] = [
    { path: "/about", element: <AboutPage /> },

];

export const publicRoutes: RouteObject[] = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
];