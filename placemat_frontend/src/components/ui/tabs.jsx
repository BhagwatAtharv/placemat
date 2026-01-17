import { useState, createContext, useContext } from "react";

const TabsContext = createContext();

/**
 * Tabs wrapper
 */
export function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

/**
 * TabsList
 */
export function TabsList({ children }) {
  return (
    <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-xl">
      {children}
    </div>
  );
}

/**
 * TabsTrigger
 */
export function TabsTrigger({ value, children }) {
  const { value: active, setValue } = useContext(TabsContext);

  return (
    <button
      onClick={() => setValue(value)}
      className={`px-4 py-2 rounded-lg text-sm transition
        ${active === value
          ? "bg-white shadow text-blue-600"
          : "text-gray-600 hover:text-black"}`}
    >
      {children}
    </button>
  );
}

/**
 * TabsContent
 */
export function TabsContent({ value, children }) {
  const { value: active } = useContext(TabsContext);

  if (active !== value) return null;
  return <div className="mt-4">{children}</div>;
}
