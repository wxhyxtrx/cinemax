import Header from "@/components/molecules/header";
import Tab from "@/components/molecules/tab";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative pb-10">
            <div className="p-4 sticky top-0 z-10 bg-primary-dark">
                <Header username={"Wahyu Tricahyo"} />
            </div>
            <div className="px-4">
                {children}
            </div>
            <Tab />
        </div>
    )
}
