import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import DashboardMotorista from "../home/homemotorista/DashboardMotorista";
import DashboardPassageiro from "../home/homepassageiro/DashboardPassageiro";

export default function Dashboard() {
  const { usuario } = useContext(AuthContext);

  if (!usuario) return null;

  if (usuario.tipoUsuario === "MOTORISTA") {
    return <DashboardMotorista />;
  }

  return <DashboardPassageiro />;
}
