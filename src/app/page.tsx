import { profile } from "@/data/profile";
import Icon from "@/components/ui/Icon";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="">{profile.name}</h1>
      <Icon name="Mail" size={25} />
    </div>
  );
}
