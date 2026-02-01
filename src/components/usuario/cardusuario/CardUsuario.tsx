import type Usuario from '../../../models/Usuario';

interface CardUsuarioProps {
  usuario: Usuario
}

function CardUsuario({ usuario: Usuario }: CardUsuarioProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={Usuario.foto}
          alt={`Foto de perfil de ${Usuario.nome}`}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {Usuario.nome}
          </h2>
          <p className="text-sm text-gray-600">{Usuario.usuario}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
          {Usuario.tipoUsuario}
        </span>

        <span className="text-xs text-gray-500">
          Criado em:{' '}
          {new Date(Usuario.data).toLocaleDateString('pt-BR')}
        </span>
      </div>
    </div>
  )
}

export default CardUsuario
