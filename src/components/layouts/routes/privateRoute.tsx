import { isAuthenticated } from "@/hooks/useAuth";
import { createFileRoute, FileRoutesByPath, redirect } from "@tanstack/react-router";

export const privateRoute = <T extends keyof FileRoutesByPath>(path: T, component: () => JSX.Element) => {
    return createFileRoute(path)({
        beforeLoad: ({ location }) => {
            if (!isAuthenticated()) {
                throw redirect({ to: "/auth", search: { redirect: location.href } });
            }
        },
        component
    });
};
