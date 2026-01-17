import { User, Edit } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";

/**
 * ProfileHeader
 * ----------------------------------
 * Shows avatar, name, email & edit button
 */
export default function ProfileHeader({ user }) {
  return (
    <Card className="p-6 flex items-center gap-6">
      
      <Avatar className="w-20 h-20 text-2xl">
        <User />
      </Avatar>

      <div className="flex-1">
        <h1 className="text-3xl">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* ===============================================
          BACKEND ATTACHMENT POINT #2
          -----------------------------------------------
          Clicking Edit will later:
          - Open a modal
          - Allow editing profile
          - Send updated data to backend
      =============================================== */}
      <Button className="rounded-xl flex gap-2">
        <Edit size={16} />
        Edit Profile
      </Button>
    </Card>
  );
}
