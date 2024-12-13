
import headerimage from '../../assets/background menu.jpeg';

const Header = () => {
  return (
    <div
      className="relative flex justify-center w-full  bg-cover bg-center pt-20"
      style={{ backgroundImage: `url(${headerimage})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-1/2 flex flex-col items-center text-white">
        <p className="font-oswald text-6xl ">MENU</p>
        <p className="mt-4 text-center">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
        <div className="mt-6">
          
        </div>
      </div>
    </div>
  );
};

export default Header;
