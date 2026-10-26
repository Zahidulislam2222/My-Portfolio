import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./AppRoutes";

export { absoluteUrl, prerenderPages, seo } from "./config/seo.config";

/** Build-time only: the HTML for one route, hydrated later by main.tsx. */
export function render(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <AppRoutes />
    </StaticRouter>,
  );
}
