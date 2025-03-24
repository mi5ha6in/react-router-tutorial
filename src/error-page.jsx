import { useRouteError } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    window.location.href = "/404.html";
  }, []);

  return null;
}
