import { CreateProblemCard } from './create-problem-card'
import { PastPresentFutureTable } from './past-present-futur-table'
import { ProblemListTable } from './problem-list-table'
import { AuthoredProblemsTable } from './authored-problems-table'
import { CreatedContestsTable } from './create-contests-table'

export function ProblemDashboard() {
    return (
        <div className="grid gap-8 p-4">
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Create New Problem</h2>
                <CreateProblemCard />
            </section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Global Contests</h2>
                    <PastPresentFutureTable />
                </div>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Problem List</h2>
                    <ProblemListTable />
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Authored Problems</h2>
                    <AuthoredProblemsTable />
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Created Contests</h2>
                    <CreatedContestsTable />
                </section>
            </div>
        </div>
    )
}

