import { Layout229, Layout229Defaults } from "@/components/teachers/Layout229";
import { Layout38, Layout38Defaults } from "@/components/teachers/Layout38";
import { Layout44,Layout44Defaults } from "@/components/teachers/Layout44";

export default function Teachers(){
    return (
        <>
        <Layout44 {...Layout44Defaults} />
        <Layout229 {...Layout229Defaults}/>
        </>
    )
}