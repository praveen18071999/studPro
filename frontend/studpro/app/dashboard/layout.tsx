import { ReactNode } from "react";

export default function DashboardLayout({
    children,
    problemAuthorCard,
    problemLevelCountChart,
    problemMonthlyCountChart,
    problemTable,
}: {
    children: ReactNode;
    problemAuthorCard: ReactNode;
    problemLevelCountChart: ReactNode;
    problemMonthlyCountChart: ReactNode;
    problemTable: ReactNode;
}) {
    //debugger;
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Coding Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {problemAuthorCard}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   {problemLevelCountChart}
                   {problemMonthlyCountChart}
                </div>
                {problemTable}
                {children}
            </div>
        </>
    );
}