import { NavLink } from "react-router-dom";
import { assets } from "../../img/assets";
import './sider.css'
function Siderbar() {
  const siderdata = [
    { name: "Dashboard", path: "/owenr", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owenr/addroom", icon: assets.addIcon },
    { name: "List Room", path: "/owenr/listroom", icon: assets.listIcon },
  ];

  return (
    // <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
    //   {siderdata.map((item, index) => (
    //     <NavLink

    //       key={index}
    //       to={item.path}
    //       end="/owenr"
    //       className={({ isActive }) =>
    //         `flex items-center py-3 px-4 md:px-8 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600" : "hover:bg-gray-100/90 border-white text-gray-700"}`
    //       }
    //     >
    //       <img src={item.icon} alt="icon" 
        
    //     //   className="min-h-6 min-w-6"
    //        />
    //       <p className="hidden md:block font-medium text-sm">{item.name}</p>
    //     </NavLink>
    //   ))}
    // </div>

  // شلنا w-16 و md:w-64 وثبتنا العرض يكون كبير علطول w-64
  <div className="all w-64 border-r h-screen border-gray-300 pt-4 flex flex-col transition-all duration-300">
    {siderdata.map((item, index) => (
      <NavLink 
      className='link'
        key={index} 
        to={item.path}
        end
        style={({ isActive }) => ({
          padding: '12px 24px',
          backgroundColor: isActive ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
          color: isActive ? '#2563eb' : '#4b5563',
          borderRight: isActive ? '4px solid #2563eb' : '4px solid transparent',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        })}
      >
        {/* الأيقونة */}
        <img src={item.icon} alt="icon" className="h-6 w-6 min-w-6" />
        
        {/* شلنا hidden و md:block عشان الكلمة تفضل ظاهرة وماتختفيش أبداً */}
        <span className="fonhid font-medium text-sm">{item.name}</span>
      </NavLink>
    ))}
  </div>


  );
}

export default Siderbar;
