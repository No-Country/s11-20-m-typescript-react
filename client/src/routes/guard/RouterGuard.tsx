import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type props = {
  children: ReactNode;
};

export const RouterGuard = ({ children }: props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });

  return <>{children}</>;
};
