import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "../ui/card";

/**
 * ProfileDetails
 * ----------------------------------
 * Displays user personal information
 */
export default function ProfileDetails({ user }) {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-2xl">Personal Information</h2>

      <div className="flex items-center gap-3 text-gray-700">
        <Mail size={18} />
        {user.email}
      </div>

      <div className="flex items-center gap-3 text-gray-700">
        <Phone size={18} />
        {user.phone}
      </div>

      <div className="flex items-center gap-3 text-gray-700">
        <MapPin size={18} />
        {user.location}
      </div>

      {/* ===============================================
          BACKEND ATTACHMENT POINT #3
          -----------------------------------------------
          These fields will later be:
          - Editable
          - Synced with backend
          API Example:
          PUT /api/user/update
      =============================================== */}
    </Card>
  );
}
