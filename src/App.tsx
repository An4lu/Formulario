import { MultiSelect } from "./components/MultiSelect";
import { Sidebar } from "./components/Sidebar";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();
  return (
    <div>
      <Sidebar />
      {/* <h1>Oidkbnfkhsbfgjhsdfbgjhsdbfgjhsdbfg</h1>
      <MultiSelect options={[{ label: "Chuva", value: "Água" }]} /> */}
    </div>
  );
}
