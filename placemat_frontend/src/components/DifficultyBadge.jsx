import { Badge } from "./ui/badge";

export const DifficultyBadge = ({ difficulty }) => {
  switch (difficulty) {
    case "Easy":
      return <Badge className="bg-green-100 text-green-700">Easy</Badge>;
    case "Medium":
      return <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>;
    case "Hard":
      return <Badge className="bg-red-100 text-red-700">Hard</Badge>;
    default:
      return null;
  }
};
