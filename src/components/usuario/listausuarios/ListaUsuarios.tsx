import { useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
import CardUsuario from '../cardusuario/CardUsuario'
import type Usuario from '../../../models/Usuario'
import { buscar } from '../../../services/Service'
import { ToastAlerta } from '../../../util/ToastAlerta'
import { AuthContext } from '../../../contexts/AuthContext'

function ListaUsuarios() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado!', 'error')
      navigate('/')
    }
  }, [token, navigate])

  useEffect(() => {
    if (token !== '') {
      buscarUsuarios()
    }
  }, [token])

  async function buscarUsuarios() {
    try {
      setIsLoading(true)
      await buscar('/usuarios', setUsuarios, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <SyncLoader color="#3b82f6" size={12} />
        </div>
      )}
      {!isLoading && (
        <div className="min-h-screen bg-gray-100 py-12 px-6 flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-3xl font-bold text-gray-800">
                Usuáries Cadastrades
              </h1>
              <Link
                to="/cadastrarUsuario"
                className="
                  px-5 py-2.5
                  rounded-xl
                  bg-gradient-to-r from-blue-500 to-blue-600
                  hover:from-blue-600 hover:to-blue-700
                  text-white font-medium
                  shadow-md
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                "
              >
                + Novo Usuárie
              </Link>
            </div>
            
            {usuarios.length === 0 ? (
              <span className="text-lg text-gray-600 block text-center my-8">
                Nenhum usuárie foi encontrade!
              </span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {usuarios.map(usuario => (
                  <CardUsuario key={usuario.id} usuario={usuario} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ListaUsuarios