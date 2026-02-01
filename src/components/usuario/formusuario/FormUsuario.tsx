import {  useState, type FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Usuario from '../../../models/Usuario'
import { cadastrarUsuario } from '../../../services/Service'

function FormUsuario() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    sexo: '',
    data: '',
    tipoUsuario: ''
  })

  function atualizarEstado(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario)
      alert('Usuárie cadastrade com sucesso!')
      navigate('/usuarios')
    } catch (error) {
      console.error(error)
      alert('Erro ao salvar usuárie.')
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">
        {id ? 'Editar Usuárie' : 'Cadastrar Usuárie'}
      </h1>

      <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium">Nome</label>
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={atualizarEstado}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Usuário / Email</label>
          <input
            type="email"
            name="usuario"
            value={usuario.usuario}
            onChange={atualizarEstado}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Senha</label>
          <input
            type="password"
            name="senha"
            value={usuario.senha}
            onChange={atualizarEstado}
            required={!id}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Foto (URL)</label>
          <input
            type="text"
            name="foto"
            value={usuario.foto}
            onChange={atualizarEstado}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Sexo</label>
          <select
            name="sexo"
            value={usuario.sexo}
            onChange={atualizarEstado}
            className="w-full border rounded-lg p-2"
          >
            <option value="">Selecione</option>
            <option value="FEMININO">Feminino</option>
            <option value="MASCULINO">Masculino</option>
            <option value="OUTRO">Outro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Tipo de Usuário</label>
          <select
            name="tipoUsuario"
            value={usuario.tipoUsuario}
            onChange={atualizarEstado}
            required
            className="w-full border rounded-lg p-2"
          >
            <option value="">Selecione</option>
            <option value="CLIENTE">Cliente</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate('/usuarios')}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormUsuario
