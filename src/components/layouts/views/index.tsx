import Tab from "@/components/molecules/tab";
import "./views.css";
const View = ({ children }: any) => {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat bg-fixed'
      style={{ backgroundImage: " url('/assets/overlay.webp') " }}
    >
      <div className="flex justify-center w-full h-full bg-primary-light/95">
        <div
          id='content'
          className=' min-h-screen lg:max-w-sm allDekstop:max-w-sm w-full m-auto bg-primary-dark text-white-gray scroll-smooth allDekstop:shadow-xl allDekstop:shadow-primary-dark '
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default View;
