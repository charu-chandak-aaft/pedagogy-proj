'use client';

import MyProfile from "../../../components/MyProfile";
import UserInfo from "../../../components/UserInfo";

export default function ProfilePage() {
  return (
    <div className="py-6">
      <UserInfo />
      <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">
        Profile
      </h2>
      <MyProfile />
    </div>
  );
}