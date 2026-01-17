import TestCard from "./TestCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const TestTabs = ({ tests, onNavigate }) => {
  const filter = (status) => tests.filter(t => t.status === status);

  return (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>

      {["active", "upcoming", "completed"].map(status => (
        <TabsContent key={status} value={status}>
          <div className="space-y-4">
            {filter(status).map(test => (
              <TestCard
                key={test.id}
                test={test}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TestTabs;
