import Tab from "@/components/molecules/tab";
import "./views.css";
const View = ({ children }: any) => {
  return (
    <div
      className='relative h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: " url('/assets/overlay.webp') " }}
    >
      <div className=' flex flex-1 w-screen h-screen justify-center bg-primary-light/95 fixed select-none '>
        <div
          id='background'
          className=' relative w-full grid grid-cols-3 items-stretch justify-center'
        >
          <div
            id='shapeTop'
            className='  h-72 w-72 bg-gradient-to-br from-indigo-700 rounded-full -ms-52 to-transparent blur-3xl'
          ></div>
          <div
            id='shapeMid'
            className=' rounded-full bg-gradient-to-r from-primary-verde to-indigo-900 blur-3xl 2xl:from-primary-verde/75 2xl:to-indigo-950/75'
          ></div>
          <div
            id='shapeBottom'
            className=' absolute bottom-0 -right-40  h-64 w-64 bg-gradient-to-tr from-primary-verde to-transparent blur-3xl'
          ></div>
        </div>
        <div
          id='content'
          className=' fixed m-auto allDekstop:w-96 allMobile:w-screen allTab:w-screen h-screen overflow-x-auto bg-primary-dark text-white-gray scroll-smooth allDekstop:shadow-xl allDekstop:shadow-primary-dark '
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default View;
