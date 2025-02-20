import View from "@/components/layouts/views";
import Register from "@/pages/auth/register";
import { publicRoute } from "@/components/layouts/routes/publicRoute";
export const Route = publicRoute("/signup", SignUp)

function SignUp() {
  return (
    <View>
      <Register />
    </View>
  );
}
