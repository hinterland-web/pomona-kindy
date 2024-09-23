import { Layout229, Layout229Defaults } from "@/components/teachers/Layout229";
import { Layout44, Layout44Defaults } from "@/components/teachers/Layout44";

export default function Teachers() {
  return (
    <div>
      <Layout44 {...Layout44Defaults} />
      <div className="bg-gradient-secondary text-base-400">
        <Layout229 {...Layout229Defaults} />
      </div>
    </div>
  );
}
