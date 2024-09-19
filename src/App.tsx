import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/layout/PrivateRoute'
import { privateRoutes, publicRoutes, RouteObject } from './app.route';
import Header from './components/layout/header';

const App = () => {
  const renderRoutes = (routes: RouteObject[]) => {
    return routes.map((r: RouteObject) => (
      <Route path={r.path} element={r.element} key={r.path} />
    ));
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          {renderRoutes(privateRoutes)}
        </Route>
        <Route>{renderRoutes(publicRoutes)}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App