import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Link, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import View from "../components/layouts/views";
import Img404 from "/assets/image/404.png";

export const Route = createRootRouteWithContext()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      {/* <ReactQueryDevtools buttonPosition='top-right' /> */}
      {/* <TanStackRouterDevtools position='bottom-right' /> */}
    </>
  );
}

function NotFoundComponent() {
  return (
    <View>
      <div className=' flex flex-col items-center justify-center m-auto'>
        <img src={Img404} className='mt-32 mb-5' />
        <Link to={"/"} className=' font-medium text-xs md:text-sm bg-primary-purple-500/20 px-4 py-2 rounded-md'>
          Back to Home
        </Link>
      </div>
    </View>
  );
}
