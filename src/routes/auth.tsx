import View from '@/components/layouts/views'
import Authentication from '@/pages/auth'
import { publicRoute } from '@/components/layouts/routes/publicRoute'

export const Route = publicRoute('/auth', AuthRoute)

function AuthRoute() {
  return (
    <View>
      <Authentication />
    </View>
  )
}
