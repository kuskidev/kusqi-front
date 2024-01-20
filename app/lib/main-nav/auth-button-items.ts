import { AuthButtonsType } from '@/app/types/components-types'
import { FaUser, FaUserPlus } from 'react-icons/fa6'

export const authButtons: AuthButtonsType[] = [
    {
        title: 'Ingresar',
        link: '/login',
        tooltip: 'Iniciar sesión',
        icon: FaUser,
    },
    {
        title: 'Registrarse',
        link: '/register',
        tooltip: 'Registrarse',
        icon: FaUserPlus,
    },
]
