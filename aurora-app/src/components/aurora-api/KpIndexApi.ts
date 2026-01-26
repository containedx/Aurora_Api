export type KPEntry = {
  time: string;
  kp: number;
};

const KP_API_URL = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";

export async function fetchKPIndex(): Promise<KPEntry[]> {
  const res = await fetch(KP_API_URL);
  if (!res.ok) throw new Error("NOAA error :(");

  const raw: string[][] = await res.json();

  return raw.slice(1).map(row => ({
    time: row[0],
    kp: Number(row[1]),
  }));
}
