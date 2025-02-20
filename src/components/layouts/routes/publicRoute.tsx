import { isAuthenticated } from "@/hooks/useAuth";
import { createFileRoute, FileRoutesByPath, redirect } from "@tanstack/react-router";

export const publicRoute = <T extends keyof FileRoutesByPath>(path: T, component: () => JSX.Element) => {
    return createFileRoute(path)({
        beforeLoad: () => {
            if (isAuthenticated()) {
                throw redirect({ to: "/home" });
            }
        },
        component, 
    });
};
