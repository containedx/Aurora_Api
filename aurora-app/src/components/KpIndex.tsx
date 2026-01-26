import { useEffect, useState } from "react";
import { fetchKPIndex, type KPEntry } from "./aurora-api/KpIndexApi";

export default function KpIndex() {
  const [data, setData] = useState<KPEntry[]>([]);
  const [error, setError] = useState(false);

  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    fetchKPIndex()
      .then(allData => {
        const todayData = allData.filter(entry => entry.time.startsWith(today));
        setData(todayData);
      })
      .catch(() => setError(true));
  }, []);

  if (error) return <p>Failed to load Kp 😵</p>;

  return (
    <div>
      <h2>Kp Index Today - {today} </h2>
      <ul>
        {data.map((e, i) => (
          <li key={i}>
            {e.time} — <strong>Kp {e.kp}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
