"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div>
      <hr />
      <div className="flex flex-col">
        <div>
          <h3>{session?.user?.name}</h3>
          <span>{session?.user?.email}</span>
        </div>

        <span>{session?.user?.image}</span>
      </div>
    </div>
  );
};

export default Profile;
