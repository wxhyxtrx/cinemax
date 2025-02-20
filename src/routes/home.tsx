import View from "@/components/layouts/views";
import Home from "@/pages/home";
import { privateRoute } from "@/components/layouts/routes/privateRoute";
export const Route = privateRoute("/home", Beranda);

function Beranda() {
  return (
    <View>
      <Home />
    </View>
  );
}
