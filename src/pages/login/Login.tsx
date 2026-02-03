import {
  useState,
  useContext,
  type ChangeEvent,
  type FormEvent
} from "react";
import { Link } from "react-router-dom";
import { AuthContext, type UsuarioLogin } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../util/ToastAlerta";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const { handleLogin, isLoading } = useContext(AuthContext);
const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    tipoUsuario: "PASSAGEIRO",
    senha: "",
    foto: "",
    token: ""
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

 async function login(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  try {
    const usuarioLogado = await handleLogin(usuarioLogin);

    if (usuarioLogado.tipoUsuario === "MOTORISTA") {
      navigate("/dashboard-motorista");
    } else if (usuarioLogado.tipoUsuario === "PASSAGEIRO") {
      navigate("/dashboard-passageiro");
    } else {
      navigate("/home");
    }

  } catch (error) {
    ToastAlerta("Usuário ou senha incorretos!", "error");
  }
}



  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-50 via-white to-rose-50" />
      <div className="absolute w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -top-40 -left-40" />
      <div className="absolute w-96 h-96 bg-pink-200/20 rounded-full blur-3xl -bottom-40 -right-40" />

      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg p-8">

        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Entrar
        </h2>

        <form onSubmit={login} className="flex flex-col gap-4">

          <div className="flex gap-2 bg-stone-100/80 p-1 rounded-xl">
            <button
              type="button"
              onClick={() =>
                setUsuarioLogin({ ...usuarioLogin, tipoUsuario: "PASSAGEIRO" })
              }
              className={`flex-1 py-2 rounded-lg font-medium ${
                usuarioLogin.tipoUsuario === "PASSAGEIRO"
                  ? "bg-white shadow text-gray-900"
                  : "text-stone-500"
              }`}
            >
              Passageiro
            </button>

            <button
              type="button"
              onClick={() =>
                setUsuarioLogin({ ...usuarioLogin, tipoUsuario: "MOTORISTA" })
              }
              className={`flex-1 py-2 rounded-lg font-medium ${
                usuarioLogin.tipoUsuario === "MOTORISTA"
                  ? "bg-white shadow text-gray-900"
                  : "text-stone-500"
              }`}
            >
              Motorista
            </button>
          </div>

          <input
            type="text"
            name="usuario"
            placeholder="Usuário"
            value={usuarioLogin.usuario}
            onChange={atualizarEstado}
            required
            className="px-4 py-3 rounded-lg border border-stone-200"
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={usuarioLogin.senha}
            onChange={atualizarEstado}
            required
            className="px-4 py-3 rounded-lg border border-stone-200"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 py-3 rounded-lg font-medium bg-gradient-to-r from-yellow-200 via-pink-200 to-rose-200"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-5">
          Não tem conta?{" "}
          <Link to="/cadastro" className="font-medium hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
