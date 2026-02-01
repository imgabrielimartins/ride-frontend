import { useNavigate } from 'react-router-dom'
import type Usuario from '../../../models/Usuario'
import { deletar } from '../../../services/Service'

interface DeletaUsuarioProps {
  usuario: Usuario
}

function DeletaUsuario({ usuario }: DeletaUsuarioProps) {
  const navigate = useNavigate()

  async function deletarUsuario() {
    try {
      await deletar(
        `/usuarios/${usuario.id}`,
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      )

      alert(`Usuárie ${usuario.nome} removide com sucesso`)
      navigate('/usuarios')
    } catch (error) {
      console.error(error)
      alert('Erro ao remover usuárie. Tente novamente.')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        Deletar Usuárie
      </h1>

      <p className="text-gray-600 mb-6">
        Tem certeza que deseja remover o perfil de{' '}
        <span className="font-medium">{usuario.nome}</span>?
        <br />
        Essa ação não poderá ser desfeita.
      </p>

      <div className="flex justify-end gap-4">
        <button
          onClick={() => navigate('/usuarios')}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          Cancelar
        </button>

        <button
          onClick={deletarUsuario}
          className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          Deletar
        </button>
      </div>
    </div>
  )
}

export default DeletaUsuario
