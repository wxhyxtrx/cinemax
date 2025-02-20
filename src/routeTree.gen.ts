/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as SigninImport } from './routes/signin'
import { Route as HomeImport } from './routes/home'
import { Route as CinemaImport } from './routes/cinema'
import { Route as AuthImport } from './routes/auth'
import { Route as IndexImport } from './routes/index'
import { Route as MovieNamemovieImport } from './routes/movie/$name_movie'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SigninRoute = SigninImport.update({
  id: '/signin',
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const CinemaRoute = CinemaImport.update({
  id: '/cinema',
  path: '/cinema',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MovieNamemovieRoute = MovieNamemovieImport.update({
  id: '/movie/$name_movie',
  path: '/movie/$name_movie',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/cinema': {
      id: '/cinema'
      path: '/cinema'
      fullPath: '/cinema'
      preLoaderRoute: typeof CinemaImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/movie/$name_movie': {
      id: '/movie/$name_movie'
      path: '/movie/$name_movie'
      fullPath: '/movie/$name_movie'
      preLoaderRoute: typeof MovieNamemovieImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/cinema': typeof CinemaRoute
  '/home': typeof HomeRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
  '/movie/$name_movie': typeof MovieNamemovieRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/cinema': typeof CinemaRoute
  '/home': typeof HomeRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
  '/movie/$name_movie': typeof MovieNamemovieRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/cinema': typeof CinemaRoute
  '/home': typeof HomeRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
  '/movie/$name_movie': typeof MovieNamemovieRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth'
    | '/cinema'
    | '/home'
    | '/signin'
    | '/signup'
    | '/movie/$name_movie'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth'
    | '/cinema'
    | '/home'
    | '/signin'
    | '/signup'
    | '/movie/$name_movie'
  id:
    | '__root__'
    | '/'
    | '/auth'
    | '/cinema'
    | '/home'
    | '/signin'
    | '/signup'
    | '/movie/$name_movie'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRoute
  CinemaRoute: typeof CinemaRoute
  HomeRoute: typeof HomeRoute
  SigninRoute: typeof SigninRoute
  SignupRoute: typeof SignupRoute
  MovieNamemovieRoute: typeof MovieNamemovieRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRoute,
  CinemaRoute: CinemaRoute,
  HomeRoute: HomeRoute,
  SigninRoute: SigninRoute,
  SignupRoute: SignupRoute,
  MovieNamemovieRoute: MovieNamemovieRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auth",
        "/cinema",
        "/home",
        "/signin",
        "/signup",
        "/movie/$name_movie"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auth": {
      "filePath": "auth.tsx"
    },
    "/cinema": {
      "filePath": "cinema.tsx"
    },
    "/home": {
      "filePath": "home.tsx"
    },
    "/signin": {
      "filePath": "signin.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/movie/$name_movie": {
      "filePath": "movie/$name_movie.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
