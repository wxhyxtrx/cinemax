import { privateRoute } from "@/components/layouts/routes/privateRoute";
import View from "@/components/layouts/views";
import ListCinema from "@/pages/cinema";

export const Route = privateRoute("/cinema", Bioskop);

function Bioskop() {
  return (
    <View>
      <ListCinema />
    </View>
  );
}
