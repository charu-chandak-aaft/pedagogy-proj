'use client';

import RequestNotification from "../../../components/RequestNotification";
import NotificationReq from "../../../components/NotificationReq";

export default function RequestPage() {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">
        Notification / Requests
      </h2>
      <RequestNotification />
      <NotificationReq />
    </div>
  );
}