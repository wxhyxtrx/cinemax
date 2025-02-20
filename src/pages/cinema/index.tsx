import PrivateLayout from "@/components/layouts/views/privateLayout";
import Cinema from "@/components/molecules/cinema";
import { dataStatic } from '../../constants/datastatic';
import Text from "@/components/ui/text";
const ListCinema = () => {
  return (
    <PrivateLayout>
      <div className=" mt-4 text-line-gray allTab:text-lg">
        <Text>Cinema Place</Text>
      </div>
      <div id="cinema-place" className=" mt-4">
        {dataStatic.looping.slice(0, 3).map((idx) => (
          <Cinema name="Cinemplex XXI" key={idx} />
        ))}
      </div>
    </PrivateLayout>
  );
};
export default ListCinema;
