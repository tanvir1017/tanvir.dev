import { format } from "date-fns";

export default function TimeFormatter({ time }) {
  return <>{format(new Date(time), "yyyy-MM-dd ppp")}</>;
}
