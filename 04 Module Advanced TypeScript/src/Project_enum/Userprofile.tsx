import { useState } from "react";

enum Roles {
    Admin= "The full access",
    User= "Limited access",
    Guest= "Very limited access"
}

const Userprofile = () => {
    const [userRole, setUserRole] = useState<Roles>(Roles.Guest);
  return (
    <div>
        <p>Your current  roles is {userRole}</p>
        <button onClick={()=>setUserRole(Roles.Admin)}>Promote to Admin</button>
        <button onClick ={()=>setUserRole(Roles.User)}>Promote to User</button>
        <button onClick= {()=>setUserRole(Roles.Guest)}>Promote to Guest</button>

    </div>
  );
}

export default Userprofile;
