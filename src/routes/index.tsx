import View from "@/components/layouts/views";
import Onboarding from "@/pages/onboarding";
import { publicRoute } from "@/components/layouts/routes/publicRoute";
export const Route = publicRoute('/', OnBoarding)

function OnBoarding() {
  return (
    <View>
      <Onboarding />
    </View>
  );
}
