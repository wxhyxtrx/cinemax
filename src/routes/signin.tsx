import View from '@/components/layouts/views';
import Login from '@/pages/auth/login';
import { publicRoute } from '@/components/layouts/routes/publicRoute';
export const Route = publicRoute('/signin', SignIn)

function SignIn() {
  return (
    <View>
      <Login />
    </View>
  )
}
